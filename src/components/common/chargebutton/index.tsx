import { SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  setBank: React.Dispatch<SetStateAction<boolean | undefined>>;
  bank: boolean | undefined;
}

const UseChargeButton = ({ setBank, bank }: Props) => {
  return (
    <ButtonWrapper onClick={() => setBank(!bank)}>
      <SavingButtonItem>충전</SavingButtonItem>
    </ButtonWrapper>
  );
};

export default UseChargeButton;

const ButtonWrapper = styled.div`
  width: 25%;
  height: 60px;
  margin-left: 70%;
`;

export const SavingButtonItem = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #aeaeae;
  border-radius: 10px;
  font-size: 20px;
  border: none;
`;
