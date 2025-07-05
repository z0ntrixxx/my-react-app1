import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/not-found';

  return (
    <div className="layout">
      {!isNotFoundPage && <Header />}
      <main>{children}</main>
      {!isNotFoundPage && <Footer />}
    </div>
  );
};

export default Layout;