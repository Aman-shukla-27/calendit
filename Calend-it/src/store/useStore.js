import { create } from 'zustand';
import { addDays, isToday, isPast, startOfToday } from 'date-fns';

const defaultCommunicationMethods = [
  { id: '1', name: 'LinkedIn Post', description: 'Post on company LinkedIn page', sequence: 1, isMandatory: true },
  { id: '2', name: 'LinkedIn Message', description: 'Direct message on LinkedIn', sequence: 2, isMandatory: true },
  { id: '3', name: 'Email', description: 'Email communication', sequence: 3, isMandatory: true },
  { id: '4', name: 'Phone Call', description: 'Phone call communication', sequence: 4, isMandatory: true },
];

// Load initial data from localStorage
const loadInitialState = () => {
  try {
    const savedCompanies = localStorage.getItem('companies');
    const savedCommunications = localStorage.getItem('communications');
    const savedMethods = localStorage.getItem('communicationMethods');

    return {
      companies: savedCompanies ? JSON.parse(savedCompanies) : [],
      communications: savedCommunications ? JSON.parse(savedCommunications).map(comm => ({
        ...comm,
        date: new Date(comm.date)
      })) : [],
      communicationMethods: savedMethods ? JSON.parse(savedMethods) : defaultCommunicationMethods,
    };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return {
      companies: [],
      communications: [],
      communicationMethods: defaultCommunicationMethods,
    };
  }
};

const initialState = loadInitialState();

export const useStore = create((set, get) => ({
  companies: initialState.companies,
  communications: initialState.communications,
  communicationMethods: initialState.communicationMethods,

  addCompany: (company) => set((state) => {
    const newState = {
      companies: [...state.companies, company]
    };
    localStorage.setItem('companies', JSON.stringify(newState.companies));
    return newState;
  }),

  updateCompany: (company) => set((state) => {
    const newState = {
      companies: state.companies.map((c) => c.id === company.id ? company : c)
    };
    localStorage.setItem('companies', JSON.stringify(newState.companies));
    return newState;
  }),

  deleteCompany: (id) => set((state) => {
    const newState = {
      companies: state.companies.filter((c) => c.id !== id),
      communications: state.communications.filter((c) => c.companyId !== id)
    };
    localStorage.setItem('companies', JSON.stringify(newState.companies));
    localStorage.setItem('communications', JSON.stringify(newState.communications));
    return newState;
  }),

  addCommunication: (communication) => set((state) => {
    const newState = {
      communications: [...state.communications, communication]
    };
    localStorage.setItem('communications', JSON.stringify(newState.communications));
    return newState;
  }),

  updateCommunicationMethod: (method) => set((state) => {
    const newState = {
      communicationMethods: state.communicationMethods.map((m) => 
        m.id === method.id ? method : m
      )
    };
    localStorage.setItem('communicationMethods', JSON.stringify(newState.communicationMethods));
    return newState;
  }),

  getLastFiveCommunications: (companyId) => {
    const { communications } = get();
    return communications
      .filter((c) => c.companyId === companyId)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 5);
  },

  getNextScheduledCommunication: (companyId) => {
    const { companies, communications } = get();
    const company = companies.find((c) => c.id === companyId);
    if (!company) return null;

    const lastCommunication = communications
      .filter((c) => c.companyId === companyId)
      .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

    if (!lastCommunication) {
      return startOfToday();
    }

    return addDays(lastCommunication.date, company.communicationPeriodicity);
  },

  getOverdueCommunications: () => {
    const { companies } = get();
    const tasks = [];

    companies.forEach(company => {
      const nextDate = get().getNextScheduledCommunication(company.id);
      if (nextDate && isPast(nextDate) && !isToday(nextDate)) {
        tasks.push({ company, date: nextDate });
      }
    });

    return tasks;
  },

  getTodayCommunications: () => {
    const { companies } = get();
    const tasks = [];

    companies.forEach(company => {
      const nextDate = get().getNextScheduledCommunication(company.id);
      if (nextDate && isToday(nextDate)) {
        tasks.push({ company, date: nextDate });
      }
    });

    return tasks;
  },

  getCommunicationsForDay: (date) => {
    const { communications, companies, communicationMethods } = get();
    return communications
      .filter(comm => {
        const commDate = new Date(comm.date);
        return (
          commDate.getDate() === date.getDate() &&
          commDate.getMonth() === date.getMonth() &&
          commDate.getFullYear() === date.getFullYear()
        );
      })
      .map(comm => ({
        ...comm,
        company: companies.find(c => c.id === comm.companyId),
        method: communicationMethods.find(m => m.id === comm.methodId)
      }));
  }
}));