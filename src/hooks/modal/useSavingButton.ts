import CONFIG from "src/config/config.json";
import axios from "axios";
import { SetStateAction, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  setState: React.Dispatch<SetStateAction<boolean>>;
  state: boolean;
}

const UseSavingButton = ({ setState, state }: Props) => {
  const [roomId, setRoomId] = useState<number | undefined>(0);
  const [money, setMoney] = useState<number>(0);
  const Token = Cookies.get("accessToken");
  const SavingButton = async () => {
    await axios
      .patch(
        `${CONFIG.serverUrl}/bank`,
        {
          roomId: roomId,
          money: money,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("충전 성공!");
        }
        setState(!state);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return {
    setRoomId,
    setMoney,
    SavingButton,
    money
  };
};

export default UseSavingButton;
