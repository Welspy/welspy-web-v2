import { SetStateAction } from "react";
import styled from "styled-components";
import UseCharge from "src/hooks/bank/useCharge";

const ChargeModal = () => {
  const { setMoney, Charge } = UseCharge();
  return (
    <MainWrapper>
      <TitleSpan>충전 액수를 입력해주세요</TitleSpan>
      <ChargeInput onChange={(e) => setMoney(Number(e.target.value))} placeholder="저금 액수를 입력해주세요" />
      <BottomWrapper>
        <ButtonWrapper>
          <ChargeButton onClick={Charge}>확인</ChargeButton>
        </ButtonWrapper>
      </BottomWrapper>
    </MainWrapper>
  );
};

export default ChargeModal;

const MainWrapper = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  display: flex;
  border: 1px solid #aeaeae;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  right: 850px;
  top: 430px;
  border-radius: 5px;
  flex-direction: column;
`;

const TitleSpan = styled.span`
  font-size: 20px;
  font-family: "pretendard";
  font-weight: bold;
`;

const ChargeInput = styled.input`
  width: 85%;
  height: 50px;
  border: none;
  border-radius: 20px;
  border: 1px solid #aeaeae;
  padding-left: 5%;
`;

const BottomWrapper = styled.div`
  width: 90%;
  height: 55px;
  display: flex;
  flex-direction: row-reverse;
`;

const ButtonWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const ChargeButton = styled.button`
  width: 45%;
  height: 80%;
  background-color: #5b94f3;
  border-radius: 15px;
  border: none;
  color: white;
  font-size: 15px;
`;
