import * as S from "../style";
import { MyChallengeProps } from "src/type/challenge.types";

import { SetStateAction, useEffect, useState } from "react";
import UseMyProduct from "src/hooks/modal/useMyProduct";
import Img from "src/assets/image 5.png";
import ExitButton from "src/components/common/exitbutton";
import SavingButton from "src/components/common/savingbutton/indexl";
import Arrow from "src/assets/bottomArrow.svg";

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
      <S.PositionWrapper>
        <S.MainWrapper>
          <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
          <S.MainContentWrapper>
            <S.ContentTitleWrapper>
              <S.TitleSpan>챌린지 타이틀</S.TitleSpan>
              <S.TypeSpan>(공개)</S.TypeSpan>
            </S.ContentTitleWrapper>
            <S.ChallengeTypeWrapper>
              <S.ChallengeCategorryWrapper>
                <S.ChallengeCategorrySpan>#가전제품</S.ChallengeCategorrySpan>
              </S.ChallengeCategorryWrapper>
              <S.ChallengeCurrentSpan>현재멤버 : 7/10</S.ChallengeCurrentSpan>
            </S.ChallengeTypeWrapper>
            <S.ChallengeImgWrapper src={Img} alt="img" />
            <S.ChallengeContentWrapper>
              <S.ChallengeContentMainWrapper>
                <S.GoalMoneyWrapper>
                  <S.GoalMoneySpan>저금된 금액 : 1,000,000 / 500,000 원</S.GoalMoneySpan>
                </S.GoalMoneyWrapper>
                <S.DescriptionWrapper>
                  <S.DescriptionSpan>
                    박상민 귀여워 박상민 귀여워 박상민 귀여워 박상민 귀여워 박상민 귀여워 박상민 귀여워
                  </S.DescriptionSpan>
                </S.DescriptionWrapper>
              </S.ChallengeContentMainWrapper>
            </S.ChallengeContentWrapper>
            <S.ChallengeButtonWrapper>
              <ExitButton RoomId={RoomId}></ExitButton>
              <SavingButton></SavingButton>
            </S.ChallengeButtonWrapper>
            <S.ChallengeCommentWrapper>
              <S.ChallengeCommentClickWrapper>
                <img src={Arrow} alt="img" />
                <S.ChallengeCommentClickSpan>댓글보기</S.ChallengeCommentClickSpan>
              </S.ChallengeCommentClickWrapper>
            </S.ChallengeCommentWrapper>
            <S.TextBox />
          </S.MainContentWrapper>
        </S.MainWrapper>
      </S.PositionWrapper>
    </S.Wrapper>
  );
};

export default MyChallengeModal;
