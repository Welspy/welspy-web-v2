import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

export const SignInMainWrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;

  justify-content: space-between;
  flex-direction: column;
`;

export const TitleSpan = styled.span`
  font-size: 26px;
  font-weight: 700;
  margin-left: 10%;
`;

export const InputWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-self: center;

  flex-direction: column;
  justify-content: space-between;
`;

export const EmailInput = styled.input`
  width: 98%;
  height: 25%;
  border-radius: 10px;
`;

export const PwInput = styled.input`
  width: 98%;
  height: 25%;
  border-radius: 10px;
`;

export const SignInButton = styled.button`
  width: 100%;
  height: 25%;
  background-color: black;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  border: none;
`;
