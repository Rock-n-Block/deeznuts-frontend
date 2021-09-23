import { is_presale } from '../../../../../config/index';

import s from './Mint.module.scss';

import nft1 from '../../../../../assets/img/sections/landing/mint/nft-1.png';
import nft2 from '../../../../../assets/img/sections/landing/mint/nft-2.png';
import nft3 from '../../../../../assets/img/sections/landing/mint/nft-3.png';
import nft4 from '../../../../../assets/img/sections/landing/mint/nft-4.png';

const Mint: React.FC = () => {
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        {!is_presale && (
          <div className={s.left}>
            <button type="button" onClick={() => {}} className={s.mint}>
              <div>MINT-A-SACK</div>
            </button>
            <div className={s.subtitle}>Will you hold the greatest ballsack of ALL-TIME?</div>
          </div>
        )}
        <div className={s.right} style={{ marginLeft: !is_presale ? '0' : '' }}>
          <div className={s.nft}>
            <img src={nft1} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nft2} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nft3} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nft4} alt="nftExample" />
          </div>
        </div>
        {!is_presale && (
          <div className={s.info}>
            <div className={s.title}>DEEZNUTS NFTs</div>
            <div className={s.subtitle}>
              Join this ultra-exclusive NFT project featuring not only authentic art, but get HUGE
              perks along the way!
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Mint;
