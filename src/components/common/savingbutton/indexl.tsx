import styled from "styled-components";

const SavingButton = () => {
  return (
    <ButtonWrapper>
      <ExitButtonItem>충전하기</ExitButtonItem>
    </ButtonWrapper>
  );
};

export default SavingButton;

const ButtonWrapper = styled.div`
  width: 65%;
  height: 70px;
`;

export const ExitButtonItem = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: blue;
  border-radius: 10px;
  border: none;
`;
