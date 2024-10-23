import axios from "axios";
import CONFIG from "src/config/config.json";
import Cookies from "js-cookie";

interface Props {
  ProductId: number | undefined;
  productData: {
    name: string; // title
    description: string; // description
    imageUrl: string; // imageUrl
    category: string; // category
  };
  roomType: string; // roomType 추가
  goalMoney: number; // 목표 금액 추가
  memberLimit: number; // 최대 멤버 수 추가
}

const UseMakeChallenge = ({ ProductId, productData, roomType, goalMoney, memberLimit }: Props) => {
  const MakeChallengeButton = async () => {
    const token = Cookies.get("accessToken");
    if (!ProductId) {
      console.error("ProductId가 필요합니다.");
      return;
    }

    try {
      const response = await axios.post(`${CONFIG.serverUrl}/room`, {
        title: productData.name, // title
        description: productData.description, // description
        goalMoney, // 목표 금액
        memberLimit, // 최대 멤버 수
        imageUrl: productData.imageUrl, // imageUrl
        category: productData.category, // category
        roomType, // roomType
        productId: ProductId, // productId
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      console.log("챌린지 등록 성공:", response.data);
    } catch (error) {
      console.error("챌린지 등록 실패:", error);
    }
  };

  return { MakeChallengeButton };
};

export default UseMakeChallenge;
