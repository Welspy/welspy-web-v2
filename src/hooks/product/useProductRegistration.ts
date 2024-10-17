import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ProductRegistrationProps } from "src/type/productRegistration.types";
import CONFIG from "src/config/config.json";

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
        if (products.price > 0 && products.discount > 0) {
            const rate = ((products.price - products.discount) / products.price) * 100;
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

    const registerProduct = (imageFile: File | null) => {
        if (!imageFile) {
            setMessage("이미지를 선택해 주세요.");
            return;
        }

        const formData = new FormData();
        formData.append("image", imageFile);

        axios.post(`${CONFIG.serverUrl}/s3`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${Cookies.get('accessToken')}`,
            },
        })
            .then((imageResponse) => {
                const imageUrl = imageResponse.data.url;

                const productData = {
                    ...products,
                    imageUrl, // 수정: imageUrl에 저장
                };

                return axios.post(`${CONFIG.serverUrl}/product`, productData, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${Cookies.get('accessToken')}`,
                    },
                });
            })
            .then((response) => {
                setStatus(response.status);
                setMessage(response.data.message);

                if (response.status === 201) {
                    setProducts({
                        name: "",
                        description: "",
                        price: 0,
                        discount: 0,
                        imageUrl: "",
                    });
                }
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setStatus(error.response?.status || 500);
                    setMessage(error.response?.data.message || "제품 등록에 실패했습니다.");
                } else {
                    console.error("Error registering product:", error);
                    setStatus(500);
                    setMessage("제품 등록에 실패했습니다.");
                }
            });
    };

    const deleteImage = (imageUrl: string) => {
        if (!imageUrl) {
            setMessage("삭제할 이미지 URL이 필요합니다.");
            return;
        }

        axios.delete(`${CONFIG.serverUrl}/s3`, {
            params: { imageUrl },
            headers: {
                "Authorization": `Bearer ${Cookies.get('accessToken')}`,
            },
        })
            .then((response) => {
                setStatus(response.status);
                setMessage(response.data.message);
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setStatus(error.response?.status || 500);
                    setMessage(error.response?.data.message || "이미지 삭제에 실패했습니다.");
                } else {
                    console.error("Error deleting image:", error);
                    setStatus(500);
                    setMessage("이미지 삭제에 실패했습니다.");
                }
            });
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
