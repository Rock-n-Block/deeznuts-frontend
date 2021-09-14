import React from 'react';

import { LandingPage } from './pages/index';
import Header from './components/sections/Header/index';
import Footer from './components/sections/Footer/index';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};
