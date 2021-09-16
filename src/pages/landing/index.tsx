import { ToastContainer } from 'react-toastify';

import FirstBlock from '../../components/sections/Landing/FirstBlock/index';
import LandingBody from '../../components/sections/Landing/Body/index';

const Landing: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <FirstBlock />
      <LandingBody />
    </>
  );
};

export default Landing;
