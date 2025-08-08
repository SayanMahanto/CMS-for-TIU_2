import React from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";

// Sample data (replace with props or fetched API data)
const Peoples = [
  {
    name: "John Doe",
    email: "john@example.com",
    gpa: "3.8",
    status: "Active",
    designation: "Assistant Professor",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    gpa: "3.9",
    status: "Inactive",
    designation: "Senior Lecturer",
  },
];

const statCards = [
  {
    label: "Total Faculty",
    value: "76",
    change: "+5%",
    note: "from last semester",
    color: "text-green-500",
  },
  {
    label: "Active Faculty",
    value: "70",
    change: "+3%",
    note: "from last month",
    color: "text-green-500",
  },
  {
    label: "New Joinees",
    value: "6",
    change: "+20%",
    note: "from last month",
    color: "text-green-500",
  },
  {
    label: "Tenured Faculty",
    value: "45",
    change: "+10%",
    note: "from last year",
    color: "text-green-500",
  },
];

// Reusable table component
const PeopleTable = ({ title }) => (
  <div className="bg-white rounded shadow overflow-auto mt-6">
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="font-semibold">{title}</h2>
      <input
        type="text"
        placeholder="Search Faculty..."
        className="border px-3 py-1 rounded"
      />
    </div>
    <table className="w-full text-left table-auto">
      <thead className="bg-gray-100 text-sm text-gray-700">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Designation</th>
          <th className="p-3">Email</th>
          <th className="p-3">Status</th>
          <th className="p-3">GPA</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {Peoples.map((s, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-3 font-medium">{s.name}</td>
            <td className="p-3">{s.designation}</td>
            <td className="p-3 text-sm text-gray-500">{s.email}</td>
            <td className="p-3">
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  s.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {s.status}
              </span>
            </td>
            <td className="p-3">{s.gpa}</td>
            <td className="p-3 flex space-x-3">
              <button className="text-blue-600 hover:scale-110 transition-transform duration-200">
                <FaEdit size={18} />
              </button>
              <button className="text-green-600 hover:scale-110 transition-transform duration-200">
                <FaSearch size={18} />
              </button>
              <button className="text-red-600 hover:scale-110 transition-transform duration-200">
                <FaTrash size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination */}
    <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
      <p>
        Showing 1 to {Peoples.length} of {Peoples.length} Faculty Members
      </p>
      <div className="space-x-1">
        <button className="px-2 py-1 border rounded">Previous</button>
        <button className="px-2 py-1 border rounded bg-blue-600 text-white">
          1
        </button>
        <button className="px-2 py-1 border rounded">2</button>
        <button className="px-2 py-1 border rounded">3</button>
        <button className="px-2 py-1 border rounded">Next</button>
      </div>
    </div>
  </div>
);

// Main component
export default function People() {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Faculty Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Faculty
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((card, i) => (
          <div key={i} className="p-4 bg-white rounded shadow">
            <p className="text-gray-500">{card.label}</p>
            <h2 className="text-xl font-semibold">{card.value}</h2>
            <p className={`text-sm ${card.color}`}>
              {card.change} <span className="text-gray-400">{card.note}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Tables */}
      <PeopleTable title="Teaching Faculty" />
      <PeopleTable title="Research Faculty" />
      <PeopleTable title="Visiting Professors" />
    </div>
  );
}
