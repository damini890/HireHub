import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      {/* Add other homepage sections like 'Trending' or links as needed */}
      <div className="text-center mt-10">
        <a href="/" className="text-blue-500">Post your resume</a> - It only takes a few seconds
        <p className="mt-2">
          <a href="/" className="text-blue-500">Post a job on HireHub</a>
        </p>
        <p className="mt-2 text-sm text-gray-500">What's trending on HireHub</p>
      </div>
    </div>
  );
};

export default HomePage;
