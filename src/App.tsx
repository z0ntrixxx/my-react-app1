import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Preloader from './components/ui/Preloader';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
};

const MainLayout: React.FC = () => {
  return (
    <>
      <Preloader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;