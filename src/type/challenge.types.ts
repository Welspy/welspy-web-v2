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
  roomId: number;
  title: string;
  description: string;
  goalMoney: number;
  memberLimit: number;
  currentMember: number;
  imageUrl: string;
  category: string;
  roomType: string;
  productId: number;
  productImageUrl: string;
}
