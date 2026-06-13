import { ResourceType, AccessType } from "@/lib/constants";
import { Course } from "./course";
import { User } from "./user";

export interface Resource {
  _id: string;
  title: string;
  description?: string;
  course: Course | string;
  type: ResourceType;
  fileUrl: string;
  fileName: string;
  fileSize: number; // in bytes
  accessType: AccessType;
  uploadedBy: User | string;
  downloads: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
