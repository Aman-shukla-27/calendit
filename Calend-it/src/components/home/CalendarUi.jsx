import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval,
  isSameMonth,
  isToday,
  addMonths,
  subMonths
} from 'date-fns';


export const CalendarUi = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { getCommunicationsForDay } = useStore();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const previousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="bg-purple-500 rounded-lg shadow overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white font-sans">
          {format(currentDate, 'MMM yyyy')}
        </h2>
        <div className="flex space-x-2 text-white">
          <button
            onClick={previousMonth}
            className="px-2 hover:bg-purple-400 rounded-full"
          >
            {/* <ChevronLeft className="w-5 h-5" /> */}
            <i class="fa-solid fa-caret-left w-5 h-5"></i>
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-purple-400 rounded-full"
          >
            {/* <ChevronRight className="w-5 h-5" /> */}
            <i class="fa-solid fa-caret-right w-5 h-5"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-purple-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div
            key={day}
            className="bg-purple-100 py-2 text-center text-sm font-semibold text-purple-700 "
          >
            {day}
          </div>
        ))}

        {days.map(day => {
          const communications = getCommunicationsForDay(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <div
              key={day.toString()}
              className={`min-h-[120px] p-2 ${
                !isCurrentMonth
                  ? 'bg-gray-50 text-gray-400'
                  : 'bg-white'
              } ${
                isToday(day) ? 'bg-purple-100' : ''
              }`}
            >
              <div className={`text-right text-sm ${
                isCurrentMonth ? 'text-purple-700' : 'text-gray-400'
              }`}>
                {format(day, 'd')}
              </div>
              
              <div className="mt-2 space-y-1">
                {communications.map((comm, idx) => (
                  <div
                    key={idx}
                    className="text-xs p-1.5 rounded bg-purple-300 text-purple-800"
                  >
                    <div className="font-medium">{comm.company.name}</div>
                    <div>{comm.method.name}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
