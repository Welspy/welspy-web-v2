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
  height: 8%;
  display: flex;

  justify-content: center;
  align-items: center;
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
  height: 38%;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  flex-direction: column;
`;

export const MyChallengeSpan = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const MyChallengeItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1%;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 1.5%;
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
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const OtherChallenge = styled.div`
  width: 24%;
  height: 100%;
  min-width: 230px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
`;

export const OtherChallengeImgWrapper = styled.img`
  width: 100%;
  height: 45%;
  object-fit: cover;
  border-radius: 10px;
`;

export const OtherChallengeDescriptionWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionMainWrapper = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

export const TitleSpan = styled.span`
  font-size: 16px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  justify-content: space-between;
  font-size: 14px;
`;

export const CategorrySpanWrapper = styled.div`
  width: 18%;
  height: 80%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CategorrySpan = styled.button<{ clicked: boolean }>`
  font-size: 26px;
  font-weight: 700;
  border: none;
  background-color: white;
  color: ${({ clicked }) => (clicked === true ? "black" : "#aeaeae")};
`;

export const SideBarWrapper = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dddddd;
  background-color: #fbfbfb;
  align-items: center;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  border-bottom: 1px solid #dddddd;
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
  font-weight: 600;
  color: #333d4b;
  font-family: "pretendard";
`;

export const AccountLogWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;

  flex-direction: column;
  margin-top: 10%;
`;

export const AccountLogItemWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eaecef;
  }

  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const AccountLogMainWrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const AccountLogTextSpanWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const AccountLogSpan = styled.span`
  font-size: 16px;
`;

export const AccountLogDesSpan = styled.span`
  font-size: 13px;
  color: gray;
`;

export const AccountLogContentWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
`;

export const AccountLogContentImg = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const AccountLogContentImgDescription = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AccountLogContentImgDescriptionSpan = styled.div`
  font-size: 16px;
  span {
    color: blue;
  }
`;

export const AccountLogStatusBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: #dddddd;
  border-radius: 10px;
`;

export const Status = styled.div<{ statusBar: number }>`
  width: ${({ statusBar }) => statusBar}%;
  height: 100%;
  background-color: #5184d6;
  border-radius: 10px;
`;

export const SuccessButton = styled.button`
  width: 100%;
  height: 15%;
  color: #fff;
  font-size: 14px;
  border: none;
  background-color: #5184d6;
  border-radius: 10px;
`;

export const CategoryWrapper = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  background-color: gray;
  align-items: center;
  justify-content: center;

  margin-top: 3%;
`;

export const RoomTypeWrapper = styled.div`
  width: 20%;
  height: 25%;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const MainChallengeComponent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
`;

export const DisCountWrapper = styled.div`
  display: flex;
  width: 45%;
  height: 100%;

  flex-direction: column;
`;

export const MyChallengeContentWrapper = styled.div`
  width: 24%;
  height: 100%;
  min-width: 230px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyChallengeImgWrapper = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  display: flex;
`;

export const MyChallengeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const BlurOveray = styled.div`
  display: flex;
  position: absolute;
  width: 17.2%;
  height: 16.1%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(3deg, rgba(0, 0, 0, 0.64) 3.49%, rgba(102, 102, 102, 0) 84.55%);
`;

export const BlurMainWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 90%;
  height: 80%;
`;

export const BlurSpan = styled.span`
  color: white;
  font-size: 16px;
`;

export const SearchWrapper = styled.div`
  width: 30%;
  height: 60%;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 2rem;
  border: none;
  background-color: rgba(2, 32, 71, 0.09);
  padding-left: 10%;
`;

export const MysteryBox = styled.div`
  width: 10%;
  height: 100%;
`;

export const HeaderContentWrapper = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkelethoneBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const ChallengeTextWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;

  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ChallengeText = styled.div`
  width: 49%;
  height: auto;
  display: flex;
  text-align: center;
`;

export const ChallengeTextSpan = styled.span`
  font-size: 14px;
  color: #333d4b;
  margin-right: 2%;
`;

export const SubTextSpan = styled.span`
  font-size: 12px;
  color: #aeaeae;
`;

export const Footer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
`;

export const AccountUndefined = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #c7c7c7;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

export const UndefinedSpan = styled.div`
  font-family: "pretendard";
  font-weight: 600;
`;

export const CateGorry = styled.div`
  width: 30%;
  height: 100%;
  background-color: #6b7684;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoomType = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export const ProductRegistrationButton = styled.button`
  border-radius: 10px;
  background-color: #5b94f3;
  padding: 15px 20px;
  border: none;
  font-family: "pretendard";
  font-weight: 500;
  color: white;
`;
