import React from 'react';
import { useStore } from '../../store/useStore';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Frequency = ({ dateRange, selectedCompany }) => {
  const { communications, communicationMethods } = useStore();

  // Transform data for chart
  const data = communicationMethods.map(method => ({
    name: method.name,
    count: communications.filter(c => c.methodId === method.id).length
  }));

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-green-700">Methods to Communicate</h2>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]"> {/* Use responsive height */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#095e08" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
