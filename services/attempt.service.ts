import { apiClient } from "@/lib/api-client";
import { TestAttempt } from "@/types/attempt";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const attemptService = {
  start: (testId: string) => apiClient.post<any, ApiResponse<TestAttempt>>("/attempts/start", { testId }),
  
  answer: (attemptId: string, data: { questionId: string; selectedOptionId: string }) => apiClient.put<any, ApiResponse<TestAttempt>>(`/attempts/${attemptId}/answer`, data),
  
  submit: (attemptId: string) => apiClient.post<any, ApiResponse<TestAttempt>>(`/attempts/${attemptId}/submit`),
  
  evaluate: (attemptId: string) => apiClient.post<any, ApiResponse<TestAttempt>>(`/attempts/${attemptId}/evaluate`),
  
  getMyAttempts: (params?: any) => apiClient.get<any, PaginatedResponse<TestAttempt>>("/attempts/my", { params }),
  
  getById: (id: string) => apiClient.get<any, ApiResponse<TestAttempt>>(`/attempts/${id}`),
  
  // Admin only
  getAllAttempts: (params?: any) => apiClient.get<any, PaginatedResponse<TestAttempt>>("/attempts", { params }),
};
