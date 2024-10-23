import React, { useState, useEffect } from "react";
import * as S from "./style"; // 스타일을 포함하는 파일
import useProductRegistration from "src/hooks/product/useProductRegistration";
import UseMakeChallenge from "src/hooks/modal/useMakeChallenge";

interface Props {
    ClickProductModal: () => void;
}

const ProductModal = ({ ClickProductModal }: Props) => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isProductRegistered, setIsProductRegistered] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("TRAVEL");
    const [roomType, setRoomType] = useState<string>("PUBLIC"); // roomType 상태 추가
    const [goalMoney, setGoalMoney] = useState<number>(0); // 목표 금액 상태 추가
    const [memberLimit, setMemberLimit] = useState<number>(0); // 최대 멤버 수 상태 추가

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

    // UseMakeChallenge 훅 사용
    const { MakeChallengeButton } = UseMakeChallenge({
        ProductId,
        productData: {
            name: products.name,
            description: products.description,
            imageUrl: imageUrl || "", // 선택된 이미지 URL
            category: selectedCategory,
        },
        roomType, // roomType 추가
        goalMoney, // goalMoney 추가
        memberLimit, // memberLimit 추가
    });

    const categoriesEnum = {
        TRAVEL: "여행",
        DIGITAL: "디지털",
        FASHION: "패션",
        TOYS: "취미",
        INTERIOR: "인테리어",
        ETC: "기타",
    };

    const roomTypesEnum = {
        PUBLIC: "공개",
        PRIVATE: "비공개",
    };

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {
        if (status === 201) {
            setIsProductRegistered(true);
        }
    }, [status]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleProductSubmit = () => {
        registerProduct(selectedImage);
    };

    const handleImageDelete = () => {
        if (imageUrl) {
            deleteImage(imageUrl);
            setImageUrl(null);
            setSelectedImage(null);
        }
    };

    const handleChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "discount" && Number(value) >= 100) {
            alert("할인율은 100 이하로 입력해야 합니다.");
            return;
        }

        handleChange(e);
    };

    useEffect(() => {
        if (status) {
            alert(message);
        }
    }, [status, message]);

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
                                onChange={handleChangeWithValidation}
                            />
                        </S.PriceInputWrapper>

                        {products.price > 0 && <S.DiscountedPrice>할인가: {discountedPrice}원</S.DiscountedPrice>}
                    </S.ProductInputWrapper>

                    {isProductRegistered && (
                        <>
                            <S.CateGorryWrapper>
                                <S.CateGorryMainWrapper>
                                    {Object.entries(categoriesEnum).map(([key, value]) => (
                                        <S.RadioLabel key={key}>
                                            <input
                                                type="radio"
                                                name="category"
                                                value={key}
                                                checked={selectedCategory === key}
                                                onChange={() => setSelectedCategory(key)}
                                            />
                                            <span /> {/* 사용자 정의 스타일을 적용한 라디오 버튼 */}
                                            {value}
                                        </S.RadioLabel>
                                    ))}
                                </S.CateGorryMainWrapper>
                            </S.CateGorryWrapper>

                            <S.CateGorryWrapper>
                                <S.CateGorryMainWrapper>
                                    {Object.entries(roomTypesEnum).map(([key, value]) => (
                                        <S.RadioLabel key={key}>
                                            <input
                                                type="radio"
                                                name="roomType"
                                                value={key}
                                                checked={roomType === key}
                                                onChange={() => setRoomType(key)}
                                            />
                                            <span />
                                            {value}
                                        </S.RadioLabel>
                                    ))}
                                </S.CateGorryMainWrapper>
                            </S.CateGorryWrapper>

                            <S.InputWrapper>
                                <S.PriceInput
                                    placeholder="목표 금액"
                                    type="number"

                                    onChange={(e) => setGoalMoney(Number(e.target.value))}
                                />
                                <S.PriceInput
                                    placeholder="최대 멤버 수"
                                    type="number"

                                    onChange={(e) => setMemberLimit(Number(e.target.value))}
                                />
                            </S.InputWrapper>
                        </>
                    )}
                </S.ProductRegistrationInputWrapper>

                {isProductRegistered ? (
                    <S.SubmitButton
                        onClick={MakeChallengeButton}
                        disabled={!ProductId}
                    >
                        방 만들기
                    </S.SubmitButton>
                ) : (
                    <S.SubmitButton
                        onClick={handleProductSubmit}
                        disabled={!products.name || !products.description || products.price <= 0 || !selectedImage}
                    >
                        등록하기
                    </S.SubmitButton>
                )}
            </S.MainWrapper>
        </S.Wrapper>
    );
};

export default ProductModal;
