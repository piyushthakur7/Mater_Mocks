import { AccessType } from "@/lib/constants";
import { Category } from "./category";
import { User } from "./user";

export interface Course {
  _id: string;
  title: string;
  description?: string;
  category: Category | string;
  instructor: User | string;
  price: number;
  accessType: AccessType;
  thumbnailUrl?: string;
  isActive: boolean;
  totalEnrollments: number;
  features: string[];
  createdAt: string;
  updatedAt: string;
}
