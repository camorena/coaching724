export interface Notification {
  id: string;
  userId: string;
  type: 'appointment_reminder' | 'payment_receipt' | 'session_canceled' | 'new_message' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
};
