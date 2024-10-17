import * as S from "../style";
import { MyChallengeProps } from "src/type/challenge.types";
import { SetStateAction, useEffect, useState } from "react";
import UseMyProduct from "src/hooks/modal/useMyProduct";
import ExitButton from "src/components/common/exitbutton";
import SavingButton from "src/components/common/savingbutton/indexl";
import Arrow from "src/assets/bottomArrow.svg";
import SavingModal from "./savingModal";

interface MyProps {
  MyRoomData: MyChallengeProps | undefined;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const MyChallengeModal = ({ MyRoomData, setModal, modal }: MyProps) => {
  const { myproduct, MyProduct } = UseMyProduct();
  const [chargemodal, setChalgeModal] = useState<boolean>(false);

  const RoomId = MyRoomData?.roomId;
  const ClickModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    MyProduct();
  }, []);

  console.log("modal",chargemodal)

  return (
    <S.Wrapper>
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
          <S.MainContentWrapper>
            <S.ContentTitleWrapper>
              <S.TitleSpan>{MyRoomData?.title}</S.TitleSpan>
            </S.ContentTitleWrapper>

            <S.ChallengeImgWrapper src={MyRoomData?.imageUrl} alt="img" />
            <S.ChallengeContentWrapper>
              <S.ChallengeContentMainWrapper>
                <S.GoalMoneyWrapper>
                  <S.GoalMoneySpan>
                    저금된 금액 : {MyRoomData?.balance} /{" "}
                    {MyRoomData?.goalMoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원
                  </S.GoalMoneySpan>
                </S.GoalMoneyWrapper>
                <S.DescriptionWrapper>
                  <S.DescriptionSpan>{MyRoomData?.description}</S.DescriptionSpan>
                </S.DescriptionWrapper>
              </S.ChallengeContentMainWrapper>
            </S.ChallengeContentWrapper>
            <S.ChallengeButtonWrapper>
              <ExitButton RoomId={RoomId} /> 
              <SavingButton state={chargemodal} setState={setChalgeModal} />
            </S.ChallengeButtonWrapper>
            <S.ChallengeCommentWrapper>
              <S.ChallengeCommentClickWrapper>
                <img src={Arrow} alt="img" />
                <S.ChallengeCommentClickSpan>댓글보기</S.ChallengeCommentClickSpan>
              </S.ChallengeCommentClickWrapper>
            </S.ChallengeCommentWrapper>
            {/* <S.TextBox /> */}
          </S.MainContentWrapper>
          
        </S.MainWrapper>
        {chargemodal === true && <SavingModal />}
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default MyChallengeModal;
