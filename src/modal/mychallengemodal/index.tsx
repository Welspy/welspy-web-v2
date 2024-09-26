import * as S from "../style";
import { AllChallengeProps } from "src/type/challenge.types";
import UseProduct from "src/hooks/modal/useProduct";
import { SetStateAction, useEffect, useState } from "react";

interface Props {
  RoomData: AllChallengeProps | undefined;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const MyChallengeModal = ({ RoomData, setModal, modal }: Props) => {
  const [productview, setProductView] = useState<boolean>(true);
  const { product, Product } = UseProduct({ RoomData });

  const ClickModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    Product();
  }, []);

  const Title = JSON.stringify(product?.name);


  const price = JSON.stringify(product?.price);
  const disPrice = JSON.stringify(product?.discountedPrice);
  const discount = JSON.stringify(product?.discount);
  const description = JSON.stringify(product?.description);
  const imgUrl = JSON.stringify(product?.imageUrl);

  return (
    <S.Wrapper>
      {productview === true ? (
        <S.PositionWrapper>
          <S.MainWrapper>
            <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
            <S.MainContentWrapper>
              <S.ContentTitleWrapper>
                <S.TitleSpan>{RoomData?.title}</S.TitleSpan>
                <S.CategorySpanWrapper>
                  <S.CategorySpan>#{RoomData?.category}</S.CategorySpan>
                </S.CategorySpanWrapper>
              </S.ContentTitleWrapper>
              <S.GoalMoneyWrapper>
                <S.GoalMoneySpan>목표금액 : {RoomData?.goalMoney}</S.GoalMoneySpan>
                <S.MemberWrapper>
                  <S.MemberLimitSpan>멤버 제한 : {RoomData?.memberLimit}</S.MemberLimitSpan>
                  <S.CurrentMemberSpan>현재 멤버 : {RoomData?.currentMember}</S.CurrentMemberSpan>
                </S.MemberWrapper>
              </S.GoalMoneyWrapper>
              <S.ContenWrapper>
                <S.ChallengeImgWrapper>
                  <img src={RoomData?.imageUrl} alt="" />
                </S.ChallengeImgWrapper>
                <S.DescriptionWrapper>{RoomData?.description}</S.DescriptionWrapper>
              </S.ContenWrapper>
            </S.MainContentWrapper>
          </S.MainWrapper>
          <button onClick={() => setProductView(!productview)}>제품 정보</button>
        </S.PositionWrapper>
      ) : (
        <S.PositionWrapper>
          <S.MainWrapper>
            <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>

            <S.MainContentWrapper>
              <S.ContentTitleWrapper>
                <S.TitleSpan>제품 정보</S.TitleSpan>
              </S.ContentTitleWrapper>
              <S.ContentTitleWrapper>
                <S.ProductNameSpan>{Title}</S.ProductNameSpan>
              </S.ContentTitleWrapper>
              <S.ChallengeImgWrapper>
                <img src={imgUrl} alt="" />
              </S.ChallengeImgWrapper>
              <S.GoalMoneyWrapper>
                <S.GoalMoneySpan style={{ color: "red" }}>가격 : {disPrice}</S.GoalMoneySpan>
                <S.MemberWrapper style={{ flexDirection: "column" }}>
                  <S.MemberLimitSpan>원가 : {price}</S.MemberLimitSpan>
                  <S.CurrentMemberSpan style={{ color: " blue " }}>할인율 : {discount}</S.CurrentMemberSpan>
                </S.MemberWrapper>
              </S.GoalMoneyWrapper>
              <S.DescriptionWrapper style={{ height: "40%", marginTop: 20 }}>{description}</S.DescriptionWrapper>
            </S.MainContentWrapper>
          </S.MainWrapper>
          <button onClick={() => setProductView(!productview)}>챌린지 정보</button>
        </S.PositionWrapper>
      )}
    </S.Wrapper>
  );
};

export default MyChallengeModal;
