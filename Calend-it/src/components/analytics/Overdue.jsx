import React from 'react';
import { useStore } from '../../store/useStore';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Overdue = ({ dateRange }) => {
  const { getOverdueCommunications } = useStore();

  // In real app, would be calculated from actual communications data
  const data = [
    { name: 'Jan', overdue: 8 },
    { name: 'Feb', overdue: 7 },
    { name: 'Mar', overdue: 4 },
    { name: 'Apr', overdue: 1 },
    { name: 'May', overdue: 1 }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Overdue Communication</h2>
      <div className="h-64 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="overdue" stroke="#EF4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
