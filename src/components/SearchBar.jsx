import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'; 

const SearchBar = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Search for:', jobTitle, 'in', location);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center shadow-md bg-white p-2 rounded-full w-full max-w-3xl">
        {/* Job Search Input */}
        <div className="relative flex-grow">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="pl-12 pr-4 py-3 w-full rounded-l-full border-none focus:outline-none bg-gray-100 text-sm"
          />
        </div>

        {/* Location Input */}
        <div className="relative flex-grow">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="City, state, zip code, or 'remote'"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-12 pr-4 py-3 w-full border-none focus:outline-none bg-gray-100 text-sm"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-full ml-2 hover:bg-blue-700 text-sm transition-all"
        >
          Find jobs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
