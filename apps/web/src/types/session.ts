export interface Session {
  id: string;
  coachId: string;
  clientId: string;
  serviceId: string;
  startTime: Date;
  endTime: Date;
  status: 'scheduled' | 'in_progress' | 'completed' | 'canceled' | 'no_show';
  notes?: string;
  recordingUrl?: string;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
};
