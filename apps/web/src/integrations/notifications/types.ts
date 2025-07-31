export type NotificationChannel = 'email' | 'sms' | 'push' | 'in-app';

export interface NotificationTemplate {
  id: string;
  name: string;
  description?: string;
  subject?: string;
  body: string;
  type: NotificationChannel;
  variables?: string[];
}

export interface NotificationPreferences {
  userId: string;
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
    'in-app': boolean;
  };
  types: {
    appointment_reminder: boolean;
    appointment_confirmation: boolean;
    appointment_cancellation: boolean;
    payment_receipt: boolean;
    subscription_renewal: boolean;
    coach_message: boolean;
    system_announcement: boolean;
  };
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: keyof NotificationPreferences['types'];
  channel: NotificationChannel;
  read: boolean;
  createdAt: string;
  link?: string;
  metadata?: Record<string, any>;
}

export interface EmailParams {
  to: string;
  subject: string;
  body: string;
  from?: string;
  replyTo?: string;
  templateId?: string;
  variables?: Record<string, string>;
}

export interface SmsParams {
  to: string;
  body: string;
  from?: string;
}

export interface PushParams {
  userId: string;
  title: string;
  body: string;
  data?: Record<string, string>;
  icon?: string;
  image?: string;
  badge?: string;
  tag?: string;
}

export interface InAppParams {
  userId: string;
  title: string;
  body: string;
  type: keyof NotificationPreferences['types'];
  link?: string;
  metadata?: Record<string, any>;
}
