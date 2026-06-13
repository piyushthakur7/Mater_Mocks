import { User } from "./user";
import { Course } from "./course";

export interface Enrollment {
  _id: string;
  user: User | string;
  course: Course | string;
  status: "ACTIVE" | "EXPIRED" | "REVOKED";
  enrolledAt: string;
  validUntil?: string;
}
