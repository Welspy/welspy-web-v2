import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";
import { useState} from "react";
import { AllChallengeProps } from "src/type/challenge.types";

const UseAllChallenge = () => {
  const [challenge, setChallenge] = useState<AllChallengeProps[]>([]);

  const AllChallenge = async () => {
    try {
      const token = Cookies.get("accessToken");
      console.log("AccessToken:", token);

      const page = 1;
      const size = 10;

      const res = await axios.get(`${CONFIG.serverUrl}/room/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        params: {
          page,
          size,
        },
        withCredentials: true,
      });

      if (res.status === 200) {
        setChallenge(res.data.data);
        console.log(res.data.data);
      }
    } catch (error: any) {
      console.error("Error occurred:", error?.response || error);
    }
  };


  

  return {
    AllChallenge,
    challenge,
  };
};

export default UseAllChallenge;
