import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 py-16">
      <div className="animate-pulse-slow absolute inset-0 opacity-20">
        <div className="particle-background"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}