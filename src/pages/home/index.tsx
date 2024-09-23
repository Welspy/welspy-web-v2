import * as S from "./style";

const Home = () => {
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
              <S.MyChallengeItemWrapper>
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
    </S.Wrapper>
  );
};

export default Home;
