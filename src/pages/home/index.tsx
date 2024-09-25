import UseAllChallenge from "src/hooks/home/useAllChallenge";
import * as S from "./style";
import { useEffect, useState } from "react";
import Modal from "src/modal";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { challenge, AllChallenge } = UseAllChallenge();

  const ClickModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    AllChallenge();
  }, []);

  return (
    <S.Wrapper>
      <S.MainWrapper>
        <S.HeaderNav />
        <S.ChallengeMainWrapper>
          <S.ChallengeContentWrapper>
            <S.ChallengeTitleWrapper>
              <S.CategorrySpanWrapper>
                <S.CategorrySpan>전체</S.CategorrySpan>
                <S.CategorrySpan>국내</S.CategorrySpan>
                <S.CategorrySpan>해외</S.CategorrySpan>
              </S.CategorrySpanWrapper>
              <button>챌린지 생성하기</button>
            </S.ChallengeTitleWrapper>
            <S.MyChallengeWrapper>
              <S.MyChallengeSpan>내 챌린지</S.MyChallengeSpan>
              <S.MyChallengeItemWrapper>
                <S.MyChallenge></S.MyChallenge>
                <S.MyChallenge></S.MyChallenge>
                <S.MyChallenge></S.MyChallenge>
                <S.MyChallenge></S.MyChallenge>
                <S.MyChallenge></S.MyChallenge>
              </S.MyChallengeItemWrapper>
            </S.MyChallengeWrapper>
            <S.OtherChallengeWrapper>
              <S.MyChallengeSpan>챌린지 리스트</S.MyChallengeSpan>
              <S.MyChallengeItemWrapper onClick={ClickModal}>
                <S.OtherChallenge></S.OtherChallenge>
                <S.OtherChallenge></S.OtherChallenge>
                <S.OtherChallenge></S.OtherChallenge>
                <S.OtherChallenge></S.OtherChallenge>
              </S.MyChallengeItemWrapper>
            </S.OtherChallengeWrapper>
          </S.ChallengeContentWrapper>
        </S.ChallengeMainWrapper>
      </S.MainWrapper>

      <S.SideBarWrapper>
        <S.SideBarHeaderMainWrapper>
          <S.SideBarHeader>
            <S.SideBarHeaderTextWrapper>
              <S.SideBarHeaderText>이체 내역</S.SideBarHeaderText>
            </S.SideBarHeaderTextWrapper>
          </S.SideBarHeader>
        </S.SideBarHeaderMainWrapper>
      </S.SideBarWrapper>
      {modal === true ? <Modal setModal={setModal} modal={modal} /> : <></>}
    </S.Wrapper>
  );
};

export default Home;
