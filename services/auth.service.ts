import { apiClient } from "@/lib/api-client";
import { AuthData } from "@/types/user";
import { ApiResponse } from "@/types/api";

export const authService = {
  login: (data: any) => apiClient.post<any, ApiResponse<AuthData>>("/auth/login", data),
  
  register: (data: any) => apiClient.post<any, ApiResponse<AuthData>>("/auth/register", data),
  
  logout: () => apiClient.post<any, ApiResponse<null>>("/auth/logout"),
  
  forgotPassword: (email: string) => apiClient.post<any, ApiResponse<null>>("/auth/forgot-password", { email }),
  
  resetPassword: (token: string, data: any) => apiClient.post<any, ApiResponse<null>>(`/auth/reset-password/${token}`, data),
  
  changePassword: (data: any) => apiClient.post<any, ApiResponse<null>>("/auth/change-password", data),
};
