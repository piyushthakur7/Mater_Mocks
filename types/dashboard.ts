export interface StudentDashboard {
  overview: {
    totalTestsAttempted: number;
    averageScore: number;
    totalEarned: number;
    activeEnrollments: number;
  };
  recentActivity: Array<{
    type: "TEST_ATTEMPT" | "COURSE_ENROLLMENT" | "REWARD_EARNED";
    title: string;
    date: string;
    meta?: any;
  }>;
  upcomingTests: Array<{
    _id: string;
    title: string;
    courseName: string;
    availableFrom?: string;
  }>;
  performanceChart: Array<{
    date: string;
    score: number;
    testTitle: string;
  }>;
}

export interface AdminDashboard {
  overview: {
    totalStudents: number;
    totalCourses: number;
    totalMockTests: number;
    totalRevenue: number;
    activeSuspensions: number;
  };
  revenueChart: Array<{
    date: string;
    revenue: number;
  }>;
  recentUsers: Array<{
    _id: string;
    name: string;
    email: string;
    joinedAt: string;
  }>;
  recentTransactions: Array<{
    _id: string;
    studentName: string;
    amount: number;
    status: string;
    date: string;
  }>;
}
