import { apiClient } from "@/lib/api-client";
import { ApiResponse } from "@/types/api";

export const leaderboardService = {
  getLeaderboard: (testId: string) => apiClient.get<any, ApiResponse<{
    testId: string;
    entries: Array<{
      user: { _id: string; name: string; avatar?: string };
      score: number;
      rank: number;
      rewardEarned: number;
    }>;
  }>>(`/leaderboard/${testId}`),
};
