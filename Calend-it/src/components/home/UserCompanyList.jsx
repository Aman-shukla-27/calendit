import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { format } from 'date-fns';
import { CommWays } from './communication/CommWays';
import { MapPin, Calendar as CalendarIcon } from 'lucide-react';


export const UserCompanyList = ({ companies, selectedCompanies, onSelectCompany }) => {
    const { getLastFiveCommunications, getNextScheduledCommunication } = useStore();
    const getHighlightColor = (date, highlightsEnabled) => {
        if (!highlightsEnabled) return '';
        const today = new Date();
        const diffDays = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return 'bg-red-50';
        if (diffDays === 0) return 'bg-yellow-50';
        return '';
    };

    return (
        <div className="w-full overflow-x-auto">
            {/* Table Header for Desktop and Mobile */}
            <div className="hidden sm:block">
                <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="col-span-1"></div>
                    <div className="col-span-3">Company</div>
                    <div className="col-span-4">Past Communications</div>
                    <div className="col-span-3">Next Due</div>
                    <div className="col-span-1"></div>
                </div>
            </div>

            {/* Mobile View Header */}
            <div className="sm:hidden px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 text-center text-base font-semibold">Company Communications</div>
                </div>
            </div>

            <div className="divide-y divide-gray-200">
                {companies.map((company) => {
                    const [highlightsEnabled, setHighlightsEnabled] = useState(true);
                    const nextScheduled = getNextScheduledCommunication(company.id);
                    const highlightColor = getHighlightColor(nextScheduled, highlightsEnabled);

                    return (
                        <div key={company.id} className={`${highlightColor} hover:bg-gray-50 relative`}>
                            {/* Mobile View */}
                            <div className="sm:hidden p-4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedCompanies.includes(company.id)}
                                                onChange={() => onSelectCompany(company.id)}
                                                className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-2"
                                            />
                                            <div className="text-base font-medium text-gray-900">{company.name}</div>
                                        </div>
                                        {company.location && (
                                            <div className="flex items-center text-sm text-gray-500">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {company.location}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <CalendarIcon className="w-4 h-4 mr-1" />
                                        {nextScheduled ? format(nextScheduled, 'MMM d') : 'Not set'}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {getLastFiveCommunications(company.id).map((comm, idx) => (
                                            <div key={idx} className="relative group bg-white border rounded p-1">
                                                <CommWays communication={comm} />
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs rounded px-2 py-1 hidden group-hover:block max-w-[calc(100%-20px)] whitespace-nowrap z-50">
                                                    {comm.details}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Enable/Disable Button for Mobile */}
                                    <div className="flex justify-center items-center mt-4">
                                        <button
                                            onClick={() => setHighlightsEnabled(!highlightsEnabled)}
                                            className={`px-3 py-1 text-sm font-medium ${highlightsEnabled ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'} rounded-md transition-colors`}
                                        >
                                            {highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop View */}
                            <div className="hidden sm:grid grid-cols-12 gap-4 px-4 sm:px-6 py-4 items-center">
                                <div className="col-span-1">
                                    <input
                                        type="checkbox"
                                        checked={selectedCompanies.includes(company.id)}
                                        onChange={() => onSelectCompany(company.id)}
                                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <div className="text-sm font-medium text-gray-900">{company.name}</div>
                                    {company.location && (
                                        <div className="text-sm text-gray-500 flex items-center mt-1">
                                            {/* <MapPin className="w-4 h-4 mr-1" /> */}
                                            <i class="fa-solid fa-location-dot w-4 h-4 mr-1"></i>
                                            {company.location}
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-4">
                                    <div className="flex flex-wrap gap-2">
                                        {getLastFiveCommunications(company.id).map((comm, idx) => (
                                            <div key={idx} className="relative group bg-white border rounded p-1">
                                                <CommWays communication={comm} />
                                                
                                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white text-xs rounded px-2 py-1 hidden group-hover:block max-w-[calc(100%-20px)] whitespace-nowrap z-50">
                                                    {comm.details}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-3 text-sm text-gray-500 flex items-center">
                                    {/* <CalendarIcon className="w-4 h-4 mr-1" /> */}
                                    <i class="fa-solid fa-calendar w-4 h-4 mr-1"></i>
                                    {nextScheduled ? format(nextScheduled, 'PPP') : 'Not scheduled'}
                                </div>

                                {/* Enable/Disable Highlights Button for Desktop */}
                                <div className="col-span-1 flex justify-center items-center">
                                    <button
                                        onClick={() => setHighlightsEnabled(!highlightsEnabled)}
                                        className={`px-3 py-1 text-sm font-medium ${highlightsEnabled ? 'bg-green-600 text-white' : 'bg-red-200 text-gray-800'} rounded-md transition-colors`}
                                    >
                                        {highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights'}
                                    </button>
                                </div>
                              
                            </div>
                            
                        </div>
                        
                    );
                })}
            </div>
        </div>
    );
};
