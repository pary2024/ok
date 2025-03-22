import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("active");
  const [userId, setUserId] = useState("");
  const [isLight, setIsLight] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim() === "" || userId.trim() === "") return;
    console.log("Category added:", { category, status, userId });
    setCategory("");
    setStatus("active");
    setUserId("");
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Category
        </button>
      </form>
      

      <a href="/admin/list/category" className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mt-[10px]">Back</a>
    </div>
  );
};

export default AddCategory;
