import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center font-nunito">
      <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-4xl">
          Welcome to <span className="text-indigo-600">Campus Connect</span>
        </h1>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
          Your one-stop platform for a better campus life. Submit complaints, raise concerns, and let your voice be heard. We're here to help you.
        </p>
        <div className="flex flex-col max-w-xs mx-auto space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
          <button
            onClick={() => navigate('/login/student')}
            className="w-full px-6 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer"
          >
            Student Portal
          </button>
          <button
            onClick={() => navigate('/login/admin')}
            className="w-full px-6 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 cursor-pointer"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;