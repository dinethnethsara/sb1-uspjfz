import React from 'react';
import { Shield } from 'lucide-react';

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  isFounder?: boolean;
}

export default function StaffCard({ name, role, image, isFounder }: StaffCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition-all">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full w-full h-full object-cover border-2 border-purple-500"
        />
        <div className="absolute -bottom-2 -right-2 bg-purple-500 p-2 rounded-full">
          <Shield className="w-4 h-4 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white text-center">{name}</h3>
      <p className={`${isFounder ? 'text-yellow-400' : 'text-purple-400'} text-center mb-2 font-semibold`}>{role}</p>
    </div>
  );
}