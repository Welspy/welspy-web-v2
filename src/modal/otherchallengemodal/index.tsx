import { AllChallengeProps } from "src/type/challenge.types";
import * as S from "../style";
import { useState } from "react";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  RoomData: AllChallengeProps | undefined;
}

const OtherChallengeModal = ({ setModal, modal, RoomData }: Props) => {
  const [product, setProduct] = useState<boolean>(false);

  const ClickModal = () => {
    setModal(!modal);
  };
  return (
    <S.Wrapper>
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.ModalDeleteButtonWrapper onClick={ClickModal}>x</S.ModalDeleteButtonWrapper>
          <S.MainContentWrapper>
            <S.ContentTitleWrapper>
              <S.TitleSpan>{RoomData?.title}</S.TitleSpan>
            </S.ContentTitleWrapper>
            <S.GoalMoneyWrapper>
              <S.GoalMoneySpan>목표금액 : {RoomData?.goalMoney}</S.GoalMoneySpan>
              <S.MemberLimitSpan>멤버 제한 : {RoomData?.memberLimit}</S.MemberLimitSpan>
            </S.GoalMoneyWrapper>
            <S.ContenWrapper>
              <S.ChallengeImgWrapper>
                <img src="https://images.app.goo.gl/bVDUX26YbQxrYvPWA" alt="" />
              </S.ChallengeImgWrapper>
              <S.DescriptionWrapper>{RoomData?.description}</S.DescriptionWrapper>
            </S.ContenWrapper>
          </S.MainContentWrapper>
        </S.MainWrapper>
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default OtherChallengeModal;
