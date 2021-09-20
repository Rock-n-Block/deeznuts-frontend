import s from './FirstBlock.module.scss';

import wings from '../../../../assets/img/sections/landing/first-block/wings.png';

const FirstBlock: React.FC = () => {
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.left}>
          <img src={wings} alt="wings" />
        </div>
        <div className={s.right}>
          <div className={s.title}>DEEZNUTS NFTs</div>
          <div className={s.subtitle}>
            Join this ultra-exclusive NFT project featuring not only authentic art, but get HUGE
            perks along the way!
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBlock;
