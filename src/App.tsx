import { LandingPage } from './pages/index';
import Header from './components/sections/Header/index';
import Footer from './components/sections/Footer/index';
import { animate } from './utils/animate';

animate({ className: '.anim', animClassName: 'anim_active' });

export const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <Header />
        <LandingPage />
        <Footer />
      </div>
      <div className="app-modals" />
    </>
  );
};
