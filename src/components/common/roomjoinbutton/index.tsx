import styled from "styled-components";
import UseJoinChallenge from "src/hooks/modal/useJoinChallenge";
import { AllChallengeProps } from "src/type/challenge.types";

interface Props {
  Button: () => Promise<void>;
}

const RoomJoinButton = ({ Button }: Props) => {
  return (
    <ButtonWrapper onClick={Button}>
      <JoinButtonItem> 가입하기</JoinButtonItem>
    </ButtonWrapper>
  );
};

export default RoomJoinButton;

const ButtonWrapper = styled.div`
  width: 65%;
  height: 70px;
`;
export const JoinButtonItem = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: black;
  border-radius: 10px;
  font-size: 20px;
  border: none;
`;
