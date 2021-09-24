import { ToastContainer } from 'react-toastify';

import FirstBlockPresale from '../../components/sections/Landing/FirstBlockPresale/index';
import LandingBody from '../../components/sections/Landing/Body/index';

const Landing: React.FC = () => {
  return (
    <>
      <ToastContainer limit={5} />
      <FirstBlockPresale />
      <LandingBody />
    </>
  );
};

export default Landing;
