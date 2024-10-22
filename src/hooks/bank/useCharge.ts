import axios from "axios";
import CONFIG from "src/config/config.json";
import { useState } from "react";
import Cookies from "js-cookie";

const UseCharge = () => {
  const [money, setMoney] = useState<number>(0);
  const Charge = async () => {
    const Token = Cookies.get("accessToken");
    await axios
      .patch(
        `${CONFIG.serverUrl}/bank/charge`,
        {
          money: money,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        alert("충전 성공!");
      });
  };
  return {
    setMoney,
    Charge,
  };
};

export default UseCharge;
