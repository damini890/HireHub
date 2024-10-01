import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import dummyJobs from './../Dummyjobs.js';

const HomePage = () => {
    const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (jobTitle, location) => {
    const filteredJobs = dummyJobs.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(jobTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return titleMatch && locationMatch;
    });
    setSearchResults(filteredJobs);
  };
  return (
    <div className="bg-[#E9E9E9]">
      <SearchBar  onSearch={handleSearch}/>
      <div className="max-w-7xl mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mx-auto">
          {searchResults.length > 0 ? (
            searchResults.map(job => (
              <div key={job.id} className="rounded-lg p-4 shadow-md border border-black">
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-500">{job.location}</p>
                <p className="mt-2">{job.description}</p>
                <button
          className="text-black px-6 py-2 rounded-md ml-2 mt-4 hover:bg-white transition-all border border-black font-bold text-md"
        >
          View job details
        </button>
              </div>
            ))
          ) : (
            <p className="text-black-300">No jobs found. Please adjust your search.</p>
          )}
        </div>
      <div className="text-center mt-10">
        <a 
          href="/" 
          className="mt-2 text-center text-[#2B2B2B]"
        >
          Post your resume
        </a>
        <span className="text-[#B3B4BD]"> - It only takes a few seconds</span>
        
        <p className="mt-2">
          <a 
            href="/" 
            className="mt-2 text-center text-[#2B2B2B]"
          >
            Post a job on HireHub
          </a>
        </p>
        
        <p className="mt-2 text-sm text-[#B3B4BD]">
          What's trending on HireHub
        </p>
      </div>
    </div>
  );
};

export default HomePage;
