import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventClickArg } from '@fullcalendar/core';

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
  const calendarRef = useRef<FullCalendar>(null);

  const getCategoryColor = (category: string) => {
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

  const getCategoryLabel = (category: string) => {
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

  const events = [
    {
      id: '1',
      title: 'Warsztat: Etyka AI',
      start: '2025-02-15',
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
      start: '2025-03-15',
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
      start: '2025-02-22',
      backgroundColor: getCategoryColor('webinar'),
      borderColor: getCategoryColor('webinar'),
      extendedProps: {
        time: '18:00',
        location: 'Online',
        description: 'Praktyczne omówienie zastosowań AI w różnych branżach.',
        category: 'webinar',
        featured: false
      }
    },
    {
      id: '4',
      title: 'Meetup: Przyszłość AI',
      start: '2025-02-08',
      backgroundColor: getCategoryColor('meetup'),
      borderColor: getCategoryColor('meetup'),
      extendedProps: {
        time: '19:00',
        location: 'Poznań, Google Campus',
        description: 'Nieformalne spotkanie społeczności AI. Dyskusja o najnowszych trendach i możliwościach współpracy.',
        category: 'meetup',
        featured: false
      }
    },
    {
      id: '5',
      title: 'Warsztat: Machine Learning',
      start: '2025-03-05',
      backgroundColor: getCategoryColor('workshop'),
      borderColor: getCategoryColor('workshop'),
      extendedProps: {
        time: '10:00',
        location: 'Kraków, AGH',
        description: 'Praktyczny warsztat wprowadzający do podstaw machine learning i uczenia maszynowego.',
        category: 'workshop',
        featured: true
      }
    },
    {
      id: '6',
      title: 'Webinar: Regulacje AI',
      start: '2025-02-28',
      backgroundColor: getCategoryColor('webinar'),
      borderColor: getCategoryColor('webinar'),
      extendedProps: {
        time: '16:00',
        location: 'Online',
        description: 'Przegląd aktualnych regulacji prawnych dotyczących AI w Europie i Polsce.',
        category: 'webinar',
        featured: false
      }
    },
    {
      id: '7',
      title: 'Konferencja: AI w Medycynie',
      start: '2025-04-10',
      backgroundColor: getCategoryColor('conference'),
      borderColor: getCategoryColor('conference'),
      extendedProps: {
        time: '09:30',
        location: 'Wrocław, Uniwersytet Medyczny',
        description: 'Konferencja naukowa poświęcona zastosowaniom sztucznej inteligencji w medycynie.',
        category: 'conference',
        featured: true
      }
    },
    {
      id: '8',
      title: 'Meetup: AI Startup',
      start: '2025-03-20',
      backgroundColor: getCategoryColor('meetup'),
      borderColor: getCategoryColor('meetup'),
      extendedProps: {
        time: '18:30',
        location: 'Gdańsk, Olivia Business Centre',
        description: 'Spotkanie dla przedsiębiorców i startupowców zainteresowanych AI.',
        category: 'meetup',
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

  const handleEventClick = (clickInfo: EventClickArg) => {
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
          {/* Custom header with Today and New Event buttons */}
          <div className="flex justify-between items-center mb-6">
            <div></div> {/* Empty space for left side */}
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  if (calendarRef.current) {
                    calendarRef.current.getApi().today();
                  }
                }}
                className="px-3 py-1.5 bg-primary-400 hover:bg-primary-500 text-dark-950 font-montserrat font-medium rounded-md transition-all duration-200 text-sm"
              >
                Dzisiaj
              </button>
              <button 
                onClick={() => {
                  // Handle new event click - you can implement this
                  console.log('New event clicked');
                }}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-montserrat font-medium rounded-md transition-all duration-200 text-sm"
              >
                <span className="hidden sm:inline">Nowe wydarzenie</span>
                <span className="sm:hidden">Nowe</span>
              </button>
            </div>
          </div>
          
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
                background-color: #f8f9fa !important;
                border-color: #dee2e6 !important;
                color: #6c757d !important;
                font-weight: 500 !important;
                border-radius: 0.375rem !important;
                padding: 0.375rem 0.75rem !important;
                font-size: 0.8125rem !important;
                font-family: 'Montserrat', sans-serif !important;
                text-transform: uppercase !important;
                letter-spacing: 0.025em !important;
              }
              .fc-button-primary:hover {
                background-color: #e9ecef !important;
                border-color: #adb5bd !important;
                color: #495057 !important;
                transform: none !important;
                box-shadow: none !important;
              }
              .fc-button-primary:focus {
                box-shadow: 0 0 0 2px rgba(108, 117, 125, 0.25) !important;
                outline: none !important;
              }
              .fc-button-active {
                background-color: #4285f4 !important;
                border-color: #4285f4 !important;
                color: white !important;
              }
              .fc-button-active:hover {
                background-color: #3367d6 !important;
                border-color: #3367d6 !important;
                color: white !important;
              }
              .fc-today-button {
                display: none !important;
              }
              /* Przyciski nawigacji (strzałki) */
              .fc-prev-button, .fc-next-button {
                background-color: #f8f9fa !important;
                border-color: #dee2e6 !important;
                color: #495057 !important;
                border-radius: 0.375rem !important;
                width: 36px !important;
                height: 36px !important;
                padding: 0 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 0.875rem !important;
              }
              .fc-prev-button:hover, .fc-next-button:hover {
                background-color: #e9ecef !important;
                border-color: #adb5bd !important;
                color: #495057 !important;
                transform: none !important;
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
                background-color: #f8f9fa !important;
                border-color: #e5e7eb !important;
                font-weight: 600 !important;
                color: #495057 !important;
                text-transform: uppercase !important;
                font-size: 0.75rem !important;
                letter-spacing: 0.05em !important;
                padding: 0.75rem !important;
                font-family: 'Montserrat', sans-serif !important;
              }
              .fc-daygrid-day {
                border-color: #f3f4f6 !important;
                min-height: 120px !important;
              }
              .fc-daygrid-day:hover {
                background-color: #f8f9fa !important;
              }
              .fc-day-today {
                background-color: #fff3cd !important;
                border-color: #ffeaa7 !important;
              }
              .fc-daygrid-day-number {
                color: #495057 !important;
                font-weight: 600 !important;
                padding: 0.5rem !important;
                font-family: 'Montserrat', sans-serif !important;
              }
              .fc-toolbar {
                margin-bottom: 1.5rem !important;
                flex-wrap: wrap !important;
                gap: 0.75rem !important;
                padding: 0.5rem 0 !important;
              }
              .fc-toolbar-title {
                font-size: 1.5rem !important;
                font-weight: 600 !important;
                color: #1a1a1a !important;
                font-family: 'Montserrat', sans-serif !important;
                text-transform: capitalize !important;
                letter-spacing: 0.01em !important;
              }
              .fc-toolbar-chunk {
                display: flex !important;
                align-items: center !important;
                gap: 0.125rem !important;
              }
              @media (max-width: 768px) {
                .fc-toolbar {
                  flex-direction: column !important;
                  align-items: center !important;
                  text-align: center !important;
                  gap: 0.75rem !important;
                }
                .fc-toolbar-chunk {
                  justify-content: center !important;
                  flex-wrap: wrap !important;
                  gap: 0.125rem !important;
                }
                .fc-button {
                  padding: 0.25rem 0.5rem !important;
                  font-size: 0.75rem !important;
                }
                .fc-prev-button, .fc-next-button {
                  width: 32px !important;
                  height: 32px !important;
                }
                .fc-toolbar-title {
                  font-size: 1.25rem !important;
                  margin: 0.25rem 0 !important;
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
              titleFormat={{ year: 'numeric', month: 'long' }}
              ref={calendarRef}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-montserrat font-bold text-dark-950 mb-6 sm:mb-8">
              Nadchodzące wydarzenia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    {getCategoryLabel(event.category)}
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
                
                <div className="text-sm sm:text-base text-gray-500 mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span className="font-signika font-medium">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏰</span>
                    <span className="font-signika font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span className="font-signika font-medium">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 font-signika leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => {
                      // Handle registration
                      console.log('Register for event:', event.id);
                    }}
                    className="w-full bg-primary-400 hover:bg-primary-500 text-dark-950 font-montserrat font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Zapisz się
                  </button>
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="w-full border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-dark-950 font-montserrat font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Więcej info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Nie przegap żadnego wydarzenia
          </h2>
          <p className="text-lg font-signika text-gray-300 mb-8 max-w-2xl mx-auto">
            Zapisz się do naszego newslettera i otrzymuj informacje o nadchodzących wydarzeniach
          </p>
          
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Twój adres email"
              className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 font-signika"
            />
            <button className="w-full bg-primary-400 hover:bg-primary-500 text-dark-950 font-montserrat font-semibold py-3 px-6 rounded-full transition-all duration-200">
              Zapisz się na newsletter
            </button>
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