import { apiClient } from "@/lib/api-client";
import { Payment } from "@/types/payment";
import { ApiResponse, PaginatedResponse } from "@/types/api";

export const paymentService = {
  createOrder: (data: { courseId: string; amount: number; currency: string }) => apiClient.post<any, ApiResponse<Payment>>("/payments/create-order", data),
  
  verifyPayment: (data: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => apiClient.post<any, ApiResponse<{ success: boolean; purchaseId?: string }>>("/payments/verify", data),
  
  // Admin only
  getAllPurchases: (params?: any) => apiClient.get<any, PaginatedResponse<any>>("/payments/purchases", { params }),
};
