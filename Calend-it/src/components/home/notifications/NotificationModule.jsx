import React from 'react';
import { format } from 'date-fns';
import { Bell, AlertCircle } from 'lucide-react';

export const NotificationModule = ({ overdueTasks, todayTasks, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-green-800 ">
          <i class="fa-solid fa-circle-dot mr-2"></i>
            Notifications
            </h3>
          <span className="bg-blue-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded animate-pulse">
            {overdueTasks.length + todayTasks.length} pending
          </span>
        </div>

        {overdueTasks.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center text-red-600 mb-3">
              <AlertCircle className="w-5 h-5 mr-2 animate-ping" />
              <h4 className="font-medium">Overdue Communications</h4>
            </div>
            <div className="space-y-3">
              {overdueTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-2 rounded bg-red-50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {task.company.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Due: {format(task.date, 'PPP')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {todayTasks.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-yellow-600 mb-3">
              {/* <Calendar className="w-5 h-5 mr-2" /> */}
              <i class="fa-solid fa-calendar w-5 h-5 mr-2"></i>
              <h4 className="font-medium">Due Today</h4>
            </div>
            <div className="space-y-3">
              {todayTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-2 rounded bg-yellow-50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {task.company.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      Schedule for today
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {overdueTasks.length === 0 && todayTasks.length === 0 && (
          <div className="text-center py-4">
            <Bell className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">No pending notifications</p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100">
        <button
          onClick={onClose}
          className="block font-semibold w-full text-center px-4 py-3 text-sm text-red-500 hover:bg-gray-50 " 
        >
          <i class="fa-solid fa-circle-xmark mr-2"></i>
          Close 
        </button>
      </div>
    </div>
  );
};