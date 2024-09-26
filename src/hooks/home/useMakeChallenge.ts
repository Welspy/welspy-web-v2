import axios from "axios";
import { useState } from "react";
import CONFIG from "src/config/config.json";

const UseMakeChallenge = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDiscription] = useState<string>("");
  const [goalMoney, setGoalMoney] = useState<number>(0);
  const [memberLimit, setMemberLimit] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>("");

  const MakeChallengeButton = async () => {
    try {
      const res = await axios.post(`${CONFIG.serverUrl}/room`, {});
    } catch (error) {}
  };

  return {};
};

export default UseMakeChallenge;
