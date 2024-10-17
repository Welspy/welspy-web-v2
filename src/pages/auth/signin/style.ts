import styled from "styled-components";
import Img from "src/assets/SignInBackgroundImg.svg";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainWrapper = styled.div`
  width: 35%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 85%;
  background: linear-gradient(180deg, #fbfbfb 0%, #ccdefb 315.91%);
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const SignInWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
`;

export const SignInTitleWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "pretendard";
  font-weight: bold;
`;
