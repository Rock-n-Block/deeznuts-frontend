import s from './Roadmap.module.scss';

import deeznut from '../../../../../assets/img/sections/landing/stages/deeznut.png';

const Roadmap: React.FC = () => {
  return (
    <section className={s.section} id="roadmap">
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
          <div className={s.stage}>
            Stage 1 (SEPTEMBER 2021) - Presale and Mint 1,000 Deez Nuts NFTs
          </div>
          <div className={s.stage}>
            Stage 2 (SEPTEMBER 2021) - Public Sale and Mint 9,000 Deez Nuts NFTs
          </div>
          <div className={s.stage}>
            Stage 3 (SOLD OUT) - Press articles promoting the success of the launch of Deez Nuts
            NFTs
          </div>
          <div className={s.stage}>
            Stage 4 (Q4 2021) - “FLAPPY SACK” game app launches with Deez Nuts NFTs available for
            use with play to earn features with A-list celebrity marketing.
          </div>
          <div className={s.stage}>
            Stage 5 (MAY 2022) - 20 LEGENDARY NFT holders will join the Deez Nuts OG’s team on an
            ALL INCLUSIVE 7 night vacation in Bali meeting A-list celebrities and Deez Nuts
            influencers valued up to $5000 per person.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
