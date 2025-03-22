import React, { useState } from "react";

const ListCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology", userId: 101, status: "active" },
    { id: 2, name: "Health", userId: 102, status: "inactive" },
    { id: 3, name: "Education", userId: 103, status: "active" },
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Update category with ID: ${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Category List</h2>
      <a href="/admin/add/category" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">add category</a>
      <table className="w-full border-collapse border border-gray-300 mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">User ID</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="text-center">
              <td className="border border-gray-300 p-2">{category.id}</td>
              <td className="border border-gray-300 p-2">{category.name}</td>
              <td className="border border-gray-300 p-2">{category.userId}</td>
              <td
                className={`border border-gray-300 p-2 font-semibold ${
                  category.status === "active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {category.status}
              </td>
              <td className="border border-gray-300 p-2 space-x-2">
                <a href="/admin/edit/category" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edite</a>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategory;
