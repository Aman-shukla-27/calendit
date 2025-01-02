import React from 'react';
import { useStore } from '../../store/useStore';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const PieChartUi = ({ dateRange, selectedCompany }) => {
  const { communications, communicationMethods } = useStore();

  const data = communicationMethods.map(method => ({
    name: method.name,
    value: communications.filter(c => c.methodId === method.id).length
  }));

  const COLORS = ['#4f0ec7', '#07e8ce', '#de101a', '#083485'];

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 text-green-700">Engagements</h2>
      <div className="h-64 w-full sm:h-80 md:h-96">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
