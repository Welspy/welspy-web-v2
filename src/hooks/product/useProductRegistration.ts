import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ProductRegistrationProps } from "src/type/productRegistration.types";
import CONFIG from "src/config/config.json";

// 상수 정의
const MAX_IMAGE_SIZE_MB = 1; // 최대 이미지 크기 (MB)
const MAX_IMAGE_SIZE_BYTES = MAX_IMAGE_SIZE_MB * 1024 * 1024; // 최대 이미지 크기 (바이트)

const useProductRegistration = () => {
    const [products, setProducts] = useState<ProductRegistrationProps>({
        name: "",
        description: "",
        price: 0,
        discount: 0,
        imageUrl: "",
    });

    const [status, setStatus] = useState<number | null>(null);
    const [message, setMessage] = useState<string>("");
    const [discountRate, setDiscountRate] = useState<number>(0);

    // 할인률 계산
    useEffect(() => {
        const { price, discount } = products;
        if (price > 0 && discount >= 0) {
            const rate = ((price - discount) / price) * 100;
            setDiscountRate(Math.floor(rate));
        } else {
            setDiscountRate(0);
        }
    }, [products.price, products.discount]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProducts((prev) => ({
            ...prev,
            [name]: name === "price" || name === "discount" ? Number(value) : value,
        }));
    };

    const validateProductData = () => {
        const { name, description, price, discount } = products;
        if (!name || !description || price <= 0 || discount < 0) {
            setMessage("모든 필드를 올바르게 입력해 주세요.");
            return false;
        }
        return true;
    };

    const isImageFileValid = (file: File | null) => {
        if (!file) return false;
        if (file.size > MAX_IMAGE_SIZE_BYTES) {
            setMessage(`이미지 크기는 ${MAX_IMAGE_SIZE_MB}MB 이하로 선택해 주세요.`);
            return false;
        }
        return true;
    };

    const uploadImage = (imageFile: File) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        const token = Cookies.get('accessToken');
        return axios.post(`${CONFIG.serverUrl}/s3`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
            },
        });
    };

    const registerProduct = (imageFile: File | null) => {
        if (!imageFile) {
            setMessage("이미지를 선택해 주세요.");
            return;
        }

        if (!isImageFileValid(imageFile) || !validateProductData()) return;

        const token = Cookies.get('accessToken');

        uploadImage(imageFile)
            .then(imageResponse => {
                const imageUrl = imageResponse?.data?.data;
                console.log("Received imageUrl:", imageUrl);

                // imageUrl이 존재하는지 확인
                if (!imageUrl) {
                    throw new Error("이미지 업로드에 실패했습니다."); // 에러 발생
                }

                // blob: 제거
                const cleanedImageUrl = imageUrl.replace(/^blob:/, "");

                const productData = { ...products, imageUrl: cleanedImageUrl };
                console.log("Product data before sending:", productData); // productData 로그 출력

                return axios.post(`${CONFIG.serverUrl}/product`, productData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
            })
            .then(response => {
                setStatus(response.status);
                setMessage(response.data.message);

                if (response.status === 201) {
                    resetProductForm();
                }
            })
            .catch(error => {
                handleError(error);
            });
    };

    const resetProductForm = () => {
        setProducts({
            name: "",
            description: "",
            price: 0,
            discount: 0,
            imageUrl: "",
        });
    };

    const deleteImage = (imageUrl: string) => {
        if (!imageUrl) {
            setMessage("삭제할 이미지 URL이 필요합니다.");
            return;
        }

        // blob: 제거
        const cleanedImageUrl = imageUrl.replace(/^blob:/, "");

        const token = Cookies.get('accessToken');

        axios.delete(`${CONFIG.serverUrl}/s3`, {
            params: { imageUrl: cleanedImageUrl },
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(response => {
                setStatus(response.status);
                setMessage(response.data.message);
            })
            .catch(error => {
                handleError(error);
            });
    };

    const handleError = (error: any) => {
        if (axios.isAxiosError(error)) {
            setStatus(error.response?.status || 500);
            setMessage(error.response?.data?.message || "오류가 발생했습니다.");
            console.error("Error details:", error.response?.data);
        } else {
            setStatus(500);
            setMessage("알 수 없는 오류가 발생했습니다.");
            console.error("Unexpected error:", error);
        }
    };

    return {
        products,
        handleChange,
        registerProduct,
        deleteImage,
        discountRate,
        status,
        message,
    };
};

export default useProductRegistration;
