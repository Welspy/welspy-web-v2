import axios from "axios";
import { useState } from "react";
import { MyChallengeProps } from "src/type/challenge.types";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";

const UseMyChallenge = () => {
  const [mychallenge, setMyChallenge] = useState<MyChallengeProps[]>([]);
  const Token = Cookies.get("accessToken");
  const page = 1;
  const size = 10;
  const MyChallenge = async () => {
    try {
      await axios
          .get(`${CONFIG.serverUrl}/room/my-room`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
            params: {
              page,
              size,
            },
          })
          .then((res) => {
            setMyChallenge(res.data.data);
          });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    mychallenge,
    MyChallenge,
  };
};

export default UseMyChallenge;