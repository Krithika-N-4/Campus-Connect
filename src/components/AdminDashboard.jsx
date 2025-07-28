import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { db, auth } from '../firebase/firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import AdminTable from '../components/AdminTable';


const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [concerns, setConcerns] = useState([]);
  const [activeTab, setActiveTab] = useState('complaints');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribeComplaints = onSnapshot(collection(db, 'complaints'), (snapshot) => {
      const complaintsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComplaints(complaintsData);
      setLoading(false);
    });

    const unsubscribeConcerns = onSnapshot(collection(db, 'concerns'), (snapshot) => {
      const concernsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConcerns(concernsData);
    });

    return () => {
      unsubscribeComplaints();
      unsubscribeConcerns();
    };
  }, []);

  const handleStatusChange = async (collectionName, id, status) => {
    const docRef = doc(db, collectionName, id);
    try {
      await updateDoc(docRef, { status });
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error', error));
  };

  const handleDelete = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

  return (
    <div className="h-full p-4 mx-auto max-w-7xl font-nunito">
       <header className="flex items-center justify-between p-4 mb-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 text-sm cursor-pointer font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </header>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Total Complaints</h3>
          <p className="mt-2 text-2xl font-bold text-indigo-600">{complaints.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900">Total Concerns</h3>
          <p className="mt-2 text-2xl font-bold text-indigo-600">{concerns.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px space-x-8 px-2" aria-label="Tabs">
            <button onClick={() => setActiveTab('complaints')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                activeTab === 'complaints' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Complaints
            </button>
            <button onClick={() => setActiveTab('concerns')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                activeTab === 'concerns' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Concerns
            </button>
          </nav>
        </div>
        <div className="p-6">
          {loading ? (
            <p>Loading...</p>
            ) : (
            <AdminTable
                data={activeTab === 'complaints' ? complaints : concerns}
                type={activeTab}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
            />
            )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;
