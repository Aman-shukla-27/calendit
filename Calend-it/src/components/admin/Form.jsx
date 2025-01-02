import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { validateEmail, validatePhoneNumber } from '../../utils/validation';

export const Form = ({ company, setCompany, onSubmit, onCancel, isEditing }) => {
  const [tempEmail, setTempEmail] = useState('');
  const [tempPhone, setTempPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Add Email to the company emails
  const addEmail = () => {
    if (!tempEmail) return;

    if (!validateEmail(tempEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Check for duplicate email
    if (company.emails && company.emails.includes(tempEmail)) {
      setEmailError('This email is already added');
      return;
    }

    setCompany({
      ...company,
      emails: [...(company.emails || []), tempEmail],
    });
    setTempEmail('');
    setEmailError('');
  };

  // Add Phone to the company phone numbers
  const addPhone = () => {
    if (!tempPhone) return;

    if (!validatePhoneNumber(tempPhone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    if (tempPhone.length !== 10) {
      setPhoneError('Phone number must be exactly 10 digits');
      return;
    }

    // Check for duplicate phone number
    if (company.phoneNumbers && company.phoneNumbers.includes(tempPhone)) {
      setPhoneError('This phone number is already added');
      return;
    }

    setCompany({
      ...company,
      phoneNumbers: [...(company.phoneNumbers || []), tempPhone],
    });
    setTempPhone('');
    setPhoneError('');
  };

  // Remove Email from the list
  const removeEmail = (index) => {
    const newEmails = [...(company.emails || [])];
    newEmails.splice(index, 1);
    setCompany({ ...company, emails: newEmails });
  };

  // Remove Phone from the list
  const removePhone = (index) => {
    const newPhones = [...(company.phoneNumbers || [])];
    newPhones.splice(index, 1);
    setCompany({ ...company, phoneNumbers: newPhones });
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setTempPhone(value);
    setPhoneError('');
  };

  const handleEmailInput = (e) => {
    setTempEmail(e.target.value);
    setEmailError('');
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-add single email and phone if they exist
    if (tempEmail) addEmail();
    if (tempPhone) addPhone();

    // Validate before submitting
    if ((!company.emails || company.emails.length === 0) && !tempEmail) {
      setEmailError('At least one email is required');
      return;
    }

    if ((!company.phoneNumbers || company.phoneNumbers.length === 0) && !tempPhone) {
      setPhoneError('At least one phone number is required');
      return;
    }

    // Call onSubmit when there are no errors
    onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg shadow p-6 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            required
            value={company.name || ''}
            onChange={(e) => setCompany({ ...company, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            required
            value={company.location || ''}
            onChange={(e) => setCompany({ ...company, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>


        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input
            required
            type="url"
            value={company.linkedinProfile || ''}
            onChange={(e) => setCompany({ ...company, linkedinProfile: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>


        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Emails</label>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="email"
                value={tempEmail}
                onChange={handleEmailInput}
                onBlur={addEmail}
                className={`block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  emailError ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Add email address"
              />
              <button
                type="button"
                onClick={addEmail}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {emailError && <p className="text-sm text-red-600">{emailError}</p>}
            <div className="space-y-2">
              {company.emails?.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm text-gray-600">{email}</span>
                  <button
                    type="button"
                    onClick={() => removeEmail(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Phone Numbers</label>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <input
                type="tel"
                value={tempPhone}
                onChange={handlePhoneInput}
                onBlur={addPhone}
                className={`block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  phoneError ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Add phone number (10 digits)"
              />
              <button
                type="button"
                onClick={addPhone}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            {phoneError && <p className="text-sm text-red-600">{phoneError}</p>}
            <div className="space-y-2">
              {company.phoneNumbers?.map((phone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm text-gray-600">{phone}</span>
                  <button
                    type="button"
                    onClick={() => removePhone(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Comments</label>
          <textarea
            value={company.comments || ''}
            onChange={(e) => setCompany({ ...company, comments: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Communication Periodicity (days)
          </label>
          <input
            type="number"
            min="1"
            value={company.communicationPeriodicity || 14}
            onChange={(e) =>
              setCompany({ ...company, communicationPeriodicity: parseInt(e.target.value) })
            }
            className="mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-50"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {isEditing ? 'Update' : 'Add'} Company
        </button>
      </div>
    </form>
  );
};
