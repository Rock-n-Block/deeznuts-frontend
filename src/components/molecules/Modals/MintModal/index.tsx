import { useState } from 'react';

import { useModals } from '../../../../context/Modal';
import ModalWrapper from '../Modal';
import { useWeb3Context } from '../../../../context/WalletConnect';

import s from './MintModal.module.scss';
import { useTranslation } from 'react-i18next';

export interface IMintModalProps {
  type: 'COMMON' | 'LEGENDARY';
  img: string;
  txHash: string;
  id: number;
}

const MintModal: React.FC<IMintModalProps> = ({ txHash, id }) => {
  const [amount, setAmount] = useState(1);
  const { modals, closeModal } = useModals();
  const { mint, user } = useWeb3Context();
  const { t } = useTranslation();

  const handleClose = () => {
    closeModal(txHash);
    const txsFromLs = localStorage.getItem('txHashes');
    const txs: Array<string> = txsFromLs ? JSON.parse(txsFromLs) : [];

    localStorage.setItem('txHashes', JSON.stringify(txs.filter((tx) => tx !== txHash)));
  };

  if (id === undefined) {
    return <></>;
  }

  const handleAmount = (num: number, type: 'plus' | 'minus') => {
    if (num === 1) {
      setAmount(type === 'plus' ? num + 1 : num);
    } else {
      setAmount(type === 'plus' ? num + 1 : num - 1);
    }
  };

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes(txHash)}>
      <div className={s.modal}>
        <h2>{t('mint.title')}</h2>
        <input className={s.text} />
        <div className={s.buttons}>
          <div className={s.amountWrapper}>
            <button
              type="button"
              className={s.changeAmount}
              onClick={() => handleAmount(amount, 'minus')}
            >
              -
            </button>
            <div className={s.amount}>
              <span>{amount < 10 ? `0${amount}` : amount}</span>
            </div>
            <button
              type="button"
              className={s.changeAmount}
              onClick={() => handleAmount(amount, 'plus')}
            >
              +
            </button>
            <button
              type="button"
              className={s.mint}
              onClick={() => mint(amount, user.address || '')}
            >
              {t('button.mint')}
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MintModal;
