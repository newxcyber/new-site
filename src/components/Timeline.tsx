import React from 'react';
import { CalendarDays } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
      {events.map((event, index) => (
        <div
          key={event.year}
          className={`relative flex items-center ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          } mb-8`}
        >
          <div
            className={`w-1/2 ${
              index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                <CalendarDays className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-sm font-semibold text-indigo-600">
                {event.year}
              </span>
              <h3 className="text-lg font-bold mt-1">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}