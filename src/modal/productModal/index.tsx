import React, { useState } from 'react';
import * as S from './style';

interface Props {
    ClickProductModal: () => void;
}

const ProductModal = ({ ClickProductModal }: Props) => {
    const [preview, setPreview] = useState<string | null>(null); // 이미지 미리보기 상태
    const [imageFile, setImageFile] = useState<File | null>(null); // 선택된 이미지 파일 상태

    // 이미지 파일이 변경되면 미리보기 URL을 생성
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        }
    };

    // 이미지 삭제 기능
    const handleImageDelete = () => {
        setPreview(null);
        setImageFile(null);
    };

    return (
        <S.Wrapper>
            <S.MainWrapper>
                <S.ModalCloseButton onClick={ClickProductModal}>×</S.ModalCloseButton>
                <h2 style={{ textAlign: 'center', margin: '10px 0' }}>제품 등록하기</h2>
                <S.ProductRegistrationInputWrapper>
                    <S.ImgWrapper>
                        {preview ? (
                            <>
                                <S.PreviewImage src={preview} alt="미리보기" />
                                <S.DeleteButton onClick={handleImageDelete}>사진 삭제</S.DeleteButton>
                            </>
                        ) : (
                            <S.ProductImgInput type="file" accept="image/*" onChange={handleImageChange} />
                        )}
                    </S.ImgWrapper>
                    <S.ProductInputWrapper>
                        <S.TitleInput placeholder="상품 이름을 입력하세요." name="name" />
                        <S.ProductDescriptionInput placeholder="제품을 설명해주세요." name="description" />
                        <S.PriceInputWrapper>
                            <S.PriceInput placeholder="제품 원가" name="price" />
                            <S.PriceInput placeholder="할인된 가격" name="discount" />
                        </S.PriceInputWrapper>
                    </S.ProductInputWrapper>
                </S.ProductRegistrationInputWrapper>
                <S.SubmitButton onClick={() => {/* 제품 등록 로직 */}}>등록하기</S.SubmitButton>
            </S.MainWrapper>
        </S.Wrapper>
    );
};

export default ProductModal;
