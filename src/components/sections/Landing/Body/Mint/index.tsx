import s from './Mint.module.scss';
import nftExample from '../../../../../assets/img/sections/landing/mint/nft-example.png';

const Mint: React.FC = () => {
  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.left}>
          <button type="button" className={s.mint}>
            MINT-A-SACK
          </button>
          <div className={s.subtitle}>Will you hold the greatest ballsack of ALL-TIME?</div>
        </div>
        <div className={s.right}>
          <div className={s.nft}>
            <img src={nftExample} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nftExample} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nftExample} alt="nftExample" />
          </div>
          <div className={s.nft}>
            <img src={nftExample} alt="nftExample" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
