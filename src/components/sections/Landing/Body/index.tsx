import Community from './Community/index';
// import Intro from './Intro/index';
import FAQ from './FAQ/index';
// import Nfts from './Nfts/index';
// import Project from './Project/index';
import Roadmap from './Roadmap/index';
import ScaryMeter from './ScaryMeter/index';
import Team from './Team/index';

import s from './Body.module.scss';

const LandingBody: React.FC = () => {
  return (
    <section className={s.block}>
     {/*  <Project /> */}
     {/* <Intro /> */}
      <ScaryMeter />
      {/* <Nfts /> */}
      <Roadmap />
      <Team />
      <Community />
      <FAQ />
    </section>
  );
};

export default LandingBody;
