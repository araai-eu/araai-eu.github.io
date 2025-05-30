import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface EventDetails {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'workshop' | 'webinar' | 'conference' | 'meetup';
  featured: boolean;
}

const Events = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'workshop':
      case 'webinar':
        return '#70fcfe'; // primary turquoise
      case 'conference':
        return '#1e40af'; // dark blue
      case 'meetup':
      default:
        return '#6b7280'; // gray
    }
  };

  const events = [
    {
      id: '1',
      title: 'Warsztat: Etyka AI',
      start: '2025-04-01',
      backgroundColor: getCategoryColor('workshop'),
      borderColor: getCategoryColor('workshop'),
      extendedProps: {
        time: '14:00',
        location: 'Poznań, Kampus UAM',
        description: 'Warsztat poświęcony etycznym aspektom sztucznej inteligencji. Omówimy najważniejsze wyzwania i dobre praktyki.',
        category: 'workshop',
        featured: true
      }
    },
    {
      id: '2',
      title: 'Konferencja AI Poland',
      start: '2025-05-15',
      backgroundColor: getCategoryColor('conference'),
      borderColor: getCategoryColor('conference'),
      extendedProps: {
        time: '09:00',
        location: 'Warszawa, Centrum Kongresowe',
        description: 'Doroczna konferencja poświęcona tematyce sztucznej inteligencji w Polsce.',
        category: 'conference',
        featured: false
      }
    },
    {
      id: '3',
      title: 'Webinar: AI w biznesie',
      start: '2025-05-22',
      backgroundColor: getCategoryColor('webinar'),
      borderColor: getCategoryColor('webinar'),
      extendedProps: {
        time: '18:00',
        location: 'Online',
        description: 'Praktyczne omówienie zastosowań AI w różnych branżach.',
        category: 'webinar',
        featured: false
      }
    }
  ];

  const upcomingEvents: EventDetails[] = events.map(event => ({
    id: event.id,
    title: event.title,
    date: new Date(event.start).toLocaleDateString('pl-PL'),
    time: event.extendedProps.time,
    location: event.extendedProps.location,
    description: event.extendedProps.description,
    category: event.extendedProps.category as 'workshop' | 'webinar' | 'conference' | 'meetup',
    featured: event.extendedProps.featured
  }));

  const handleEventClick = (clickInfo: any) => {
    const eventData: EventDetails = {
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      date: clickInfo.event.start?.toLocaleDateString('pl-PL') || '',
      time: clickInfo.event.extendedProps.time,
      location: clickInfo.event.extendedProps.location,
      description: clickInfo.event.extendedProps.description,
      category: clickInfo.event.extendedProps.category,
      featured: clickInfo.event.extendedProps.featured
    };
    setSelectedEvent(eventData);
  };

  return (
    <div className="pt-16 min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-montserrat font-bold mb-6 sm:mb-8 leading-tight text-white">
            {t('events.calendar.title')}
          </h1>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
            <style>{`
              .fc {
                font-family: 'Signika', sans-serif;
              }
              .fc-theme-standard .fc-scrollgrid {
                border: 1px solid #e5e7eb;
                border-radius: 0.75rem;
              }
              .fc-button-primary {
                background-color: #f3f4f6 !important;
                border-color: #d1d5db !important;
                color: #374151 !important;
                font-weight: 600 !important;
                border-radius: 0.5rem !important;
                padding: 0.5rem 1rem !important;
                font-size: 0.875rem !important;
              }
              .fc-button-primary:hover {
                background-color: #e5e7eb !important;
                border-color: #9ca3af !important;
              }
              .fc-button-primary:focus {
                box-shadow: 0 0 0 3px rgba(112, 252, 254, 0.3) !important;
              }
              .fc-button-active {
                background-color: #1e40af !important;
                border-color: #1e40af !important;
                color: white !important;
              }
              .fc-button-active:hover {
                background-color: #1d4ed8 !important;
                border-color: #1d4ed8 !important;
              }
              .fc-today-button {
                display: none !important;
              }
              .fc-event {
                border-radius: 0.375rem !important;
                border: none !important;
                font-weight: 600 !important;
                font-size: 0.875rem !important;
                padding: 2px 6px !important;
                cursor: pointer !important;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
              }
              .fc-event:hover {
                opacity: 0.8 !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
                transition: all 0.2s ease !important;
              }
              .fc-daygrid-event-harness {
                margin: 1px !important;
              }
              .fc-col-header-cell {
                background-color: #f9fafb !important;
                border-color: #e5e7eb !important;
                font-weight: 600 !important;
                color: #374151 !important;
                text-transform: uppercase !important;
                font-size: 0.75rem !important;
                letter-spacing: 0.05em !important;
                padding: 0.75rem !important;
              }
              .fc-daygrid-day {
                border-color: #f3f4f6 !important;
                min-height: 120px !important;
              }
              .fc-daygrid-day:hover {
                background-color: #fafafa !important;
              }
              .fc-day-today {
                background-color: #fef3cd !important;
              }
              .fc-daygrid-day-number {
                color: #4b5563 !important;
                font-weight: 600 !important;
                padding: 0.5rem !important;
              }
              .fc-toolbar {
                margin-bottom: 2rem !important;
                flex-wrap: wrap !important;
                gap: 1rem !important;
              }
              .fc-toolbar-title {
                font-size: 1.5rem !important;
                font-weight: 700 !important;
                color: #111827 !important;
                font-family: 'Montserrat', sans-serif !important;
              }
              .fc-toolbar-chunk {
                display: flex !important;
                align-items: center !important;
                gap: 0.5rem !important;
              }
              @media (max-width: 768px) {
                .fc-toolbar {
                  flex-direction: column !important;
                  align-items: center !important;
                  text-align: center !important;
                }
                .fc-toolbar-chunk {
                  justify-content: center !important;
                  flex-wrap: wrap !important;
                }
                .fc-button {
                  padding: 0.375rem 0.75rem !important;
                  font-size: 0.75rem !important;
                }
                .fc-toolbar-title {
                  font-size: 1.25rem !important;
                  margin: 0.5rem 0 !important;
                }
                .fc-daygrid-day {
                  min-height: 80px !important;
                }
                .fc-event {
                  font-size: 0.75rem !important;
                  padding: 1px 4px !important;
                }
                .fc-daygrid-event .fc-event-title {
                  font-size: 0.75rem !important;
                }
                .fc-daygrid-day-frame {
                  min-height: 80px !important;
                }
                .fc-daygrid-day-events {
                  margin: 2px !important;
                }
                .fc-col-header-cell {
                  padding: 0.5rem 0.25rem !important;
                  font-size: 0.7rem !important;
                }
                .fc-daygrid-day-number {
                  padding: 0.25rem !important;
                  font-size: 0.875rem !important;
                }
              }
            `}</style>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
              }}
              events={events}
              eventClick={handleEventClick}
              height="auto"
              locale="pl"
              firstDay={1}
              buttonText={{
                month: 'Miesiąc',
                week: 'Tydzień'
              }}
              dayHeaderFormat={{ weekday: 'short' }}
              eventDisplay="block"
              displayEventTime={false}
              eventMaxStack={3}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-montserrat font-bold text-dark-950 mb-6 sm:mb-8">
              {t('events.upcoming.title')}
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-montserrat font-semibold text-white"
                    style={{ backgroundColor: getCategoryColor(event.category) }}
                  >
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-montserrat font-bold">
                      ✨
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-montserrat font-bold text-dark-950 mb-4 leading-tight">
                  {event.title}
                </h3>
                
                <div className="text-sm sm:text-base text-dark-600 mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span 
                      className="font-signika font-semibold"
                      style={{ color: '#70fcfe' }}
                    >
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span className="font-signika">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span className="font-signika">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-dark-700 font-signika leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="w-full btn-primary"
                >
                  {t('events.buttons.moreInfo')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-dark-950 pr-4">
                  {selectedEvent.title}
                </h2>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <span>📅</span>
                  <span className="font-signika font-semibold text-lg">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>⏰</span>
                  <span className="font-signika text-lg">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span className="font-signika text-lg">{selectedEvent.location}</span>
                </div>
              </div>
              
              <p className="text-dark-700 font-signika leading-relaxed mb-8 text-lg">
                {selectedEvent.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1">
                  {t('events.buttons.register')}
                </button>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="btn-secondary flex-1"
                >
                  {t('events.buttons.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events; 