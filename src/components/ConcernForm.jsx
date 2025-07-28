import React, { useState } from 'react'
import { db, auth } from '../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const ConcernForm = () => {
  const [regno, setRegno] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if ( !category || !description) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'concerns'), {
        userId: auth.currentUser.uid,
        email: auth.currentUser.email,
        category,
        description,
        status: 'Pending',
        submittedAt: serverTimestamp(),
      })
      setName('')
      setRegno('')
      setCategory('')
      setDescription('')
      setMessage('Concern submitted successfully! We will reach out to you.')
      setTimeout(() => setMessage(''), 3500)
    } catch (error) {
      console.error('Error submitting concern: ', error)
      setMessage('Failed to submit concern. Please try again.')
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-nunito">
      <h3 className="text-xl font-medium leading-6 text-gray-900">
        Student Concern Form
      </h3>
      <p className="mt-1 text-md text-gray-600">
        For mental health, academic, or personal issues. This will be kept confidential.
      </p>


      <div className='relative overflow-visible'>
        <label htmlFor="concern-category" className="block text-md font-medium text-gray-700">
          Category
        </label>
        <select
          id="concern-category"
          name="concern-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
        >
          <option value="">Select a category</option>
          <option value="Exam Stress">Exam Stress</option>
          <option value="Academic Stress">Academic Stress</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Feature of Failure">Fear of Failure</option>
          <option value="Time Management Issues">Time Management Issues</option>
          <option value="Peer Pressure">Peer Pressure</option>
          <option value="Feeling Isolated">Feeling Isolated</option>
          <option value="Bullying">Bullying</option>
          <option value="Financial Problems">Financial Problems</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="concern-description" className="block text-md font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="concern-description"
          name="concern-description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-[15px]"
          placeholder="Please describe your concern. Your privacy is important to us."
        ></textarea>
      </div>
      {message && <p className="text-md text-green-600">{message}</p>}
      <div>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 mt-1 w-full text-md cursor-pointer text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Concern
        </button>
      </div>
    </form>
  );
};

export default ConcernForm
