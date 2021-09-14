import Mint from './Mint/index';
import RarityNSpec from './RarityNSpecs/index';
import Whitepaper from './Whitepaper/index';
import FAQ from './FAQ/index';
import Roadmap from './Roadmap/index';

import s from './Body.module.scss';

const LandingBody: React.FC = () => {
  return (
    <section className={s.block}>
      <Mint />
      <RarityNSpec />
      <Roadmap />
      <Whitepaper />
      <FAQ />
    </section>
  );
};

export default LandingBody;
