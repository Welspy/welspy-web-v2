import axios from "axios";
import Cookies from "js-cookie";
import CONFIG from "src/config/config.json";
import { AllChallengeProps } from "src/type/challenge.types";

interface Props {
  RoomData: AllChallengeProps | undefined;
}

const UseJoinChallenge = ({ RoomData }: Props) => {
  const roomId = RoomData?.roomId;
  const Token = Cookies.get("accessToken");
  const JoinChallengeButton = async () => {
    try {
      const res = await axios.post(
        `${CONFIG.serverUrl}/room/join`,
        {
          roomId: roomId,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      if (res.status === 201) {
        console.log(res.data);
        alert("챌린지에 가입 성공하였습니다");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return {
    JoinChallengeButton,
  };
};

export default UseJoinChallenge;
