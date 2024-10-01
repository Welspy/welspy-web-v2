import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import CONFIG from '../../config/config.json';
import { ProductProps } from '../../type/product.types';

const useProductRegistration = () => {
    const [productData, setProductData] = useState<ProductProps>({
        name: "",
        description: '',
        price: 0,
        discount: 0,
        imageUrl: '',
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const token = Cookies.get("token");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData(prevState => ({
            ...prevState,
            [name]: name === 'price' || name === 'discount' || name === 'discountedPrice' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post(`${CONFIG.serverUrl}/product`, productData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (res.status === 201) {
                alert('제품 등록 성공!');
                setProductData({
                    name: "",
                    description: '',
                    price: 0,
                    discount: 0,
                    imageUrl: '',
                });
            }
        } catch (err) {
            setError('제품 등록에 실패했습니다.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        productData,
        error,
        loading,
        handleChange,
        handleSubmit
    };
};

export default useProductRegistration;
