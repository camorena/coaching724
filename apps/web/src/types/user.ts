export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'coach' | 'client';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSettings {
  userId: string;
  theme: 'light' | 'dark' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  timezone: string;
}

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
};
