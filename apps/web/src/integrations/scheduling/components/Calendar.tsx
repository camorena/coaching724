import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEvent } from '../types';
import { useCalendar } from '../hooks';

interface CalendarProps {
  initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';
  height?: string | number;
  editable?: boolean;
  selectable?: boolean;
  onEventClick?: (event: CalendarEvent) => void;
  onDateSelect?: (start: Date, end: Date, allDay: boolean) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  initialView = 'timeGridWeek',
  height = 'auto',
  editable = false,
  selectable = false,
  onEventClick,
  onDateSelect,
}) => {
  const { events, loading, error } = useCalendar();
  const [currentView, setCurrentView] = useState<string>(initialView);
  
  // Handle event click
  const handleEventClick = (info: any) => {
    if (onEventClick) {
      const event = events.find(e => e.id === info.event.id);
      if (event) {
        onEventClick(event);
      }
    }
  };
  
  // Handle date select (for creating new events)
  const handleDateSelect = (info: any) => {
    if (onDateSelect) {
      onDateSelect(info.start, info.end, info.allDay);
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg">
        <p>Error loading calendar: {error.message}</p>
      </div>
    );
  }
  
  return (
    <div className="calendar-container border border-gray-200 rounded-lg overflow-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={initialView}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events.map(event => ({
          id: event.id,
          title: event.title,
          start: event.start,
          end: event.end,
          allDay: event.allDay || false,
          extendedProps: event.extendedProps,
          backgroundColor: getEventColor(event),
          borderColor: getEventColor(event),
        }))}
        height={height}
        editable={editable}
        selectable={selectable}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        eventClick={handleEventClick}
        select={handleDateSelect}
        viewDidMount={(info) => setCurrentView(info.view.type)}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday
          startTime: '09:00',
          endTime: '17:00',
        }}
        slotMinTime="07:00:00"
        slotMaxTime="21:00:00"
      />
    </div>
  );
};

// Helper function to determine event color based on type and status
const getEventColor = (event: CalendarEvent): string => {
  const type = event.extendedProps?.type;
  const status = event.extendedProps?.status;
  
  if (type === 'appointment') {
    if (status === 'confirmed') return '#17A79D'; // primary
    if (status === 'scheduled') return '#8E44AD'; // secondary
    if (status === 'canceled') return '#E74C3C'; // red
    if (status === 'completed') return '#27AE60'; // green
    return '#17A79D'; // default primary
  }
  
  if (type === 'availability') return '#D4AF37'; // highlight
  if (type === 'busy') return '#7F8C8D'; // gray
  
  return '#17A79D'; // default primary
};
