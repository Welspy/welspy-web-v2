import { useState } from "react";
import { AccountLogProps } from "src/type/accountLog.types";
import CONFIG from "src/config/config.json";
import axios from "axios";
import Cookies from "js-cookie";

const UseAccountLog = () => {
  const [accountlog, setAccountLog] = useState<AccountLogProps>();
  const Token = Cookies.get("accessToken");

  const page = 1;
  const size = 10;

 

  const AccountLog = async () => {
    try {
     await axios
        .get(`${CONFIG.serverUrl}/bank/log-all`, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params: {
            page,
            size,
          },
        })
        .then((res) => {
          setAccountLog(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return {
    accountlog,
    AccountLog,
  };
};

export default UseAccountLog;
