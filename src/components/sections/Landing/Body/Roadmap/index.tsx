import s from './Roadmap.module.scss';

import deeznut from '../../../../../assets/img/sections/landing/stages/deeznut.png';

const Roadmap: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.nuts_mob}>
        <img src={deeznut} alt="deeznut" />
      </div>
      <div className={s.subtitle}>Coming October 2021</div>
      <div className={s.title}>Roadmap</div>
      <div className={s.section_body}>
        <div className={s.nuts}>
          <img src={deeznut} alt="deeznut" />
        </div>
        <div className={s.stages}>
          <div className={s.stage}>STAGE 1 - Presale and mint 10,000</div>
          <div className={s.stage}>
            STAGE 2 - Press articles promoting the success of the launch of Deeznuts NFTs
          </div>
          <div className={s.stage}>
            STAGE 3 - Giveaway $10,000 each week to one lucky NFT holder
          </div>
          <div className={s.stage}>
            STAGE 4 - Invest 50% of the profits into Deeznuts Coin project (The brains behind the
            game “Flappy Sack”)
          </div>
          <div className={s.stage}>
            STAGE 5 - Flappy Sack game launches with Deeznuts NFTs available for use.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
