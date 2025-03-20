import React, { useState } from 'react';

const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'jane@example.com', role: 'Editor' },
    { id: 3, name: 'Michael Brown', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'michael@example.com', role: 'User' },
    { id: 4, name: 'Sarah Williams', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'sarah@example.com', role: 'Admin' },
    { id: 5, name: 'David Lee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'david@example.com', role: 'Editor' },
    { id: 6, name: 'Emma Green', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'emma@example.com', role: 'User' },
    { id: 7, name: 'James White', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'james@example.com', role: 'Admin' },
    { id: 8, name: 'Olivia Martin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'olivia@example.com', role: 'Editor' },
    { id: 9, name: 'Isabella Davis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'isabella@example.com', role: 'User' },
    { id: 10, name: 'Ethan Clark', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s', email: 'ethan@example.com', role: 'Admin' },
  ];

  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(startIndex, startIndex + usersPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <a href="/admin/user/create" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          Add New User
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border text-center">{user.id}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border text-center">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border text-center">{user.role}</td>
                <td className="px-4 py-2 border text-center">
                  <a href='/admin/user/edit' className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2">
                    Edit
                  </a>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4 text-lg">{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
