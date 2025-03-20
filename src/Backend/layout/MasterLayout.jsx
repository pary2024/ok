import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  ChartBarIcon,
  SunIcon,
  MoonIcon,
  ArrowLeftIcon, // Using ArrowLeftIcon as a logout icon
} from "@heroicons/react/24/outline";

const MasterLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const navigate = useNavigate();

  // Ensure Tailwind dark mode is properly applied
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const handleLogout = () => {
    // Clear user session data (like token or user info)
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 text-white dark:bg-gray-900 h-full transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Dashboard</div>
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6">
            {[
              { name: "Dashboard", path: "/", icon: HomeIcon },
              { name: "Team", path: "/team", icon: UsersIcon },
              { name: "Projects", path: "/projects", icon: FolderIcon },
              { name: "Calendar", path: "/calendar", icon: CalendarIcon },
              { name: "Reports", path: "/reports", icon: ChartBarIcon },
              { name: "Authentication", path: "/auth", icon: ChartBarIcon },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white transition-all duration-300"
                activeClassName="bg-gray-800 text-white"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </NavLink>
            ))}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 mt-6 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white transition-all duration-300"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-3" /> {/* Using ArrowLeftIcon */}
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <header className="bg-white shadow dark:bg-gray-800 px-6 py-3 flex justify-between items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="relative p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600">
              <BellIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>

            {/* User Avatar */}
            <img
              className="h-10 w-10 rounded-full border-2 border-gray-500 dark:border-gray-300"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User"
            />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-6 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MasterLayout;
