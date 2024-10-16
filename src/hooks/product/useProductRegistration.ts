import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import CONFIG from 'src/config/config.json';
import { ProductRegistrationProps } from 'src/type/productRegistration.types';

interface APIErrorResponse {
    message: string;
}

const useProductRegistration = () => {
    const [productData, setProductData] = useState<ProductRegistrationProps>({
        name: "",
        description: "",
        price: 0,
        discount: 0,
        imageUrl: ""
    });

    const [discountPercentage, setDiscountPercentage] = useState<number>(0);
    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        const storedToken = Cookies.get("token");
        setToken(storedToken);
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProductData((prevData) => ({
                ...prevData,
                imageUrl: URL.createObjectURL(file),
            }));
        }
    };

    const removeImage = () => {
        setProductData((prevData) => ({
            ...prevData,
            imageUrl: '',
        }));
    };

    useEffect(() => {
        if (productData.price > 0 && productData.discount > 0) {
            const calculatedDiscountPercentage = ((productData.price - productData.discount) / productData.price) * 100;
            setDiscountPercentage(parseFloat(calculatedDiscountPercentage.toFixed(2)));
        }
    }, [productData.price, productData.discount]);

    const productPost = async (data: ProductRegistrationProps) => {
        if (!data.name || !data.description || data.price <= 0 || data.discount <= 0 || !data.imageUrl) {
            window.alert("모든 정보를 정확하게 입력해주세요.");
            return;
        }

        const token = Cookies.get("token");
        if (!token) {
            window.alert("인증되지 않은 사용자입니다. 로그인 해주세요.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('price', data.price.toString());
            formData.append('discount', data.discount.toString());

            // 이미지 파일 추가
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            const file = fileInput?.files?.[0];
            if (file) {
                formData.append('image', file);
            } else {
                window.alert("이미지를 선택해 주세요.");
                return;
            }

            const response = await axios.post(`${CONFIG.serverUrl}/product`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });

            window.alert("제품이 성공적으로 등록되었습니다.");

            setProductData({
                name: "",
                description: "",
                price: 0,
                discount: 0,
                imageUrl: "",
            });

            setDiscountPercentage(0);

            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<APIErrorResponse>;

            if (axiosError.response) {
                console.error('Response error:', axiosError.response.data);
                if (axiosError.response.status === 401) {
                    window.alert("인증 실패. 다시 로그인 해주세요.");
                } else {
                    window.alert("오류 발생: " + axiosError.response.data.message);
                }
            } else {
                console.error('Request error:', error);
                window.alert("서버와의 통신에 문제가 발생했습니다.");
            }
            throw error;
        }
    };

    return {
        productData,
        setProductData,
        productPost,
        discountPercentage,
        handleImageChange,
        removeImage,
    };
};

export default useProductRegistration;
