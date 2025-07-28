import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const StudentLogin = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleAuth = async (e) => {
  e.preventDefault();
  setError('');
  try {
    if (isRegistering) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'student'
      });

      navigate('/dashboard/student');
    } else {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/dashboard/student');
    }
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-nunito">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isRegistering ? 'Register as Student' : 'Student Login'}
        </h2>
        <form className="space-y-6" onSubmit={handleAuth}>
          <div>
            <label htmlFor="email" className="text-md font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3.5 py-2.5 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[16px]"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <div className="relative">
            <label htmlFor="password" className="text-md font-medium text-gray-700">
                Password
            </label>
            <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="w-full px-3.5 py-2.5 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[16px]"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-600 hover:text-indigo-600 cursor-pointer"
            >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            >
              {isRegistering ? 'Register' : 'Log In'}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
        <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-[17px] font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
            {isRegistering ? 'Already have an account? Log In' : "Don't have an account? Register"}
        </button>
        </div>
        <div className="text-sm text-center">
            <button onClick={() => navigate('/')} className="text-[15px] font-semibold text-gray-600 hover:text-gray-900 cursor-pointer">
                &larr; Back to Home
            </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin
