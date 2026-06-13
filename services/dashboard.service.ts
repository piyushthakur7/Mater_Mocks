import { apiClient } from "@/lib/api-client";
import { StudentDashboard, AdminDashboard } from "@/types/dashboard";
import { ApiResponse } from "@/types/api";

export const dashboardService = {
  getStudentDashboard: () => apiClient.get<any, ApiResponse<StudentDashboard>>("/dashboard/student"),
  
  // Admin only
  getAdminDashboard: () => apiClient.get<any, ApiResponse<AdminDashboard>>("/dashboard/admin"),
};
