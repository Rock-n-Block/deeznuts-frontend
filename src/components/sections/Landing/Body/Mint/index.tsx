import { notify } from '../../../../../utils/notify';

import { useWeb3Context } from '../../../../../context/WalletConnect';

import s from './Mint.module.scss';

import nftExample from '../../../../../assets/img/sections/landing/mint/nft-example.png';

const Mint: React.FC = () => {
  const { init, sendEth } = useWeb3Context();

  const mintNft = async () => {
    const info = await init();
    console.log({ info });

    if (info.code === 3) {
      notify(`${info.message.message} Connect your wallet!`);
    }

    if (info.code === 4) {
      notify(info.message.text);
    }

    if (info && !info.code) {
      try {
        const backendData = await fetch('https://deeznuts.rocknblock.io/api/v1/info/?format=json');
        const data = await backendData.json();
        if (data.minted >= data.total_mint_amount) {
          notify('All nfts are minted!');
        } else if (data.address) {
          notify('Sending your transaction!');

          const txRes = await sendEth({
            from: info.address,
            to: data.address,
            value: data.amount,
          });
          if (txRes.status) {
            notify('The transaction has been sent!');
          }
        }
      } catch (error: any) {
        notify(error.message);
      }
    }
  };

  return (
    <section className={s.block}>
      <div className={s.block_inner}>
        <div className={s.left}>
          <button type="button" onClick={() => mintNft()} className={s.mint}>
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
