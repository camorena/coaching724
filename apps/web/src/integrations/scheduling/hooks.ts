import { useState, useEffect, useCallback } from 'react';
import { format, addMinutes, parse, parseISO, isWithinInterval, areIntervalsOverlapping } from 'date-fns';
import { CalendarEvent, TimeSlot, AvailabilityRule, SchedulingConfig } from './types';
import { generateTimeSlots } from './utils';

// Default configuration
const defaultConfig: SchedulingConfig = {
  defaultAppointmentDuration: 60, // 1 hour
  minBookingNotice: 120, // 2 hours
  maxBookingInFuture: 60, // 60 days
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

// Mock data - In a real app, this would come from an API
const mockAvailabilityRules: AvailabilityRule[] = [
  {
    id: '1',
    coachId: 'coach-1',
    daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
    startTime: '09:00',
    endTime: '17:00',
    bufferBefore: 0,
    bufferAfter: 15,
  },
  {
    id: '2',
    coachId: 'coach-2',
    daysOfWeek: [1, 3, 5], // Monday, Wednesday, Friday
    startTime: '10:00',
    endTime: '18:00',
    bufferBefore: 15,
    bufferAfter: 15,
  },
];

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Career Coaching Session',
    start: new Date(new Date().setHours(10, 0, 0, 0)),
    end: new Date(new Date().setHours(11, 0, 0, 0)),
    extendedProps: {
      type: 'appointment',
      status: 'confirmed',
      clientId: 'client-1',
      clientName: 'John Doe',
      coachId: 'coach-1',
      coachName: 'Jane Smith',
      serviceId: 'service-1',
      serviceName: 'Career Coaching',
      price: 150,
      location: 'online',
      meetingUrl: 'https://zoom.us/j/123456789',
    },
  },
  {
    id: '2',
    title: 'Business Strategy Session',
    start: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(14, 0, 0, 0),
    end: new Date(new Date().setDate(new Date().getDate() + 1)).setHours(15, 30, 0, 0),
    extendedProps: {
      type: 'appointment',
      status: 'scheduled',
      clientId: 'client-2',
      clientName: 'Alice Johnson',
      coachId: 'coach-2',
      coachName: 'Bob Williams',
      serviceId: 'service-2',
      serviceName: 'Business Strategy',
      price: 200,
      location: 'online',
      meetingUrl: 'https://zoom.us/j/987654321',
    },
  },
];

export const useCalendar = (config: Partial<SchedulingConfig> = {}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Merge config with defaults
  const fullConfig: SchedulingConfig = { ...defaultConfig, ...config };
  
  // Fetch events - in a real app, this would be an API call
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // In a real app, you would fetch from an API
        setEvents(mockEvents);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);
  
  // Create a new event (appointment)
  const createEvent = async (event: Omit<CalendarEvent, 'id'>): Promise<CalendarEvent> => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Generate a new ID
      const newEvent: CalendarEvent = {
        ...event,
        id: `event-${Date.now()}`,
      };
      
      // Add to state
      setEvents(prev => [...prev, newEvent]);
      
      return newEvent;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Update an existing event
  const updateEvent = async (event: CalendarEvent): Promise<CalendarEvent> => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update in state
      setEvents(prev => prev.map(e => e.id === event.id ? event : e));
      
      return event;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Delete an event
  const deleteEvent = async (eventId: string): Promise<void> => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Remove from state
      setEvents(prev => prev.filter(e => e.id !== eventId));
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  return {
    events,
    loading,
    error,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};

export const useAvailability = (
  coachId: string,
  options: {
    duration?: number; // in minutes
    date?: Date;
    timeZone?: string;
  } = {}
) => {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const {
    duration = defaultConfig.defaultAppointmentDuration,
    date = new Date(),
    timeZone = defaultConfig.timeZone,
  } = options;
  
  // Fetch availability - in a real app, this would be an API call
  const fetchAvailability = useCallback(async (date: Date) => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get coach's availability rules
      const rules = mockAvailabilityRules.filter(rule => rule.coachId === coachId);
      
      if (rules.length === 0) {
        throw new Error(`No availability rules found for coach ${coachId}`);
      }
      
      // Find rules applicable for the selected date
      const dayOfWeek = date.getDay();
      const applicableRules = rules.filter(rule => rule.daysOfWeek.includes(dayOfWeek));
      
      if (applicableRules.length === 0) {
        // No availability on this day
        setAvailableSlots([]);
        return;
      }
      
      // Get existing appointments
      const existingEvents = mockEvents.filter(event => {
        const eventDate = new Date(event.start);
        return (
          eventDate.toDateString() === date.toDateString() &&
          event.extendedProps?.coachId === coachId
        );
      });
      
      // Generate time slots based on availability rules
      let slots: TimeSlot[] = [];
      
      for (const rule of applicableRules) {
        const ruleSlots = generateTimeSlots({
          date,
          startTime: rule.startTime,
          endTime: rule.endTime,
          duration,
          bufferBefore: rule.bufferBefore || 0,
          bufferAfter: rule.bufferAfter || 0,
        });
        
        slots = [...slots, ...ruleSlots];
      }
      
      // Filter out slots that overlap with existing appointments
      const availableSlots = slots.filter(slot => {
        const slotStart = new Date(slot.start);
        const slotEnd = new Date(slot.end);
        
        // Check if slot overlaps with any existing appointment
        return !existingEvents.some(event => {
          const eventStart = new Date(event.start);
          const eventEnd = new Date(event.end);
          
          return areIntervalsOverlapping(
            { start: slotStart, end: slotEnd },
            { start: eventStart, end: eventEnd }
          );
        });
      });
      
      setAvailableSlots(availableSlots);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [coachId, duration]);
  
  // Fetch availability when date changes
  useEffect(() => {
    fetchAvailability(date);
  }, [fetchAvailability, date]);
  
  return {
    availableSlots,
    loading,
    error,
    refreshAvailability: (date: Date) => fetchAvailability(date),
  };
};
