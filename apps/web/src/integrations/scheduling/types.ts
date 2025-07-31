export interface CalendarEvent {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
  allDay?: boolean;
  resourceId?: string;
  extendedProps?: {
    description?: string;
    type?: 'appointment' | 'availability' | 'busy';
    status?: 'scheduled' | 'confirmed' | 'canceled' | 'completed';
    clientId?: string;
    clientName?: string;
    coachId?: string;
    coachName?: string;
    serviceId?: string;
    serviceName?: string;
    price?: number;
    location?: string;
    meetingUrl?: string;
  };
}

export interface TimeSlot {
  id: string;
  start: Date | string;
  end: Date | string;
  available: boolean;
}

export interface CalendarResource {
  id: string;
  title: string;
  businessHours?: {
    daysOfWeek: number[]; // 0 = Sunday, 1 = Monday, etc.
    startTime: string; // HH:MM format
    endTime: string; // HH:MM format
  }[];
}

export interface AppointmentFormData {
  serviceId: string;
  coachId: string;
  date: string;
  timeSlot: string;
  notes?: string;
  location?: 'online' | 'in-person';
}

export interface AvailabilityRule {
  id: string;
  coachId: string;
  daysOfWeek: number[]; // 0 = Sunday, 1 = Monday, etc.
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  startDate?: string; // YYYY-MM-DD format
  endDate?: string; // YYYY-MM-DD format
  bufferBefore?: number; // in minutes
  bufferAfter?: number; // in minutes
}

export interface SchedulingConfig {
  defaultAppointmentDuration: number; // in minutes
  minBookingNotice: number; // in minutes
  maxBookingInFuture: number; // in days
  timeZone: string;
}
