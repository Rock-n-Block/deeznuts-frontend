import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/atoms/Loader';

import Footer from './components/sections/Footer/index';
import Header from './components/sections/Header/index';
import { LandingPage } from './pages/index';
import { animate } from './utils/animate';

animate({ className: '.anim', animClassName: 'anim_active' });

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Router>
      <Route path="/">
        <div className="app">
          {isLoading && <Loader />}
          <Header />
          <LandingPage />
          <Footer />
        </div>
      </Route>
      <div className="app-modals" />
    </Router>
  );
};
