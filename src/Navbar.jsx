import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-lg shadow-lg p-4 rounded-full flex justify-between items-center mx-auto mt-2 max-w-7xl transition-transform duration-500 hover:scale-105">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-bold text-gray-800">Organically</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-gray-900 flex items-center transition duration-300 ease-in-out transform hover:scale-110"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12m-9.5 0a9.5 9.5 0 1 0 19 0 9.5 9.5 0 1 0-19 0"></path>
            </svg>
            Dashboard
          </a>
          <a
            href="/farmers"
            className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Farmers
          </a>
          <a
            href="/retailers"
            className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Retailers
          </a>
          <a
            href="/consumers"
            className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Consumers
          </a>
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-gray-700 hover:text-gray-900 hidden md:flex items-center transition duration-300 ease-in-out transform hover:scale-110"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12m-9.5 0a9.5 9.5 0 1 0 19 0 9.5 9.5 0 1 0-19 0"></path>
          </svg>
          LOG OUT
        </a>
        <div className="relative">
          <button className="focus:outline-none">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10 transition duration-300 ease-in-out transform hover:scale-110"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
