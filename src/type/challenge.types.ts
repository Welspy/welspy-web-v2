export interface AllChallengeProps {
  roomId: number;
  title: string;
  description: string;
  goalMoney: number;
  memberLimit: number;
  category: "TRAVEL";
  roomType: "PUBLIC";
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
