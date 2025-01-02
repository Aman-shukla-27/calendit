import React, { useState } from 'react';
import { Frequency } from './Frequency';
import { PieChartUi } from './PieChartUi';
import { ActivityLogModule } from './ActivityLogModule';
import { ChooseDate } from './ChooseDate';
import { Download } from 'lucide-react';

export const AnalyticsUi = () => {
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [selectedCompany, setSelectedCompany] = useState('all');

  const handleExport = () => {
    const data = [
      ['Date', 'Company', 'Method', 'Notes'],
      
    ];

    const csvContent = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'communications.csv';
    a.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header section */}
      <div className="mb-6 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-center">
        
        <div className="flex flex-col sm:flex-row gap-4">
          <ChooseDate onChange={setDateRange} />
          <button
            onClick={handleExport}
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Grid layout for communication and dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <Frequency
          dateRange={dateRange}
          selectedCompany={selectedCompany}
        />
        <PieChartUi
          dateRange={dateRange}
          selectedCompany={selectedCompany}
        />
      </div>

      {/* Activity Log section */}
      <div className="bg-white rounded-lg shadow">
        <ActivityLogModule />
      </div>
    </div>
  );
};
