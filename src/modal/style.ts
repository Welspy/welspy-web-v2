import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
`;

export const MainWrapper = styled.div`
  width: 90%;
  height: 900px;
  overflow-y: scroll;
  display: flex;
  background-color: white;

  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0; /* 크기 축소 방지 */
`;

export const PositionWrapper = styled.div`
  width: 50%;
  height: 900px;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow-y: scroll;
  display: flex;
  background-color: white;
  border-radius: 1.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0; /* 크기 축소 방지 */
`;

export const ModalDeleteButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const MainContentWrapper = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const ContentTitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 5%;
`;

export const TitleSpan = styled.span`
  font-size: 35px;
  font-family: "pretendard";
  font-weight: 700;
`;

export const TypeSpan = styled.span`
  font-size: 20px;
`;
export const ChallengeTypeWrapper = styled.div`
  width: 70%;
  height: 10%;
  display: flex;

  align-self: center;
  align-items: center;
  justify-content: space-between;
`;

export const ChallengeCategorryWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 2%;
  background-color: #ccdefb;
  border-radius: 30px;
`;

export const ChallengeCategorrySpan = styled.span`
  font-size: 25px;
  font-family: "pretendard";
`;

export const ChallengeCurrentSpan = styled.span`
  font-size: 25px;
  font-family: "pretendard";
`;

export const ChallengeImgWrapper = styled.img`
  display: flex;
  align-self: center;
  width: 75%;
  height: 300px;
  margin-bottom: 2%;

`;

export const ChallengeContentWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 350px;
  align-self: center;
  align-items: center;

`;

export const ChallengeContentMainWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  
  flex-direction: column;
`;

export const GoalMoneyWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const GoalMoneySpan = styled.span`
  font-size: 23px;
  font-family: "pretendard";
`;

export const MemberWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  
 
`;

export const DescriptionSpan = styled.span`
  font-size: 22px;
  font-family: "pretendard";
  text-align: center;
`;

export const ChallengeButtonWrapper = styled.div`
  width: 70%;
  height: 70px;
  display: flex;

  align-self: center;
  margin-bottom: 80px;
  justify-content: space-between;
`;

export const OtherChallengeButtonWrapper = styled.div`
  width: 70%;
  height: 8%;
  display: flex;


  align-self: center;
  margin-bottom: 10%;
  justify-content: center;
`;

export const ChallengeCommentWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: column-reverse;
`;

export const ChallengeCommentClickWrapper = styled.div`
  width: 22%;
  height: auto;
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

export const ChallengeCommentClickSpan = styled.span`
  font-size: 20px;
  font-family: "pretendard";
`;

export const TextBox = styled.div`
  width: 100px;
  height: 1200px;
  display: flex;
  background-color: white;
`;

export const MemberLimitSpan = styled.span`
  font-size: 15px;
`;
export const ContenWrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

export const MakeModalTitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin-top: 5%;

  justify-content: center;
  align-items: center;
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 100%;
`;

export const ChallengeLimitWrapper = styled.div`
  width: 81%;
  height: 10%;
  display: flex;
  margin-top: 3%;

  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const LimitInput = styled.input`
  width: 30%;
  height: 100%;
`;

export const CategoryWrapper = styled.div`
  width: 81%;
  height: 15%;
  display: flex;
  margin-top: 3%;

  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const CategoryInput = styled.input`
  width: 100%;
  height: 100%;
`;

export const MakeDescriptionWrapper = styled.div`
  width: 81%;
  height: 25%;
  display: flex;
  margin-top: 3%;

  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const MakeDescription = styled.input`
  width: 100%;
  height: 100%;
`;

export const MakeChallengeButtonWrapper = styled.div`
  width: 81%;
  height: 15%;
  display: flex;
  margin-top: 10%;

  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const ImgInputWrapper = styled.div`
  width: 81%;
  height: 10%;
  display: flex;
  margin-top: 5%;

  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const ImgInput = styled.input`
  width: 100%;
  height: 100%;
`;

export const MakeChallengeButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: white;
  background-color: black;
  border: none;
`;

export const CurrentMemberSpan = styled.span`
  font-size: 15px;
`;

export const ProductNameSpan = styled.span`
  font-size: 15px;
`;

export const ChallengeJoinButton = styled.button`
  width: 50%;
  height: 10%;
  font-size: 14px;
  background-color: black;
  color: #fff;
  border: none;
  align-self: center;
  border-radius: 10px;
`;

export const MakeModalBigTitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  margin-top: 5%;

  align-items: center;
`;

export const CategorySpanWrapper = styled.div`
  width: 14%;
  height: 70%;
  background-color: #aeaeae;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 3%;
`;

export const CategorySpan = styled.span`
  font-size: 15px;
`;

export const ProductImgInput = styled.input`
  width: 100%;
  height: 100%;
`;
