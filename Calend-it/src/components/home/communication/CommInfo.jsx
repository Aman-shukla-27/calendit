import React from 'react';
import { format } from 'date-fns';

export const CommInfo = ({ communication }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded shadow-lg whitespace-nowrap z-10">
      <p>{format(new Date(communication.date), 'PPP')}</p>
      <p className="mt-1">{communication.notes}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
    </div>
  );
};
