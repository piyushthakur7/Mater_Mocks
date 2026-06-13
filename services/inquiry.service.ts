import { apiClient } from "@/lib/api-client";
import { Inquiry } from "@/types/inquiry";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const inquiryService = {
  create: (data: { subject: string; message: string }) => apiClient.post<any, ApiResponse<Inquiry>>("/inquiries", data),
  
  getMyInquiries: (params?: any) => apiClient.get<any, PaginatedResponse<Inquiry>>("/inquiries/my", { params }),
  
  getById: (id: string) => apiClient.get<any, ApiResponse<Inquiry>>(`/inquiries/${id}`),
  
  // Admin only
  getAll: (params?: any) => apiClient.get<any, PaginatedResponse<Inquiry>>("/inquiries", { params }),
  
  reply: (id: string, data: { message: string; updateStatus?: string }) => apiClient.post<any, ApiResponse<Inquiry>>(`/inquiries/${id}/reply`, data),
};
