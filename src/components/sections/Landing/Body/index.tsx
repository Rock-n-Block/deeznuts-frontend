import Project from './Project/index';
import ScaryMeter from './ScaryMeter/index';
import Nfts from './Nfts/index';
import FAQ from './FAQ/index';
import Community from './Community/index';
import Team from './Team/index';
import Roadmap from './Roadmap/index';

import s from './Body.module.scss';

const LandingBody: React.FC = () => {
  return (
    <section className={s.block}>
      <Project />
      <ScaryMeter />
      <Nfts />
      <Roadmap />
      <Team />
      <FAQ />
      <Community />
    </section>
  );
};

export default LandingBody;
