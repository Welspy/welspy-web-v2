import axios from "axios";
import CONFIG from "src/config/config.json";

interface Props {
  ProductId: number | undefined;
}

const UseMakeChallenge = ({ ProductId }: Props) => {
  const MakeChallengeButton = async () => {
    await axios.post(`${CONFIG.serverUrl}/room`, {
      title: "string",
      description: "string",
      goalMoney: 0,
      memberLimit: 0,
      imageUrl: "string",
      category: "TRAVEL",
      roomType: "PUBLIC",
      productId: 0,
    });
  };

  return {};
};

export default UseMakeChallenge;
