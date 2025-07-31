import React, { useState } from 'react';
import { format } from 'date-fns';
import { useAvailability } from '../hooks';
import { formatTimeSlot } from '../utils';

interface TimeSlotPickerProps {
  coachId: string;
  date: Date;
  duration?: number;
  onSlotSelect: (slotId: string) => void;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  coachId,
  date,
  duration = 60,
  onSlotSelect,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const { availableSlots, loading, error } = useAvailability(coachId, {
    duration,
    date,
  });
  
  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId);
    onSlotSelect(slotId);
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
        <p>Error loading time slots: {error.message}</p>
      </div>
    );
  }
  
  if (availableSlots.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-600 p-4 rounded-lg">
        <p>No available time slots for {format(date, 'EEEE, MMMM d, yyyy')}.</p>
        <p>Please select a different date.</p>
      </div>
    );
  }
  
  return (
    <div className="time-slot-picker">
      <h3 className="text-lg font-semibold mb-4">
        Available Times on {format(date, 'EEEE, MMMM d, yyyy')}
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {availableSlots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => handleSlotSelect(slot.id)}
            className={`py-2 px-4 border rounded-md transition-colors ${
              selectedSlot === slot.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }`}
          >
            {formatTimeSlot(slot)}
          </button>
        ))}
      </div>
    </div>
  );
};
