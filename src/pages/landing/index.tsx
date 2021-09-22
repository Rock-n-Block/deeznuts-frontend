import { ToastContainer } from 'react-toastify';

import FirstBlock from '../../components/sections/Landing/FirstBlock/index';
import FirstBlockPresale from '../../components/sections/Landing/FirstBlockPresale/index';
import LandingBody from '../../components/sections/Landing/Body/index';
import { is_presale } from '../../config/index';

const Landing: React.FC = () => {
  return (
    <>
      <ToastContainer limit={5} />
      {is_presale ? <FirstBlockPresale /> : <FirstBlock />}
      <LandingBody />
    </>
  );
};

export default Landing;
