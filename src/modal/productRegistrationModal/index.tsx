import React from 'react';
import ReactDOM from 'react-dom';
import useProductRegistration from 'src/hooks/product/useProductRegistration';
import * as S from "../style"

interface ModalProps {
    onClose: () => void;
}

const ProductRegistrationModal: React.FC<ModalProps> = ({ onClose }) => {
    const { productData, setProductData, productPost, handleImageChange, removeImage } = useProductRegistration();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await productPost(productData);
            console.log('Product registered successfully:', response);
            onClose();
        } catch (error) {
            console.error('Error registering product:', error);
        }
    };

    const modalRoot = document.getElementById('modal');

    if (!modalRoot) {
        return null;
    }

    return ReactDOM.createPortal(
        <S.Wrapper> {/* S. 접두어 사용 */}
            <S.MainWrapper>
                <S.ModalTitle>제품 등록하기</S.ModalTitle>
                <S.FormContainer onSubmit={handleSubmit}>
                    <S.FormField>
                        <S.FieldLabel>제품 이름:</S.FieldLabel>
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleChange}
                            required
                        />
                    </S.FormField>
                    <S.FormField>
                        <S.FieldLabel>제품 설명:</S.FieldLabel>
                        <textarea
                            name="description"
                            value={productData.description}
                            onChange={handleChange}
                            required
                        />
                    </S.FormField>
                    <S.FormField>
                        <S.FieldLabel>가격:</S.FieldLabel>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            required
                        />
                    </S.FormField>
                    <S.FormField>
                        <S.FieldLabel>수량:</S.FieldLabel>
                        <input
                            type="number"
                            name="discount"
                            value={productData.discount}
                            onChange={handleChange}
                            required
                        />
                    </S.FormField>
                    <S.FormField>
                        <S.FieldLabel>이미지 업로드:</S.FieldLabel>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </S.FormField>
                    {productData.imageUrl && (
                        <S.FormField>
                            <img
                                src={productData.imageUrl}
                                alt="미리보기"
                                style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
                            />
                            <button type="button" onClick={removeImage}>삭제</button>
                        </S.FormField>
                    )}
                    <S.SubmitButton type="submit">제품 등록</S.SubmitButton>
                    <S.CancelButton type="button" onClick={onClose}>취소</S.CancelButton>
                </S.FormContainer>
            </S.MainWrapper>
        </S.Wrapper>,
        modalRoot
    );
};

export default ProductRegistrationModal;
