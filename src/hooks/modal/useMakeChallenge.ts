import axios from "axios";
import { useState } from "react";
import CONFIG from "src/config/config.json";
import { useCallback } from "react";
import { title } from "process";

interface MakeChellengeProps {
  title: string | undefined;
  description: string | undefined;
  goalMoney: number | undefined;
  memberLimit: number | undefined;
  imageUrl: string | undefined;
  category: string | undefined;
  roomType: string | undefined;
  productImageUrl: string | undefined;
}

const UseMakeChallenge = () => {
  const [makeChallenge, setMakceChallenge] = useState<MakeChellengeProps>({
    title: "",
    description: "",
    goalMoney: 0,
    memberLimit: 0,
    imageUrl: "",
    category: "",
    roomType: "",
    productImageUrl: "",
  });

  const MakeChallengeHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setMakceChallenge((prev) => ({ ...prev, [name]: value }));
    },
    [setMakceChallenge]
  );

  const MakeChallengeButton = async () => {
    try {
      const res = await axios.post(`${CONFIG.serverUrl}/room`, {
        title: makeChallenge.title,
        description: makeChallenge.description,
        goalMoney: makeChallenge.goalMoney,
        memberLimit: makeChallenge.memberLimit,
        imageUrl: makeChallenge.imageUrl,
        category: makeChallenge.category,
        roomType: makeChallenge.roomType,
        productImageUrl: makeChallenge.productImageUrl,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    MakeChallengeButton,
    MakeChallengeHandle,
    makeChallenge,
  };
};

export default UseMakeChallenge;
