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
  justify-content: space-between;
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
  overflow-x: auto;
  overflow-y: hidden;
`;

export const MyChallenge = styled.div`
  width: 19%;
  height: 60%;
  display: flex;
  background-color: black;
  border-radius: 10px;
  min-width: 230px;
`;

export const OtherChallengeWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 2%;
`;

export const OtherChallenge = styled.div`
  width: 24%;
  height: 80%;
  min-width: 230px;

  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const OtherChallengeImgWrapper = styled.img`
  width: 100%;
  height: 35%;
`;

export const OtherChallengeDescriptionWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const DescriptionMainWrapper = styled.div`
  width: 90%;
  height: 60%;
  display: flex;

  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const TitleSpan = styled.span`
  font-size: 18px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  font-size: 14px;
  color: #6b7684;
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

export const AccountLogWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  margin-top: 10%;
`;

export const AccountLogItemWrapper = styled.div`
  width: 100%;
  height: 6%;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eaecef;
  }
  justify-content: space-around;
`;

export const AccountLogProfileWrapper = styled.div`
  width: 28%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountLogProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #aeaeae;
`;

export const AccountLogProfileSpan = styled.span`
  font-size: 13px;
`;
export const AccountLogItemDescriptionWrapper = styled.div`
  width: 40%;
  height: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const AccountLogSpan = styled.span`
  font-size: 13px;
`;

export const CategoryWrapper = styled.div`
  width: auto;
  height: 80%;
  display: flex;
  border-radius: 1rem;
  margin-left: 2%;
  align-items: center;
  justify-content: center;
  background-color: #6b7684;
`;

export const RoomTypeWrapper = styled.div`
  width: 20%;
  height: 15%;
  display: flex;

  margin-left: 2%;
  align-items: center;
  justify-content: center;
  background-color: #5b94f3;
`;
