import React from 'react';
import { Calendar } from 'lucide-react';

export const ChooseDate = ({ onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
      <div className="relative w-full sm:w-auto">
        <input
          type="date"
          onChange={(e) => onChange(prev => ({ ...prev, start: new Date(e.target.value) }))}
          className="pl-10 pr-4 py-2 rounded-md shadow-sm focus:ring-blue-500  w-full sm:w-auto"
        />
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
      <span className="text-gray-500">to</span>
      <div className="relative w-full sm:w-auto">
        <input
          type="date"
          onChange={(e) => onChange(prev => ({ ...prev, end: new Date(e.target.value) }))}
          className="pl-10 pr-4 py-2  rounded-md shadow-sm focus:ring-blue-500  w-full sm:w-auto"
        />
        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};
