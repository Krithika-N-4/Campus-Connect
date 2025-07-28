import React from 'react';
import { Trash2 } from 'lucide-react';

const AdminTable = ({ data, type, onStatusChange, onDelete }) => {
  return (
    <div className="overflow-x-auto font-nunito">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Category</th>
            {!['concerns'].includes(type) && (
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Location</th>
            )}
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Description</th>
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Submitted At</th>
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-5 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.category}</td>
              {!['concerns'].includes(type) && (
                <td className="px-6 py-4">{item.location}</td>
              )}
              <td className="px-6 py-4 text-md text-gray-500">{item.description}</td>
              <td className="px-6 py-4">
                {item.submittedAt?.toDate().toLocaleString()}
              </td>
              <td className="px-6 py-4">
                <select
                  value={item.status}
                  onChange={(e) => onStatusChange(type, item.id, e.target.value)}
                  className={`p-2 rounded-md text-sm ${
                    item.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : item.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onDelete(type, item.id)}
                  className="text-red-600 hover:text-red-800 px-4 cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
