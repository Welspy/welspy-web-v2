import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import CONFIG from 'src/config/config.json';
import { ProductProps } from 'src/type/product.types';

const useProductRegistration = () => {
    const [productData, setProductData] = useState<ProductProps>({
        name: "",
        description: '',
        price: 0,
        discount: 0,
        imageUrl: '',
    });

    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        const storedToken = Cookies.get("token");
        setToken(storedToken);
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setProductData((prevData) => ({
                ...prevData,
                imageUrl: newImageUrl,
            }));
        }
    };

    const removeImage = () => {
        setProductData((prevData) => ({
            ...prevData,
            imageUrl: '',
        }));
    };

    const productPost = async (data: ProductProps) => {
        if (!data.name || !data.description || data.price <= 0 || data.discount < 0 || !data.imageUrl) {
            window.alert("정보를 다 등록해주세요.");
            return;
        }

        if (!token) {
            console.error("No token found. User is not authenticated."); // 디버깅을 위한 로그 추가
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
            const response = await axios.post(`${CONFIG.serverUrl}/product`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;

            if (axiosError.response) {
                console.error('Response error:', axiosError.response.data);
                if (axiosError.response.status === 401) {
                    window.alert("인증 실패. 다시 로그인 해주세요.");
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
        handleImageChange,
        removeImage,
    };
};

export default useProductRegistration;
