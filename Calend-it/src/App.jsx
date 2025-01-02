import React, { useState } from 'react';
import { Home } from './components/Home';
import { AdminUi } from './components/AdminUi';
import { AnalyticsUi } from './components/analytics/AnalyticsUi';
import { LayoutGrid, Users, BarChart, Link } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-300 font-sans">
      <nav className="bg-emerald-700 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" flex pt-2 items-center justify-between">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="text-3xl font-bold text-white focus:outline-none"
                >
                  
                  <i class="fa-solid fa-check-double px-2"></i>
                  Calend-It  
                </button>
                    <p className="animate-pulse p-2 text-center text-gray-200"> A Calendar Application for Communication Tracking !</p>
              </div>
          <div className="flex justify-center items-center p-2">
            <div className="flex justify-start">
              
              

              {/* Desktop Menu */}
              <div className="hidden sm:flex sm:space-x-8 ml-6">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`${
                    activeTab === 'dashboard'
                      ? ' text-yellow-500'
                      : ' text-gray-300  hover:text-white'
                  } inline-flex items-center px-1 pt-1  text-sm font-medium`}
                >
                  {/* <LayoutGrid className="w-4 h-4 mr-2" />
                   */}
                   <i class="fa-solid fa-house w-4 h-4 mr-2"></i>
                  Home
                </button>
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`${
                    activeTab === 'admin'
                      ? ' text-yellow-500'
                      : ' text-gray-300  hover:text-white'
                  } inline-flex items-center px-1 pt-1  text-sm font-medium`}
                >
                  <i class="fa-solid fa-user-tie w-4 h-4 mr-2"></i>
                  Admin
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`${
                    activeTab === 'analytics'
                      ? ' text-yellow-500'
                      : ' text-gray-300  hover:text-white'
                  } inline-flex items-center px-1 pt-1  text-sm font-medium`}
                >
                  <i class="fa-solid fa-chart-line w-4 h-4 mr-2"></i>
                  Analytics
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="dashboard">Dashboard</option>
                <option value="admin">Admin</option>
                <option value="analytics">Analytics</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      <main className=' min-h-screen'>
        {activeTab === 'dashboard' && <Home />}
        {activeTab === 'admin' && <AdminUi />}
        {activeTab === 'analytics' && <AnalyticsUi />}
      </main>

      <footer className="bg-emerald-700 text-white text-center py-4 self-end  w-full"> 
                    <p>Created by - Aman Shukla</p>
                    <a href='https://github.com/Aman-shukla-27' target='/'><i class="fa-brands fa-github mr-2"></i>GitHub</a>
                    <p className='text-sm'> This project was created as a task given by ENTNT for the recruitment process.</p>
                    
      </footer>
    </div>
  );
}

export default App;
