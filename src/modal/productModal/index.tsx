import React, { useState, useEffect } from 'react';
import * as S from './style';
import useProductRegistration from "src/hooks/product/useProductRegistration";

interface Props {
    ClickProductModal: () => void;
}

const ProductModal = ({ ClickProductModal }: Props) => {
    const { products, handleChange, registerProduct, deleteImage, discountRate, status, message } = useProductRegistration();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    // 이미지 선택 핸들러
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0])); // 선택된 이미지 URL 생성
        }
    };

    // 제품 등록 핸들러
    const handleProductSubmit = () => {
        registerProduct(selectedImage); // 선택된 이미지를 등록 함수에 전달
    };

    // 제품 등록 후 이미지 URL 업데이트
    useEffect(() => {
        if (products.imageUrl) {
            setImageUrl(products.imageUrl); // 제품 등록 후 이미지 URL 설정
        }
    }, [products.imageUrl]);

    // 이미지 삭제 핸들러
    const handleImageDelete = () => {
        if (imageUrl) {
            deleteImage(imageUrl);
            setImageUrl(null);
            setSelectedImage(null);
        }
    };

    // 상태 메시지 alert 처리
    useEffect(() => {
        if (status) {
            alert(message);
        }
    }, [status, message]);

    return (
        <S.Wrapper>
            <S.MainWrapper>
                <S.ModalCloseButton onClick={ClickProductModal}>×</S.ModalCloseButton>
                <h2 style={{ textAlign: 'center', margin: '10px 0' }}>제품 등록하기</h2>
                <S.ProductRegistrationInputWrapper>
                    <S.ImageWrapper>
                        {imageUrl ? (
                            <>
                                <S.PreviewImage src={imageUrl} alt="Selected" />
                                <S.DeleteButton onClick={handleImageDelete}>이미지 삭제</S.DeleteButton>
                            </>
                        ) : selectedImage ? (
                            <S.PreviewImage src={URL.createObjectURL(selectedImage)} alt="Selected" />
                        ) : null}
                        <S.CustomButton>
                            이미지 선택
                            <S.ProductImgInput type="file" accept="image/*" onChange={handleImageChange} />
                        </S.CustomButton>
                    </S.ImageWrapper>
                    <S.ProductInputWrapper>
                        <S.TitleInput
                            placeholder="제품 이름을 입력하세요."
                            name="name"
                            value={products.name}
                            onChange={handleChange}
                        />
                        <S.ProductDescriptionInput
                            placeholder="제품을 설명해주세요."
                            name="description"
                            value={products.description}
                            onChange={handleChange}
                        />
                        <S.PriceInputWrapper>
                            <S.PriceInput
                                placeholder="제품 원가"
                                name="price"
                                type="number"
                                value={products.price || ''}
                                onChange={handleChange}
                            />
                            <S.PriceInput
                                placeholder="할인된 가격"
                                name="discount"
                                type="number"
                                value={products.discount || ''}
                                onChange={handleChange}
                            />
                        </S.PriceInputWrapper>
                        {discountRate > 0 && (
                            <S.SetDiscountRate>할인율: {discountRate}%</S.SetDiscountRate>
                        )}
                    </S.ProductInputWrapper>
                </S.ProductRegistrationInputWrapper>
                <S.SubmitButton onClick={handleProductSubmit}>등록하기</S.SubmitButton>
            </S.MainWrapper>
        </S.Wrapper>
    );
};

export default ProductModal;
