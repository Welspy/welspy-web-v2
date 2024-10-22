import { SetStateAction } from "react";
import styled from "styled-components";
import UseSavingButton from "src/hooks/modal/useSavingButton";

interface Props {
  setState: React.Dispatch<SetStateAction<boolean>>;
  state: boolean;
  roomId: number | undefined;
}

const SavingModal = ({ setState, state, roomId }: Props) => {
  const { SavingButton, setMoney, setRoomId } = UseSavingButton();

  return (
    <BackGroundWrapper
      onClick={(e) => {
        SavingButton();
        setRoomId(roomId);
        if (e.target === e.currentTarget) {
          setState(!state);
        }
      }}
    >
      <Wrapper>
        <MainWrapper>
          <TitleSpan>저금 액수를 입력해주세요</TitleSpan>
          <ChargeInput onChange={(e) => setMoney(Number(e.target.value))} placeholder="저금 액수를 입력해주세요" />
          <BottomWrapper>
            <ButtonWrapper>
              <ChargeButton>확인</ChargeButton>
            </ButtonWrapper>
          </BottomWrapper>
        </MainWrapper>
      </Wrapper>
    </BackGroundWrapper>
  );
};

export default SavingModal;

const BackGroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  background-color: #fff;
  border: 1px solid #aeaeae;
  position: absolute;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleSpan = styled.span`
  font-size: 30px;
  font-family: "pretendard";
  font-weight: bold;
`;

const ChargeInput = styled.input`
  width: 85%;
  height: 60px;
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
  height: 100%;
  background-color: #5b94f3;
  border-radius: 15px;
  border: none;
  color: white;
  font-size: 15px;
`;
