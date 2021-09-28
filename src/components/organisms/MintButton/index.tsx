import { useCallback, useEffect, useState } from 'react';
import { backendUrl } from '../../../config/index';

import { useWeb3Context, IUser } from '../../../context/WalletConnect';
import { useModals } from '../../../context/Modal';
import { notify } from '../../../utils/notify';
import Selector from '../../atoms/Selector/index';

import s from './Mint.module.scss';

import MintModal, { IMintModalProps } from '../../molecules/Modals/MintModal/index';

const TIME_FOR_UPDATE = 20000;

const Mint: React.FC = () => {
  const [lastTimerId, setLastTimerId] = useState<Array<NodeJS.Timeout>>([]);

  const { sendEth, user } = useWeb3Context();
  const { setModal } = useModals();

  const [modalsData, setModalsData] = useState<Array<IMintModalProps>>([]);

  const getInfoAboutTx = useCallback(
    async (userAdress: string) => {
      const headers = await fetch(`${backendUrl}payments/${userAdress}/`);
      const data = await headers.json();

      const succesTokens = data.filter((token: any) => token.status === 'SUCCESS');

      setModalsData(succesTokens);
      succesTokens.forEach((token: any) => setModal(token.id.toString()));
    },
    [setModal],
  );

  const mintNft = async (userData: IUser, amount: number | string = 1) => {
    if (!userData.adress) {
      notify('Connect your wallet!', 'error');
      return;
    }

    // TODO: fix it
    if ([404, 4].includes(userData.code || 1)) {
      notify(userData.message?.message || 'Something went wrong', 'error');
      return;
    }

    if (userData.adress && !userData.code) {
      try {
        const backendData = await fetch(`${backendUrl}info/?format=json`);
        const data = await backendData.json();

        if (data.minted >= data.total_mint_amount) {
          notify('All nfts are minted!', 'error');
        } else if (data.address) {
          notify('Please wait for your transaction to be approved!');

          const txRes = await sendEth({
            from: userData.adress,
            to: data.address,
            value: (data.amount * +amount).toString(),
          });

          if (txRes.status) {
            notify('The transaction has been sent!', 'success');
            notify(
              'Please stay on the site, your token will be generated within a couple of minutes!',
              'success',
            );

            const timerId = setInterval(() => {
              getInfoAboutTx(user.adress || '');
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
    if (user.adress) {
      getInfoAboutTx(user.adress);

      const id = setInterval(() => {
        getInfoAboutTx(user.adress || '');
      }, TIME_FOR_UPDATE);
      setLastTimerId((prev) => [...prev, id]);
    }
  }, [getInfoAboutTx, user.adress]);

  useEffect(() => {
    if (lastTimerId.length >= 2) {
      const prevId = lastTimerId[lastTimerId.length - 2];
      clearInterval(prevId);
    }
  }, [lastTimerId]);

  const [selectorValue, setSelectorValue] = useState<string | number>(1);

  return (
    <section className={s.block}>
      {modalsData.slice(0, 1).map((data) => (
        <MintModal
          key={data.id}
          image={data.image}
          rarity={data.rarity}
          id={data.id}
          setModalsData={setModalsData}
        />
      ))}
      <div className={s.block_inner}>
        <button type="button" onClick={() => mintNft(user, selectorValue)} className={s.mint}>
          <div>MINT-A-SACK</div>
        </button>
        <Selector
          initValue={selectorValue}
          values={[1, 5, 10, 20]}
          onChange={(val) => setSelectorValue(val)}
        />
      </div>
    </section>
  );
};

export default Mint;
