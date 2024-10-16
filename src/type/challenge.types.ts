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
}

export interface MyChallengeProps {
  idx: number;
  roomId: number;
  email: string;
  balance: number;
  name: string;
  title: string;
  description: string;
  goalMoney: number;
  imageUrl: string;
}

export interface SearchProps {
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
}
