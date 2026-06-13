import { PaymentStatus, PURCHASE_STATUS } from "@/lib/constants";
import { User } from "./user";
import { Course } from "./course";

export interface Payment {
  _id: string;
  user: User | string;
  course: Course | string;
  amount: number;
  currency: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Purchase {
  _id: string;
  user: User | string;
  course: Course | string;
  payment: Payment | string;
  amount: number;
  status: keyof typeof PURCHASE_STATUS;
  createdAt: string;
  updatedAt: string;
}
