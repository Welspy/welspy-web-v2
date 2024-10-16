import CONFIG from "src/config/config.json";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const UseSavingButton = () => {
  const [roomId, setRoomId] = useState<number>(0);
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
      .catch((err) => {
        console.error(err);
      });
  };
  return {};
};

export default UseSavingButton;
