import React from 'react';
import { Edit2, Trash2, Globe, Mail, Phone } from 'lucide-react';

export const AdminCompanyList = ({ companies, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this company?');
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company Details
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Information
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Communication Schedule
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex flex-col space-y-1 sm:space-y-0">
                  <span className="text-sm font-medium text-gray-900">{company.name}</span>
                  {company.linkedinProfile && (
                    <a
                      href={company.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center mt-1"
                    >
                      <Globe className="w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-600">{company.location}</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col space-y-1">
                  {company.emails?.map((email, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {email}
                    </div>
                  ))}
                  {company.phoneNumbers?.map((phone, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {phone}
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-gray-600">
                  Every {company.communicationPeriodicity} days
                </span>
              </td>
              <td className="px-6 py-4 text-right space-x-3">
                <button
                  onClick={() => onEdit(company)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(company.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
