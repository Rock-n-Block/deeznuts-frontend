import { notify } from '../../../../../utils/notify';

import { useWeb3Context } from '../../../../../context/WalletConnect';
import WalletModal from '../../../../molecules/Modals/WalletModal/index';
import MintModal, { IMintModalProps } from '../../../../molecules/Modals/MintModal/index';
import { useModals } from '../../../../../context/Modal';

import s from './Mint.module.scss';

import nft1 from '../../../../../assets/img/sections/landing/mint/nft-1.png';
import nft2 from '../../../../../assets/img/sections/landing/mint/nft-2.png';
import nft3 from '../../../../../assets/img/sections/landing/mint/nft-3.png';
import nft4 from '../../../../../assets/img/sections/landing/mint/nft-4.png';
import { useCallback, useEffect, useState } from 'react';

const TIME_FOR_UPDATE = 20000;

const Mint: React.FC = () => {
  const { init, sendEth } = useWeb3Context();
  const { setModal } = useModals();

  const [mintModalProps, setMintModalProps] = useState({
    img: '',
    type: 'COMMON',
    txHash: '',
  } as IMintModalProps);

  const getInfoAboutTx = useCallback(
    async (txHash: string) => {
      const headers = await fetch(`https://deeznuts.rocknblock.io/api/v1/payments/${txHash}`);
      const data = await headers.json();

      if (data.status === 'SUCCESS') {
        setMintModalProps({
          type: data.rarity === 'common' ? 'COMMON' : 'LEGENDARY',
          img: data.image,
          txHash,
        });
        setModal('mintmodal');
      }

      notify(
        `Tx ${txHash.slice(0, 5)}...${txHash.slice(-5)}: ${data.status
          .replaceAll('_', ' ')
          .toLowerCase()}`,
        'info',
      );
    },
    [setModal],
  );

  const mintNft = async (wallet: 'MetaMask' | 'WalletConnect') => {
    const info = await init(wallet);

    if (!info) {
      notify('No Web3 Provider! Please install or download MetaMask', 'error');
    }

    if (info.code === 3) {
      notify(`${info.message.message} Connect your wallet!`, 'error');
    }

    if (info.code === 4) {
      notify(info.message.text, 'error');
    }

    if (info.code === 404) {
      notify(info.message.text, 'error');
    }

    if (info && !info.code) {
      try {
        const backendData = await fetch('https://deeznuts.rocknblock.io/api/v1/info/?format=json', {
          method: 'GET',
        });
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

            setInterval(() => {
              hashes.forEach((txHash: string) => {
                getInfoAboutTx(txHash);
              });
            }, TIME_FOR_UPDATE);
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

  return (
    <section className={s.block}>
      <WalletModal mintNft={mintNft} />
      <MintModal
        txHash={mintModalProps.txHash}
        img={mintModalProps.img}
        type={mintModalProps.type}
      />
      <div className={s.block_inner}>
        <div className={s.left}>
          <button type="button" onClick={() => setModal('wallet')} className={s.mint}>
            <div>MINT-A-SACK</div>
          </button>
          <div className={s.subtitle}>Will you hold the greatest ballsack of ALL-TIME?</div>
        </div>
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
        <div className={s.info}>
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

export default Mint;
