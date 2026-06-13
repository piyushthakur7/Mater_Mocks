import { apiClient } from "@/lib/api-client";
import { Notification } from "@/types/notification";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const notificationService = {
  getMyNotifications: (params?: any) => apiClient.get<any, PaginatedResponse<Notification>>("/notifications", { params }),
  
  markAsRead: (id: string) => apiClient.patch<any, ApiResponse<Notification>>(`/notifications/${id}/read`),
  
  markAllAsRead: () => apiClient.patch<any, ApiResponse<any>>("/notifications/read-all"),
};
