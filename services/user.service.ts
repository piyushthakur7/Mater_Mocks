import { apiClient } from "@/lib/api-client";
import { User } from "@/types/user";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const userService = {
  getMe: () => apiClient.get<any, ApiResponse<User>>("/users/me"),
  
  updateAccount: (data: any) => apiClient.patch<any, ApiResponse<User>>("/users/update-account", data),
  
  updateAvatar: (formData: FormData) => apiClient.patch<any, ApiResponse<User>>("/users/avatar", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }),
  
  // Admin only
  getAllUsers: (params?: any) => apiClient.get<any, PaginatedResponse<User>>("/users", { params }),
  
  getUserById: (id: string) => apiClient.get<any, ApiResponse<User>>(`/users/${id}`),
  
  updateUserStatus: (id: string, data: any) => apiClient.patch<any, ApiResponse<User>>(`/users/${id}/status`, data),
  
  deleteUser: (id: string) => apiClient.delete<any, ApiResponse<null>>(`/users/${id}`),
};
