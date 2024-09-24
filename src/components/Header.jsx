import React from 'react';
import logo from '../images/logo.png'; 

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="HireHub Logo" className="h-16 mr-8 mix-blend-multiply"/>
        
        <nav className="space-x-6">
          <a href="/" className="text-sm font-medium text-gray-600">Home</a>
          <a href="/" className="text-sm font-medium text-gray-600">Career Resources</a>
          <a href="/" className="text-sm font-medium text-gray-600">Salary guide</a>
        </nav>
      </div>
      <div>
        <a href="/signin" className="text-sm font-medium text-gray-600 mr-4">Sign in</a>
        <a href="/post-job" className="text-sm font-medium text-blue-500">Employers/Post Job</a>
      </div>
    </header>
  );
};

export default Header;
