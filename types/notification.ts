import { NotificationType } from "@/lib/constants";
import { User } from "./user";

export interface Notification {
  _id: string;
  user: User | string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  link?: string;
  createdAt: string;
  updatedAt: string;
}
