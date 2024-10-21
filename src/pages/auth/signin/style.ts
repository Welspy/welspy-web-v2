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
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 85%;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
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

  align-items: center;
  justify-content: space-between;
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

export const SignInInputWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

export const UserInfoInput = styled.input`
  width: 95%;
  height: 75px;
  padding-left: 5%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #c7c7c7;

  font-size: 18px;
  font-family: "pretendard";
  outline: none;
`;

export const SignInBottomWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 80px;
  background-color: #5b94f3;
  border-radius: 10px;

  border: none;
  font-size: 25px;
  font-family: "pretendard";
  color: #fff;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
