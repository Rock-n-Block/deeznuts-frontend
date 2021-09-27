import s from './Mint.module.scss';

import nft1 from '../../../../../assets/img/sections/landing/mint/nft-1.png';
import nft2 from '../../../../../assets/img/sections/landing/mint/nft-2.png';
import nft3 from '../../../../../assets/img/sections/landing/mint/nft-3.png';
import nft4 from '../../../../../assets/img/sections/landing/mint/nft-4.png';

const Mint: React.FC = () => {
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.right}>
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
      </div>
    </section>
  );
};

export default Mint;
