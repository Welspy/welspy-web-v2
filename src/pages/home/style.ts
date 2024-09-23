import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const MainWrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderNav = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
`;

export const ChallengeMainWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
`;

export const ChallengeContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ChallengeTitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;

export const MyChallengeWrapper = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  flex-direction: column;
`;

export const MyChallengeSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const MyChallengeItemWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  gap: 1%;
  align-items: center;
  overflow-x: scroll;
`;

export const MyChallenge = styled.div`
  width: 19%;
  height: 60%;
  display: flex;
  background-color: black;
  border-radius: 10px;
`;

export const OtherChallengeWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const OtherChallenge = styled.div`
  width: 24%;
  height: 80%;
  display: flex;
  background-color: black;
  border-radius: 10px;
`;

export const CategorrySpanWrapper = styled.div`
  width: 15%;
  height: 80%;
  align-items: center;

  display: flex;
  justify-content: space-between;
`;

export const CategorrySpan = styled.span`
  font-size: 26px;
  font-weight: 700;
`;

export const SideBarWrapper = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  align-items: center;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
`;

export const SideBarHeaderMainWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideBarHeaderTextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const SideBarHeaderText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
