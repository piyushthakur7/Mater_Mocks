import { UserRole, UserStatus } from "@/lib/constants";

export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  walletBalance: number;
  totalMocksCompleted: number;
  fraudFlags: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthData {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}
