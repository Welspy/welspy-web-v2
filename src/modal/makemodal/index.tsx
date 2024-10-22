import React, { useState, useEffect } from "react";
import * as S from "./style";
import useProductRegistration from "src/hooks/product/useProductRegistration";
import UseMakeChallenge from "src/hooks/modal/useMakeChallenge";

interface Props {
  ClickProductModal: () => void;
}

const ProductModal = ({ ClickProductModal }: Props) => {
  const [productType, setProduct] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // 등록된 이미지 URL 상태 추가

  const {
    products,
    handleChange,
    registerProduct,
    deleteImage,
    discountedPrice,
    status,
    message,
    getProduct,
    product,
  } = useProductRegistration();
  const ProductId = product?.data![0].idx;

  const {} = UseMakeChallenge({ ProductId: ProductId });

  const categoriesEnum = {
    TRAVEL: "여행",
    DIGITAL: "디지털",
    FASHION: "패션",
    TOYS: "취미",
    INTERIOR: "인테리어",
    ETC: "기타",
  };

  console.log("product", product?.data![0].idx);

  useEffect(() => {
    getProduct();
  }, []);

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

    // 제품 등록 후 이미지와 선택한 이미지 초기화
    if (status === 201) {
      setImageUrl(null);
      setSelectedImage(null);
    }
  }, [products.imageUrl, status]); // status 추가

  // 이미지 삭제 핸들러
  const handleImageDelete = () => {
    if (imageUrl) {
      deleteImage(imageUrl); // 등록된 이미지 URL로 삭제 요청
      setImageUrl(null); // 이미지 삭제 후 URL 초기화
      setSelectedImage(null); // 선택한 이미지 초기화
    }
  };

  // 상태 메시지 alert 처리
  useEffect(() => {
    if (status) {
      alert(message); // 메시지를 alert로 표시
    }
  }, [status, message]); // 상태나 메시지가 변경될 때마다 alert 표시

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.ModalCloseButton onClick={ClickProductModal}>×</S.ModalCloseButton>

        <h2 style={{ textAlign: "center", margin: "10px 0" }}>제품 등록하기</h2>
        <S.ProductRegistrationInputWrapper>
          <S.ImageWrapper>
            {imageUrl ? (
              <>
                <S.PreviewImage src={imageUrl} alt="Selected" />
                <S.DeleteButton onClick={handleImageDelete}>이미지 삭제</S.DeleteButton>
              </>
            ) : (
              <>
                {selectedImage && <S.PreviewImage src={URL.createObjectURL(selectedImage)} alt="Selected" />}
                <S.CustomButton>
                  이미지 선택
                  <S.ProductImgInput type="file" accept="image/*" onChange={handleImageChange} />
                </S.CustomButton>
              </>
            )}
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
                value={products.price || ""}
                onChange={handleChange}
              />
              <S.PriceInput
                placeholder="할인율"
                name="discount"
                type="number"
                value={products.discount || ""}
                onChange={handleChange}
              />
            </S.PriceInputWrapper>

            {products.price > 0 && <S.DiscountedPrice>할인가: {discountedPrice}원</S.DiscountedPrice>}
          </S.ProductInputWrapper>
          <S.CateGorryWrapper>
            <S.CateGorryMainWrapper>
              <S.CateGorryItem>{categoriesEnum.DIGITAL}</S.CateGorryItem>
              <S.CateGorryItem>{categoriesEnum.ETC}</S.CateGorryItem>
              <S.CateGorryItem>{categoriesEnum.FASHION}</S.CateGorryItem>
              <S.CateGorryItem>{categoriesEnum.INTERIOR}</S.CateGorryItem>
              <S.CateGorryItem>{categoriesEnum.TOYS}</S.CateGorryItem>
              <S.CateGorryItem>{categoriesEnum.TRAVEL}</S.CateGorryItem>
            </S.CateGorryMainWrapper>
          </S.CateGorryWrapper>
        </S.ProductRegistrationInputWrapper>
        {productType === false ? (
          <S.SubmitButton
            onClick={() => {
              handleProductSubmit();
              setProduct(true);
            }}
            disabled={!products.name || !products.description || products.price <= 0 || !selectedImage}
          >
            등록하기
          </S.SubmitButton>
        ) : (
          <S.SubmitButton
            onClick={handleProductSubmit}
            disabled={!products.name || !products.description || products.price <= 0 || !selectedImage}
          >
            방 만들기
          </S.SubmitButton>
        )}
      </S.MainWrapper>
    </S.Wrapper>
  );
};

export default ProductModal;
