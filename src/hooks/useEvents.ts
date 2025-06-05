import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import eventsData from '../data/events.json';

export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'workshop' | 'webinar' | 'conference' | 'meetup';
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  registrationUrl: string;
  tags: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    time: string;
    location: string;
    shortDescription: string;
    fullDescription: string;
    registrationUrl: string;
    category: string;
    featured: boolean;
    tags: string[];
  };
}

export const getCategoryColor = (category: string) => {
  switch (category) {
    case 'workshop':
      return '#70fcfe'; // primary-400 - turkusowy dla warsztatów
    case 'webinar':
      return '#26e4e7'; // primary-600 - ciemniejszy turkus dla webinarów  
    case 'conference':
      return '#1ea2b4'; // primary-700 - ciemny turkus dla konferencji
    case 'meetup':
      return '#1f788c'; // primary-800 - najciemniejszy turkus dla meetupów
    default:
      return '#70fcfe'; // default primary-400
  }
};

export const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'workshop':
      return 'Warsztat';
    case 'webinar':
      return 'Webinar';
    case 'conference':
      return 'Konferencja';
    case 'meetup':
      return 'Meetup';
    default:
      return category;
  }
};

export const useEvents = () => {
  const { i18n } = useTranslation();
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    // Get events based on current language
    const currentLanguage = i18n.language.startsWith('pl') ? 'pl' : 'en';
    const languageEvents = eventsData[currentLanguage as keyof typeof eventsData] || eventsData.en;
    setEvents(languageEvents as EventData[]);
  }, [i18n.language]);

  // Convert to calendar format
  const calendarEvents: CalendarEvent[] = events.map(event => ({
    id: event.id,
    title: event.title,
    start: event.date,
    backgroundColor: getCategoryColor(event.category),
    borderColor: getCategoryColor(event.category),
    extendedProps: {
      time: event.time,
      location: event.location,
      shortDescription: event.shortDescription,
      fullDescription: event.fullDescription,
      registrationUrl: event.registrationUrl,
      category: event.category,
      featured: event.featured,
      tags: event.tags
    }
  }));

  // Convert to display format
  const displayEvents = events.map(event => {
    // Format date properly - add 'T12:00:00' to avoid timezone issues
    const eventDate = new Date(event.date + 'T12:00:00');
    const formattedDate = eventDate.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    return {
      id: event.id,
      title: event.title,
      date: formattedDate,
      time: event.time,
      location: event.location,
      description: event.shortDescription,
      fullDescription: event.fullDescription,
      eventUrl: event.registrationUrl,
      category: event.category as 'workshop' | 'webinar' | 'conference' | 'meetup',
      featured: event.featured,
      tags: event.tags
    };
  });

  return {
    events: displayEvents,
    calendarEvents,
    getCategoryColor,
    getCategoryLabel
  };
}; 