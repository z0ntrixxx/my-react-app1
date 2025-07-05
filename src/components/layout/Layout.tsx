import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
/*import './src/assets/styles/Layout.css';*/

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="body__container">
      <header className="layout-header">
        <Header />
      </header>

      <main className="container" id="main">
        {children}
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;