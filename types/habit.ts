export type Frequency = 'daily' | 'weekly' | 'custom';

export interface Habit {
  id: string;
  title: string;
  description?: string;
  frequency: Frequency;
  customDays?: number[]; // For custom frequency (0-6 representing Sunday-Saturday)
  createdAt: Date;
  userId: string;
  streak: number;
  lastCompleted?: Date;
}

export interface HabitCompletion {
  id: string;
  habitId: string;
  userId: string;
  completedAt: Date;
}

export interface HabitStats {
  totalHabits: number;
  completionRate: number;
  currentStreak: number;
  longestStreak: number;
  weeklyCompletion: {
    [key: string]: number; // Date string as key, completion count as value
  };
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Date;
} 