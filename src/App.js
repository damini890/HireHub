import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobDetailPage from './pages/JobDetailPage';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
