import { useCallback, useEffect, useState } from 'react';
import { is_presale, backendUrl } from '../../../../../config/index';

import { useWeb3Context } from '../../../../../context/WalletConnect';
import { useModals } from '../../../../../context/Modal';
import { notify } from '../../../../../utils/notify';

import s from './Mint.module.scss';

import nft1 from '../../../../../assets/img/sections/landing/mint/nft-1.png';
import nft2 from '../../../../../assets/img/sections/landing/mint/nft-2.png';
import nft3 from '../../../../../assets/img/sections/landing/mint/nft-3.png';
import nft4 from '../../../../../assets/img/sections/landing/mint/nft-4.png';

import WalletModal from '../../../../molecules/Modals/WalletModal/index';
import MintModal, { IMintModalProps } from '../../../../molecules/Modals/MintModal/index';
// import { is_production, backendUrl } from '../../../../config/index';

// import devil from '../../../../assets/img/sections/landing/first-block-presale/devil-nft.png';
// import light from '../../../../assets/img/sections/landing/first-block-presale/lightning-nft.png';
// import cosmo from '../../../../assets/img/sections/landing/first-block-presale/cosmo-nft.png';

const TIME_FOR_UPDATE = 20000;

const Mint: React.FC = () => {
  const [lastTimerId, setLastTimerId] = useState<Array<NodeJS.Timeout>>([]);

  const { init, sendEth } = useWeb3Context();
  const { setModal } = useModals();

  const [modalsData, setModalsData] = useState<Array<IMintModalProps>>([]);

  const getInfoAboutTx = useCallback(
    async (txHash: string) => {
      const headers = await fetch(`${backendUrl}payments/${txHash}/`);
      const data = await headers.json();

      if (data.status === 'SUCCESS') {
        const hashesFromLs = localStorage.getItem('txHashes');
        const hashes = hashesFromLs ? await JSON.parse(hashesFromLs) : [];

        if (hashes.includes(txHash)) {
          setModalsData((prevState) => [
            ...prevState.filter((modal) => modal.txHash !== txHash),
            {
              type: data.rarity === 'common' ? 'COMMON' : 'LEGENDARY',
              img: data.image,
              txHash,
              id: data.id,
            },
          ]);

          setModal(txHash);
        }
      }
    },
    [setModal],
  );

  const mintNft = async (wallet: 'MetaMask' | 'WalletConnect') => {
    // if (!Object.values(timeBeforeEnd).every((el) => el === 0) && is_production) {
    //   notify("The presale hasn't started yet", 'error');
    //   return;
    // }
    const info = await init(wallet);

    if (!info) {
      notify('No Web3 Provider! Please install or download MetaMask', 'error');
      return;
    }

    if (info.code === 3) {
      notify(`${info.message.message} Connect your wallet!`, 'error');
      return;
    }

    if ([404, 4].includes(info.code)) {
      notify(info.message.text, 'error');
      return;
    }

    if (info && !info.code) {
      try {
        const backendData = await fetch(`${backendUrl}info/?format=json`);
        const data = await backendData.json();

        if (data.minted >= data.total_mint_amount) {
          notify('All nfts are minted!', 'error');
        } else if (data.address) {
          notify('Please wait for your transaction to be approved!');

          const txRes = await sendEth({
            from: info.address,
            to: data.address,
            value: data.amount,
          });

          if (txRes.status) {
            const hashesFromLS = localStorage.getItem('txHashes');
            const hashes = hashesFromLS ? JSON.parse(hashesFromLS) : [];
            hashes.push(txRes.transactionHash);

            localStorage.setItem('txHashes', JSON.stringify(hashes));

            notify('The transaction has been sent!', 'success');
            notify(
              'Please stay on the site, your token will be generated within a couple of minutes!',
              'success',
            );

            const timerId = setInterval(() => {
              hashes.forEach((txHash: string) => {
                getInfoAboutTx(txHash);
              });
            }, TIME_FOR_UPDATE);

            // current timer id
            setLastTimerId((prev) => [...prev, timerId]);
          }
        }
      } catch (error: any) {
        notify(error.message, 'error');
      }
    }
  };

  useEffect(() => {
    const hashesFromLS = localStorage.getItem('txHashes');
    const hashes = hashesFromLS ? JSON.parse(hashesFromLS) : [];
    if (hashes.length > 0) {
      hashes.forEach((txHash: string) => {
        getInfoAboutTx(txHash);
      });

      setInterval(() => {
        hashes.forEach((txHash: string) => {
          getInfoAboutTx(txHash);
        });
      }, TIME_FOR_UPDATE);
    }
  }, [getInfoAboutTx]);

  useEffect(() => {
    if (lastTimerId.length >= 2) {
      const prevId = lastTimerId[lastTimerId.length - 2];
      clearInterval(prevId);
    }
  }, [lastTimerId]);

  return (
    <section className={s.block}>
      <WalletModal mintNft={mintNft} />
      {modalsData.map((data) => (
        <MintModal
          key={data.txHash}
          txHash={data.txHash}
          img={data.img}
          type={data.type}
          id={data.id}
        />
      ))}
      <div className={s.block_inner}>
        {!is_presale && (
          <div className={s.left}>
            <button type="button" onClick={() => setModal('wallet')} className={s.mint}>
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
      </div>
    </section>
  );
};

export default Mint;
