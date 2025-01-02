import React, { useState } from 'react';
import { CommInfo } from './CommInfo';
import { format } from 'date-fns';

export const CommWays = ({ communication }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Map methodId to communication type
  const getCommunicationTypeText = () => {
    switch (communication.methodId) {
      case '1': 
        return 'LinkedIn Post';
      case '2': 
        return 'LinkedIn Message';
      case '3': 
        return 'Email';
      case '4':
        return 'Phone Call';
      default:
        return 'Unknown';
    }
  };

  // Format the communication date
  const formattedDate = communication.date ? format(new Date(communication.date), 'MMM d, yyyy') : 'No date available';

  return (
    <div className="relative">
      <div
        className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors sm:p-1"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Display the communication type and date with date below */}
        <span className="text-sm font-medium text-gray-900 block">
          {getCommunicationTypeText()}
        </span>
        <span className="text-sm text-gray-500 mt-1 block">
          {formattedDate}
        </span>

        {showTooltip && (
          <CommInfo
            communication={communication}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 sm:left-0 sm:transform-none sm:mt-0 sm:top-0"
          />
        )}
      </div>
    </div>
  );
};
