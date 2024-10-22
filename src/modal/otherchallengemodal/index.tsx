import { AllChallengeProps, MyChallengeProps } from "src/type/challenge.types";
import * as S from "../style";
import { useEffect } from "react";
import UseProduct from "src/hooks/modal/useProduct";
import UseJoinChallenge from "src/hooks/modal/useJoinChallenge";
import RoomJoinButton from "src/components/common/roomjoinbutton";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  RoomData: AllChallengeProps | undefined;

}

const OtherChallengeModal = ({ setModal, modal, RoomData}: Props) => {

  const { JoinChallengeButton } = UseJoinChallenge({ RoomData });

  const ClickModal = () => {
    setModal(!modal);
  };


  return (
    <S.Wrapper>
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
          <S.MainContentWrapper>
            <S.ContentTitleWrapper>
              <S.TitleSpan>{RoomData?.title}</S.TitleSpan>
              <S.TypeSpan>{`(${RoomData?.roomType})`}</S.TypeSpan>
            </S.ContentTitleWrapper>
            <S.ChallengeTypeWrapper>
              <S.ChallengeCategorryWrapper>
                <S.ChallengeCategorrySpan>#{RoomData?.category}</S.ChallengeCategorrySpan>
              </S.ChallengeCategorryWrapper>
              <S.ChallengeCurrentSpan>
                현재멤버 : {RoomData?.currentMember}/{RoomData?.memberLimit}
              </S.ChallengeCurrentSpan>
            </S.ChallengeTypeWrapper>
            <S.ChallengeImgWrapper src={RoomData?.imageUrl} alt="img" />
            <S.ChallengeContentWrapper>
              <S.ChallengeContentMainWrapper>
                <S.GoalMoneyWrapper>
                  <S.GoalMoneySpan>
                    제품 금액 : {RoomData?.goalMoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  </S.GoalMoneySpan>
                </S.GoalMoneyWrapper>
                <S.DescriptionWrapper>
                  <S.DescriptionSpan>{RoomData?.description}</S.DescriptionSpan>
                </S.DescriptionWrapper>
              </S.ChallengeContentMainWrapper>
            </S.ChallengeContentWrapper>
            <S.OtherChallengeButtonWrapper>
              <RoomJoinButton Button={JoinChallengeButton} />
            </S.OtherChallengeButtonWrapper>
          </S.MainContentWrapper>
        </S.MainWrapper>
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default OtherChallengeModal;
