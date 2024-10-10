import { useState } from "react";
import { BankProps } from "src/type/bank.types";
import CONFIG from "src/config/config.json";
import axios from "axios";
import Cookies from "js-cookie";

const UseBank = () => {
  const [bank, setBank] = useState<BankProps>();
  const Token = Cookies.get('accessToken')

  const UserBank = async () => {
    try {
      const res = await axios.get(`${CONFIG.serverUrl}/bank`,{
        headers: {
            Authorization: `Bearer ${Token}`
        }
      })
      if(res.status === 200) {
        setBank(res.data.data)
      };
    } catch (error) {
        console.error(error)
    }
  };
  return {
    UserBank,
    bank
  };
};

export default UseBank;
