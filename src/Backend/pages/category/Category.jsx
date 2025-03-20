import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const departments = [
  { name: "Sales", head: "John Doe" },
  { name: "Marketing", head: "Jane Smith" },
  { name: "Engineering", head: "Mike Johnson" },
];

const departmentHeads = [
  { name: "John Doe", department: "Sales" },
  { name: "Jane Smith", department: "Marketing" },
  { name: "Mike Johnson", department: "Engineering" },
];

const Category = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>
      
      {/* Departments Section */}
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {departments.map((dept, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold">{dept.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Head: {dept.head}
            </p>
            <div className="flex space-x-2 mt-2">
              <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
              <FaTrash className="text-red-500 cursor-pointer hover:text-red-700" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Department Heads Section */}
      <h2 className="text-xl font-semibold mb-2">Types of Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {departmentHeads.map((head, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all"
          >
            <h3 className="text-lg font-semibold">{head.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Department: {head.department}
            </p>
            <div className="flex space-x-2 mt-2">
              <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
              <FaTrash className="text-red-500 cursor-pointer hover:text-red-700" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating Add Buttons */}
      <button className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
        <FaPlus />
      </button>
      <button className="fixed bottom-10 right-24 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition">
        <FaPlus />
      </button>
    </div>
  );
};

export default Category;
