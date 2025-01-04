import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      {/* Zeige den Header auf allen Seiten außer der Home-Seite */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
