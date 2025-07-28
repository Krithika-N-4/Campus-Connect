import React, { useState } from 'react'
import ComplaintForm from './ComplaintForm'
import ConcernForm from './ConcernForm'
import { auth } from '../firebase/firebase'
import { signOut } from 'firebase/auth'

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('complaint')

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error', error))
  };

  return (
    <div className="max-w-4xl min-h-screen p-4 mx-auto font-nunito">
      <header className="flex items-center justify-between p-4 mb-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer"
        >
          Log Out
        </button>
      </header>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8 px-2" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('complaint')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                activeTab === 'complaint'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Complaint
            </button>
            <button
              onClick={() => setActiveTab('concern')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                activeTab === 'concern'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Concern
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'complaint' && <ComplaintForm />}
          {activeTab === 'concern' && <ConcernForm />}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;