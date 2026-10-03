import { Plus, MoreVertical, Edit, Trash2 } from "lucide-react";

export default function AdminProjects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Projects</h1>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Plus size={16} /> Add New Project
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          <div className="flex gap-2">
            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 bg-white">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>
        </div>
        
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium">Project Name</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium">Developer</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">One Canal Road</td>
              <td className="px-6 py-4">Gulberg</td>
              <td className="px-6 py-4">Zameen Developments</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                  Published
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">Prism Signature Villas</td>
              <td className="px-6 py-4">DHA Phase 9 Prism</td>
              <td className="px-6 py-4">DHA Lahore</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                  Published
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">Lahore Sky</td>
              <td className="px-6 py-4">Ferozepur Road</td>
              <td className="px-6 py-4">OZ Developers</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  Draft
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
