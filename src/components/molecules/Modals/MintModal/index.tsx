import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';

import s from './MintModal.module.scss';
import { useState } from 'react';

export interface IMintModalProps {
  type: 'COMMON' | 'LEGENDARY';
  img: string;
  txHash: string;
  id: number;
}

const MintModal: React.FC<IMintModalProps> = ({ txHash, id }) => {
  const [amount, setAmount] = useState(1);
  const { modals, closeModal } = useModals();

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
    setAmount(type === 'plus' ? num + 1 : num - 1);
  };

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes(txHash)}>
      <div className={s.modal}>
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
          </div>
          <button type="button" className={s.mint}>
            MINT
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MintModal;
