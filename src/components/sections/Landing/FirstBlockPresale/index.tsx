// import { is_production, backendUrl } from '../../../../config/index';

import s from './FirstBlockPresale.module.scss';

import devil from '../../../../assets/img/sections/landing/first-block-presale/devil-nft.png';
import light from '../../../../assets/img/sections/landing/first-block-presale/lightning-nft.png';
import cosmo from '../../../../assets/img/sections/landing/first-block-presale/cosmo-nft.png';

const FirstBlockPresale: React.FC = () => {
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.left}>
          <div className={s.devil}>
            <img src={devil} alt="devil" />
          </div>
          <div className={s.light}>
            <img src={light} alt="light" />
          </div>
          <div className={s.cosmo}>
            <img src={cosmo} alt="cosmo" />
          </div>
        </div>
        <div className={s.right}>
          <div className={s.right_top}>
            <div className={`${s.title_left} anim`}>
              Deez <br /> Nuts <br /> <div>Presents</div>
            </div>
            <div className={`${s.title} anim`}>
              FLAPPY <br /> SACK <br /> <span>NFTs</span>
              <span className={s.white}>!</span>
            </div>
          </div>
          <div className={`${s.subtitle} anim`}>
            Join this ultra-exclusive NFT project featuring not only authentic art, but get HUGE
            perks along the way!
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBlockPresale;
