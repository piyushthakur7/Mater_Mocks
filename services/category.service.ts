import { apiClient } from "@/lib/api-client";
import { Category } from "@/types/category";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const categoryService = {
  getAll: () => apiClient.get<any, PaginatedResponse<Category>>("/categories"),
  
  getById: (id: string) => apiClient.get<any, ApiResponse<Category>>(`/categories/${id}`),
  
  // Admin only
  create: (data: any) => apiClient.post<any, ApiResponse<Category>>("/categories", data),
  
  update: (id: string, data: any) => apiClient.patch<any, ApiResponse<Category>>(`/categories/${id}`, data),
  
  delete: (id: string) => apiClient.delete<any, ApiResponse<null>>(`/categories/${id}`),
};
