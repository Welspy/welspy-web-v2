import * as S from "../style";
import { MyChallengeProps } from "src/type/challenge.types";

import { SetStateAction, useEffect, useState } from "react";
import UseMyProduct from "src/hooks/modal/useMyProduct";
import ExitButton from "src/components/common/exitbutton";

interface MyProps {
  MyRoomData: MyChallengeProps | undefined;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const MyChallengeModal = ({ MyRoomData, setModal, modal }: MyProps) => {
  const [productview, setProductView] = useState<boolean>(true);
  const { myproduct, MyProduct } = UseMyProduct({ MyRoomData });

  const RoomId = MyRoomData?.roomId;
  const ClickModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    MyProduct();
  }, []);

  return (
    <S.Wrapper>
      {productview === true ? (
        <S.PositionWrapper>
          <S.MainWrapper>
            <ExitButton RoomId={RoomId} />
            <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
            <S.MainContentWrapper>
              <S.ContentTitleWrapper>
                <S.TitleSpan>{MyRoomData?.title}</S.TitleSpan>
                <S.CategorySpanWrapper>
                  <S.CategorySpan>#{MyRoomData?.category}</S.CategorySpan>
                </S.CategorySpanWrapper>
              </S.ContentTitleWrapper>
              <S.GoalMoneyWrapper>
                <S.GoalMoneySpan>목표금액 : {MyRoomData?.goalMoney}</S.GoalMoneySpan>
                <S.MemberWrapper></S.MemberWrapper>
              </S.GoalMoneyWrapper>
              <S.ContenWrapper>
                <S.ChallengeImgWrapper>
                  <img
                    src={MyRoomData?.imageUrl}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt=""
                  />
                </S.ChallengeImgWrapper>
                <S.DescriptionWrapper>{MyRoomData?.description}</S.DescriptionWrapper>
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
                <S.ProductNameSpan>{myproduct?.name}</S.ProductNameSpan>
              </S.ContentTitleWrapper>
              <S.ChallengeImgWrapper>
                <img src={myproduct?.imageUrl} alt="" />
              </S.ChallengeImgWrapper>
              <S.GoalMoneyWrapper>
                <S.GoalMoneySpan style={{ color: "red" }}>가격 : {myproduct?.discountedPrice}</S.GoalMoneySpan>
                <S.MemberWrapper style={{ flexDirection: "column" }}>
                  <S.MemberLimitSpan>원가 : {myproduct?.price}</S.MemberLimitSpan>
                  <S.CurrentMemberSpan style={{ color: " blue " }}>할인율 : {myproduct?.discount}</S.CurrentMemberSpan>
                </S.MemberWrapper>
              </S.GoalMoneyWrapper>
              <S.DescriptionWrapper style={{ height: "40%", marginTop: 20 }}>
                {myproduct?.description}
              </S.DescriptionWrapper>
            </S.MainContentWrapper>
          </S.MainWrapper>
          <button onClick={() => setProductView(!productview)}>챌린지 정보</button>
        </S.PositionWrapper>
      )}
    </S.Wrapper>
  );
};

export default MyChallengeModal;
