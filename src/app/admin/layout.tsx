import Link from "next/link";
import { LayoutDashboard, Building2, Map, Users, Settings, Mail, LogOut, Home } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f3f4f6]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold tracking-widest uppercase text-gray-900">SALAAR CMS</span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Building2 size={18} /> Projects
          </Link>
          <Link href="/admin/enquiries" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Mail size={18} /> Enquiries
          </Link>
          <Link href="/admin/locations" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Map size={18} /> Locations
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Users size={18} /> Users & Roles
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Settings size={18} /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Home size={18} /> Back to Website
          </Link>
          <button className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50">
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-sm font-medium text-gray-800">Admin Portal</h2>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
              AD
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8 text-black">
          {children}
        </div>
      </main>
    </div>
  );
}
