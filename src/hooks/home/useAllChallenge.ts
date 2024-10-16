import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import { useState } from "react";
import { AllChallengeProps } from "src/type/challenge.types";

const UseAllChallenge = () => {
  const [challenge, setChallenge] = useState<AllChallengeProps[]>([]);
  const token = Cookies.get("accessToken");
  console.log("AccessToken:", token);

  const page = 1;
  const size = 10;
  const AllChallenge = async () => {
    await axios
      .get(`${CONFIG.serverUrl}/room/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        params: {
          page,
          size,
        },
        // withCredentials: true,
      })
      .then((res) => {
        setChallenge(res.data.data);
      })
      .catch((err) => {
        if (err instanceof Response) {
          if (err.status === 409) {
            alert("이미 가입된 방입니다");
          } else {
            console.error(`HTTP error: ${err.status}`);
          }
        } else {
          console.error(`General error: ${err.message}`);
        }
      });
  };

  return {
    AllChallenge,
    challenge,
  };
};

export default UseAllChallenge;
