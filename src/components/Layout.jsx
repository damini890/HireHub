import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion , AnimatePresence} from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E9E9E9]">
      <Header />
      <AnimatePresence>
        <motion.main 
          className="flex-grow" 
          initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 50 }}
           transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
