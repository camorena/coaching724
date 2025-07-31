import { User } from './user';

export interface Client extends User {
  role: 'client';
  goals: string[];
  coaches: string[]; // Array of coach IDs
  sessionCount: number;
  subscriptionTier?: 'free' | 'basic' | 'premium' | 'enterprise';
  subscriptionStatus?: 'active' | 'trialing' | 'past_due' | 'canceled';
};
