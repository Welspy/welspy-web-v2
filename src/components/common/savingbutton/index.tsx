import React, { SetStateAction } from "react";

import styled from "styled-components";

interface Props {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
}

const SavingButton = ({ state, setState }: Props) => {
  
  return (
    <ButtonWrapper
      onClick={() => {
        setState(!state);
      }}
    >
      <SavingButtonItem color={state}>{state === true ? "취소" : "저금하기"}</SavingButtonItem>
    </ButtonWrapper>
  );
};

export default SavingButton;

const ButtonWrapper = styled.div`
  width: 65%;
  height: 70px;
`;

export const SavingButtonItem = styled.button<{ color: boolean }>`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: ${({ color }) => (color === true ? "#aeaeae" : "#5b94f3")};
  border-radius: 10px;
  font-size: 20px;
  border: none;
`;
