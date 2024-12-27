import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  specialization: string;
  imageUrl: string;
}

export function TeamMember({ name, role, specialization, imageUrl }: TeamMemberProps) {
  return (
    <div className="group relative">
      <div className="relative h-80 w-80 overflow-hidden rounded-full mx-auto transform transition-all duration-300 group-hover:scale-105">
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-sm text-white font-semibold">{specialization}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}