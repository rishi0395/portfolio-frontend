import React, { useState } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
