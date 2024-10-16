import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";

interface Props {
  RoomId: number | undefined;
}

const UseExitButton = ({ RoomId }: Props) => {
  const Token = Cookies.get("accessToken");
  const RoomExitButton = async () => {
    try {
      await axios.delete(`${CONFIG.serverUrl}/room/exit?roomId=${RoomId}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }).then((res) => {
        alert('챌린지 탈퇴 성공')
      });
    } catch (error) {
      console.error(error);
    }
  };
  return { RoomExitButton };
};

export default UseExitButton;
