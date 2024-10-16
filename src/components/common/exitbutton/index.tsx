import UseExitButton from "src/hooks/modal/useExitButton";
import styled from "styled-components";

interface Props {
  RoomId: number | undefined;
}

const ExitButton = ({ RoomId }: Props) => {
  const { RoomExitButton } = UseExitButton({ RoomId });
  return (
    <ButtonWrapper>
      <ExitButtonItem onClick={RoomExitButton}>방 탈퇴하기</ExitButtonItem>
    </ButtonWrapper>
  );
};

export default ExitButton;

export const ButtonWrapper = styled.div`
  width: 30%;
  height: 70px;
`;

export const ExitButtonItem = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #ff6060;
  border-radius: 10px;
  font-size: 20px;
  border: none;
`;
