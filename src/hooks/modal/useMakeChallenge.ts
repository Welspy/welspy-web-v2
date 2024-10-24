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
    ClickProductModal: () => void; // 모달 닫기 함수 추가
}

const UseMakeChallenge = ({
                              ProductId,
                              productData,
                              roomType,
                              goalMoney,
                              memberLimit,
                              ClickProductModal,
                          }: Props) => {
    const MakeChallengeButton = async () => {
        const token = Cookies.get("accessToken");
        if (!ProductId) {
            console.error("ProductId가 필요합니다.");
            return;
        }

        try {
            const response = await axios.post(`${CONFIG.serverUrl}/room`, {
                title: productData.name,
                description: productData.description,
                goalMoney,
                memberLimit,
                imageUrl: productData.imageUrl,
                category: productData.category,
                roomType,
                productId: ProductId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log("챌린지 등록 성공:", response.data);
            alert("챌린지가 생성되었어요!");
            ClickProductModal(); // 모달 닫기 호출
        } catch (error) {
            console.error("챌린지 등록 실패:", error);
        }
    };

    return { MakeChallengeButton };
};

export default UseMakeChallenge;
