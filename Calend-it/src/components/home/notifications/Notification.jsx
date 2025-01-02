import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { AlertCircle, Calendar as CalendarIcon } from "lucide-react";

export const Notification = ({ companies, getNotifications }) => {
  const [overdue, setOverdue] = useState([]);
  const [dueToday, setDueToday] = useState([]);

  useEffect(() => {
    const { overdueTasks, todayTasks } = getNotifications(companies);
    setOverdue(overdueTasks);
    setDueToday(todayTasks);
  }, [companies, getNotifications]);

  return (
    <div className="p-4 bg-gray-100 rounded-md mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
      {overdue.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center text-red-600 mb-3">
            <AlertCircle className="w-5 h-5 mr-2" />
            <h4 className="font-medium">Overdue Communications</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {overdue.map((task, idx) => (
              <div
                key={idx}
                className="border p-3 rounded bg-red-50 shadow-sm text-sm"
              >
                <h5 className="font-medium text-gray-900 mb-1">
                  {task.companyName}
                </h5>
                <p className="text-gray-600">Due: {format(task.date, "PPP")}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {dueToday.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center text-yellow-600 mb-3">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <h4 className="font-medium">Due Today</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {dueToday.map((task, idx) => (
              <div
                key={idx}
                className="border p-3 rounded bg-yellow-50 shadow-sm text-sm"
              >
                <h5 className="font-medium text-gray-900 mb-1">
                  {task.companyName}
                </h5>
                <p className="text-gray-600">Scheduled for today</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {overdue.length === 0 && dueToday.length === 0 && (
        <p className="text-gray-500">No pending notifications</p>
      )}
    </div>
  );
};
