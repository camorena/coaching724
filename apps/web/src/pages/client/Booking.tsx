import React from 'react';
import { BookingCalendar } from '@/domains/client/components';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <BookingCalendar />
    </div>
  );
};

export default BookingPage;
