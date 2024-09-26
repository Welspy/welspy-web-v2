export interface AllChallengeProps {
  roomId: number;
  title: string;
  description: string;
  goalMoney: number;
  memberLimit: number;
  currentMember: number;
  imageUrl: string;
  category: "TRAVEL";
  roomType: "PUBLIC";
  productId: number;
  productImageUrl: string;
}

export interface MyChallengeProps {
  idx: number;
  roomId: number;
  email: string;
  balance: number;
  title: string;
  description: string;
  goalMoney: number;
  productImageUrl: string;
}
