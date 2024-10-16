import styled from "styled-components";
import Img from "src/assets/rotion_dummy.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const ProfliePictureWrapper = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 20px;
`;

export const ProfileContentWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #aeaeae;
`;

export const ProfileContentMainWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const ProfileName = styled.span`
  font-size: 23px;
  font-weight: 700;
  font-family: "pretendard";
`;

export const ProfilePersonalWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const ProfilePersonalSpan = styled.span`
  font-size: 15px;
  color: #aeaeae;
  font-family: "pretendard";
`;

export const ProfileChallengeInformation = styled.span`
  font-size: 20px;
  font-family: "pretendard";
  font-weight: 700;
`;

export const ProfileStaticsWrapper = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileStaticsMainWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StaticTitleSpan = styled.span`
  font-size: 23px;
  font-family: "pretendard";
  font-weight: 700;
`;

export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3%;
`;

export const StatisticsItemWrapper = styled.div`
  width: 48%;
  height: 45%;
  border: 1px solid #aeaeae;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticsItemMainWrapper = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  border: 1px solid black;
`;

export const ProfileChallengeWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  flex-direction: column;
`;

export const ProfileChallengeBankWrapper = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
`;

export const ProfileChallengeBankTitleSpan = styled.span`
  font-size: 28px;
  font-weight: 500;
  font-family: "pretendard";
  margin-bottom: 2%;
`;

export const ProfileChallengeBankContentWrapper = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const ProfileChallengeBankMainWrapper = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
`;

export const ProfileChallengeInfoWrapper = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

export const InfoSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  font-family: "pretendard";
`;

export const ProfileChallengeGoalWrapper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  margin-top: 1%;
  flex-direction: column;
`;

export const ProfileChallengeGoalTitleSpan = styled.span`
  font-size: 28px;
  font-weight: 500;
  font-family: "pretendard";
  margin-bottom: 2%;
`;

export const ProfileChallengeGoalContentWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const MoreProfileChallenge = styled.div`
  width: 100%;
  height: 10%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ProfileChallengeGoalMainWrapper = styled.div`
  width: 96%;
  border-radius: 5px;
  height: 30%;
  align-self: center;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
`;

export const ProfileChallengeItemWrapper = styled.div`
  width: 90%;
  height: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileChallengeItemPicture = styled.div`
  width: 18%;
  height: 90%;
  border-radius: 10px;
`;

export const ProfileChallengeItemDesWrapper = styled.div`
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileChallengeTitleSpan = styled.span`
  font-size: 18px;
  font-family: "pretendard";
  font-weight: 500;
`;

export const ProfileChallengeStatusBar = styled.div`
  width: 80%;
  height: 15%;
  background-color: #dddddd;
  border-radius: 30px;
`;
export const Status = styled.div<{ statusBar: number }>`
  width: ${({ statusBar }) => statusBar}%;
  height: 100%;
  background-color: #5184d6;
  border-radius: 10px;
`;

export const PofileChallengeItemDesSpan = styled.span`
  font-size: 15px;
  font-family: "pretendard";
  font-weight: 500;
  color: #aeaeae;
`;

export const UndefinedChallenge = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const UndefinedSpan = styled.span`
  font-size: 25px;
  font-weight: 600;
  font-family: "pretendard";
`;
