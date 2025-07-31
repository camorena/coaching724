import { User } from './user';

export interface Coach extends User {
  role: 'coach';
  bio: string;
  specialties: string[];
  hourlyRate: number;
  rating: number;
  sessionCount: number;
  availability: Availability[];
  services: Service[];
}

export interface Availability {
  id: string;
  coachId: string;
  dayOfWeek: number; // 0-6, 0 = Sunday
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  isRecurring: boolean;
}

export interface Service {
  id: string;
  coachId: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  isActive: boolean;
};
