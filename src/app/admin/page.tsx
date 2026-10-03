import { Building, Users, Activity, FileText } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">12</h3>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
              <Building size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-medium">+2 this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Enquiries</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">48</h3>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-md">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-medium">+15 this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Published Articles</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">24</h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-md">
              <FileText size={20} />
            </div>
          </div>
          <p className="text-xs text-gray-500 font-medium">Up to date</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">System Status</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">Online</h3>
            </div>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-md">
              <Activity size={20} />
            </div>
          </div>
          <p className="text-xs text-emerald-600 font-medium">All services operational</p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Enquiries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Interest</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Ahmed Khan</td>
                <td className="px-6 py-4">One Canal Road</td>
                <td className="px-6 py-4">Oct 3, 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                    New
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Sarah Malik</td>
                <td className="px-6 py-4">DHA 9 Prism</td>
                <td className="px-6 py-4">Oct 2, 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    Contacted
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Ali Raza</td>
                <td className="px-6 py-4">General Inquiry</td>
                <td className="px-6 py-4">Oct 1, 2026</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                    Resolved
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
