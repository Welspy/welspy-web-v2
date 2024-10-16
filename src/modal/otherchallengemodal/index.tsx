import { AllChallengeProps } from "src/type/challenge.types";
import * as S from "../style";
import { useEffect, useState } from "react";
import UseProduct from "src/hooks/modal/useProduct";
import UseJoinChallenge from "src/hooks/modal/useJoinChallenge";
import Img from "src/assets/bottomArrow.svg";
import RoomJoinButton from "src/components/common/roomjoinbutton";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  RoomData: AllChallengeProps | undefined;
}

const OtherChallengeModal = ({ setModal, modal, RoomData }: Props) => {
  const { product, Product } = UseProduct({ RoomData });
  const { JoinChallengeButton } = UseJoinChallenge({ RoomData });

  const ClickModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    Product();
  }, []);

  return (
    // <S.Wrapper>
    //   <S.PositionWrapper>
    //     <S.MainWrapper>
    //       <S.ModalDeleteButtonWrapper onClick={ClickModal}>X</S.ModalDeleteButtonWrapper>
    //       <S.MainContentWrapper>
    //         <S.ContentTitleWrapper>
    //           <S.TitleSpan>{RoomData?.title}</S.TitleSpan>
    //           <S.CategorySpanWrapper>
    //             <S.CategorySpan>#{RoomData?.category}</S.CategorySpan>
    //           </S.CategorySpanWrapper>
    //         </S.ContentTitleWrapper>
    //         <S.GoalMoneyWrapper>
    //           <S.GoalMoneySpan>목표금액 : {RoomData?.goalMoney}</S.GoalMoneySpan>
    //           <S.MemberWrapper>
    //             <S.MemberLimitSpan>멤버 제한 : {RoomData?.memberLimit}</S.MemberLimitSpan>
    //             <S.CurrentMemberSpan>현재 멤버 : {RoomData?.currentMember}</S.CurrentMemberSpan>
    //           </S.MemberWrapper>
    //         </S.GoalMoneyWrapper>
    //         <S.ContenWrapper>
    //           <S.ChallengeImgWrapper>
    //             <img src={RoomData?.imageUrl} style={{ width: "100%", height: "100%" }} alt="" />
    //           </S.ChallengeImgWrapper>
    //           <S.DescriptionWrapper>{RoomData?.description}</S.DescriptionWrapper>
    //         </S.ContenWrapper>
    //         <S.ChallengeJoinButton onClick={JoinChallengeButton}>챌린지 가입</S.ChallengeJoinButton>
    //       </S.MainContentWrapper>
    //     </S.MainWrapper>
    //     <button onClick={() => setProductView(!productview)}>제품 정보</button>
    //   </S.PositionWrapper>
    // </S.Wrapper>
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
                  <S.DescriptionSpan>
                    {RoomData?.description}
                  </S.DescriptionSpan>
                </S.DescriptionWrapper>
              </S.ChallengeContentMainWrapper>
            </S.ChallengeContentWrapper>
            <S.OtherChallengeButtonWrapper>
              <RoomJoinButton Button={JoinChallengeButton} />
            </S.OtherChallengeButtonWrapper>
            <S.ChallengeCommentWrapper>
              <S.ChallengeCommentClickWrapper>
                <img src={Img} alt="img" />
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

export default OtherChallengeModal;
