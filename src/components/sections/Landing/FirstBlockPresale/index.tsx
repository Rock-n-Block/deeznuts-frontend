import { useCallback, useEffect, useState } from 'react';

import { useWeb3Context } from '../../../../context/WalletConnect';
import { useModals } from '../../../../context/Modal';
import { notify } from '../../../../utils/notify';
import WalletModal from '../../../molecules/Modals/WalletModal/index';
import MintModal, { IMintModalProps } from '../../../molecules/Modals/MintModal/index';

import s from './FirstBlockPresale.module.scss';

import devil from '../../../../assets/img/sections/landing/first-block-presale/devil-nft.png';
// import light from '../../../../assets/img/sections/landing/first-block-presale/lightning-nft.png';
// import cosmo from '../../../../assets/img/sections/landing/first-block-presale/cosmo-nft.png';

function timeToDate(date: string) {
  let secondsToDate = Math.round((+new Date(date) - +new Date(Date.now())) / 1000);

  if (secondsToDate < 0) return { days: 0, hours: 0, mins: 0, sec: 0 };

  const days = Math.floor(secondsToDate / 3600 / 24);
  secondsToDate -= days * 24 * 3600;

  const hours = Math.floor(secondsToDate / 3600);
  secondsToDate -= hours * 3600;

  const mins = Math.floor((secondsToDate / 3600) * 60);
  secondsToDate -= mins * 60;

  const sec = secondsToDate;

  return { days, hours, mins, sec };
}

const PRESALE_DATE_END = '2021-09-24T21:00:00';
const TIME_FOR_UPDATE = 20000;

const FirstBlockPresale: React.FC = () => {
  const [timeBeforeEnd, setTimeBeforeEnd] = useState(timeToDate(PRESALE_DATE_END));

  useEffect(() => {
    const timerId = setInterval(() => {
      const time = timeToDate(PRESALE_DATE_END);
      setTimeBeforeEnd(time);
      if (Object.values(time).every((el) => el === 0)) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const { init, sendEth } = useWeb3Context();
  const { setModal } = useModals();

  const [modalsData, setModalsData] = useState<Array<IMintModalProps>>([]);

  const getInfoAboutTx = useCallback(
    async (txHash: string) => {
      const headers = await fetch(`https://deeznuts.rocknblock.io/api/v1/payments/${txHash}`);
      const data = await headers.json();

      if (data.status === 'SUCCESS') {
        const hashesFromLs = localStorage.getItem('txHashes');
        const hashes = hashesFromLs ? JSON.parse(hashesFromLs) : [];

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

      if (data.status !== 'SUCCESS') {
        notify(
          `Tx ${txHash.slice(0, 5)}...${txHash.slice(-5)}: ${data.status
            .replaceAll('_', ' ')
            .toLowerCase()}`,
          'info',
        );
      }
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
        <div className={s.left}>
          <div className={s.devil}>
            <img src={devil} alt="devil" />
          </div>
        </div>
        <div className={s.right}>
          <div className={s.title}>
            Presale <br /> Launch <br /> <span>starts in</span>
            <span className={s.white}>…</span>
          </div>
          <div className={s.date}>
            <div className={s.date_item}>
              <div className={s.date_item__number}>{timeBeforeEnd.days}</div>
              <div className={s.date_item__subtitle}>Days</div>
            </div>
            <div className={s.date_item}>
              <div className={s.date_item__number}>{timeBeforeEnd.hours}</div>
              <div className={s.date_item__subtitle}>Hours</div>
            </div>
            <div className={s.date_item}>
              <div className={s.date_item__number}>{timeBeforeEnd.mins}</div>
              <div className={s.date_item__subtitle}>Min</div>
            </div>
            <div className={s.date_item}>
              <div className={s.date_item__number}>{timeBeforeEnd.sec}</div>
              <div className={s.date_item__subtitle}>Sec</div>
            </div>
          </div>
          <button type="button" onClick={() => setModal('wallet')} className={s.mint}>
            mint presale
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstBlockPresale;
