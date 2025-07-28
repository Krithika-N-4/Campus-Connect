import React, { useState } from 'react'
import { db, auth } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'


const ComplaintForm = () => {
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    if (!category || !location || !date || !description) {
      setMessage('Please fill out all fields.')
      return
    }

    try {
      await addDoc(collection(db, 'complaints'), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email,
        category,
        location,
        date,
        description,
        status: 'Pending',
        submittedAt: serverTimestamp(),
      });
      setCategory('')
      setLocation('')
      setDate('')
      setDescription('')
      setMessage('Complaint submitted successfully!')
      setTimeout(() => setMessage(''), 3500)
    } catch (error) {
      console.error('Error submitting complaint: ', error)
      setMessage('Failed to submit complaint. Please try again.')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-nunito">
      <h3 className="text-xl font-semibold leading-6 text-gray-900">
        Campus Complaint Form
      </h3>
      <p className="mt-1 text-md text-gray-600">
        Submit issues related to electricity, water, maintenance, etc.
      </p>
      
    <div>
        <label htmlFor="category" className="block text-md font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
        >
          <option value="">Select a category</option>
          <option value="Electricity">⚡️ Electricity</option>
          <option value="Water Supply">💧 Water Supply</option>
          <option value="Canteen">🍴 Canteen</option>
          <option value="Hostel Maintenance">🏢 Hostel</option>
          <option value="Classroom Issues">🏫 Classroom</option>
          <option value="Parking Issues">🅿 Parking</option>
          <option value="Other">❓ Other</option>
        </select>
    </div>

    <div>
        <label htmlFor="location" className="block text-md font-medium text-gray-700">
            Location
        </label>
        <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
            placeholder="e.g., Block 3"
        />
    </div>

    <div>
        <label htmlFor="date" className="block text-md font-medium text-gray-700">
            Date of Issue
        </label>
        <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
        />
        </div>
      <div>
    
    <label htmlFor="description" className="block text-md font-medium text-gray-700">
          Description
        </label>
        <textarea
        id="description"
        name="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
        placeholder="Please describe the issue in detail..."
        ></textarea>
      </div>
    
    {message && <p className="text-md text-green-600">{message}</p>}
      <div>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 mt-1 w-full text-md cursor-pointer text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Complaint
        </button>
      </div>
    </form>
  );
};

export default ComplaintForm