import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { format } from 'date-fns';

export const CommModule = ({ companies, onClose }) => {
  const { communicationMethods, addCommunication } = useStore();
  const [methodId, setMethodId] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    companies.forEach(company => {
      addCommunication({
        id: crypto.randomUUID(),
        companyId: company.id,
        methodId,
        date: new Date(date),
        notes
      });
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-6 max-w-md w-full sm:max-w-lg">
        <h2 className="text-lg font-medium mb-4">Log Communication</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <div className="mt-1 text-sm text-gray-500 ">
              {companies.map(company => company.name).join(', ')}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Communication Type
            </label>
            <select
              value={methodId}
              onChange={(e) => setMethodId(e.target.value)}
              required
              // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              className="mt-1 block w-full rounded-md border border-black bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select type...</option>
              {communicationMethods.map(method => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              className="mt-1 block w-full rounded-md border border-black bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
              rows={3}
              // className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              className="mt-1 block w-full rounded-md border border-black bg-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};