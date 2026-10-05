"use client";

import { useState } from "react";
import { Building, Users, FileText, CheckCircle, Clock, AlertCircle, Phone, Search } from "lucide-react";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  date: string;
  status: "New" | "Contacted" | "Resolved";
  notes?: string;
};

const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: "enq-1",
    name: "Ahmed Khan",
    email: "ahmed.khan@gmail.com",
    phone: "+92 300 8472910",
    interest: "One Canal Road - 3 Bed Suite",
    date: "Oct 5, 2026",
    status: "New",
  },
  {
    id: "enq-2",
    name: "Sarah Malik",
    email: "sarah.malik@outlook.com",
    phone: "+971 50 1234567",
    interest: "DHA 9 Prism Commercial Plot",
    date: "Oct 4, 2026",
    status: "Contacted",
  },
  {
    id: "enq-3",
    name: "Dr. Tariq Mahmood",
    email: "tariq.mahmood@shaukatkhanum.org.pk",
    phone: "+92 321 9928374",
    interest: "Gulberg Penthouse For Sale",
    date: "Oct 3, 2026",
    status: "New",
  },
  {
    id: "enq-4",
    name: "Ali Raza",
    email: "ali.raza@technologies.com",
    phone: "+92 333 4455667",
    interest: "General Advisory - Overseas Investment",
    date: "Oct 2, 2026",
    status: "Resolved",
  },
  {
    id: "enq-5",
    name: "Fatima Noor",
    email: "fatima.noor@yahoo.com",
    phone: "+44 7700 900077",
    interest: "Bahria Town Golf View Villa",
    date: "Oct 1, 2026",
    status: "Contacted",
  },
];

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(INITIAL_ENQUIRIES);
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleStatusChange = (id: string, newStatus: "New" | "Contacted" | "Resolved") => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filteredEnquiries = enquiries.filter((item) => {
    if (statusFilter !== "All" && item.status !== statusFilter) return false;
    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      const match =
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.includes(q) ||
        item.interest.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  const newCount = enquiries.filter((e) => e.status === "New").length;
  const contactedCount = enquiries.filter((e) => e.status === "Contacted").length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500">Real-time enquiries & portfolio metrics</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Lead Tracking Active
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">6 Active</h3>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
              <Building size={20} />
            </div>
          </div>
          <p className="text-xs text-blue-600 font-medium">All LDA / DHA Approved</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">New Leads</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{newCount}</h3>
            </div>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-md">
              <AlertCircle size={20} />
            </div>
          </div>
          <p className="text-xs text-amber-600 font-medium">Requires follow-up</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">In Contact</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{contactedCount}</h3>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-md">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-medium">Advisors engaged</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Market Briefs</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">6 Live</h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-md">
              <FileText size={20} />
            </div>
          </div>
          <p className="text-xs text-purple-600 font-medium">Insights hub active</p>
        </div>
      </div>

      {/* Enquiries Management Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Lead Pipeline & Enquiries</h3>
            <p className="text-xs text-gray-500">Manage client enquiries received via web portal and WhatsApp</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 md:w-64">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search leads..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-1 bg-gray-100 p-1 rounded-md text-xs">
              {(["All", "New", "Contacted", "Resolved"] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1 rounded font-medium transition-colors ${
                    statusFilter === st
                      ? "bg-white text-gray-900 shadow-xs"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 font-semibold">Client</th>
                <th className="px-6 py-3 font-semibold">Interest & Unit</th>
                <th className="px-6 py-3 font-semibold">Direct Contact</th>
                <th className="px-6 py-3 font-semibold">Received</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400 text-xs">
                    No enquiries match the current criteria.
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{enq.name}</div>
                      <div className="text-xs text-gray-400">{enq.email}</div>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-800">
                      {enq.interest}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${enq.phone}`}
                          className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                        >
                          <Phone size={12} /> {enq.phone}
                        </a>
                        <a
                          href={`https://wa.me/${enq.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 font-medium text-[11px]"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                      {enq.date}
                    </td>
                    <td className="px-6 py-4">
                      {enq.status === "New" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-amber-100 text-amber-800">
                          <AlertCircle size={12} /> New
                        </span>
                      )}
                      {enq.status === "Contacted" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800">
                          <Clock size={12} /> Contacted
                        </span>
                      )}
                      {enq.status === "Resolved" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800">
                          <CheckCircle size={12} /> Resolved
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <select
                        value={enq.status}
                        onChange={(e) =>
                          handleStatusChange(enq.id, e.target.value as "New" | "Contacted" | "Resolved")
                        }
                        className="text-xs border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-gray-900"
                      >
                        <option value="New">Mark New</option>
                        <option value="Contacted">Mark Contacted</option>
                        <option value="Resolved">Mark Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
