import React from 'react';
import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';

import s from './WalletModal.module.scss';

import metamask from '../../../../assets/img/icons/metamask.svg';
import walletconnect from '../../../../assets/img/icons/walletconnect.svg';

interface IWalletModalProps {
  init: (wallet: 'MetaMask' | 'WalletConnect') => void;
}

const WalletModal: React.FC<IWalletModalProps> = ({ init }) => {
  const { modals, closeModal } = useModals();

  const handleClose = () => {
    closeModal('wallet');
  };

  const handleInit = (wallet: 'MetaMask' | 'WalletConnect') => {
    init(wallet);
    handleClose();
  };

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes('wallet')}>
      <div className={s.modal}>
        <div className={s.title}>Select a Wallet</div>
        <div className={s.subtitle}>Connect to a wallet</div>
        <div className={s.wallets}>
          <button type="button" onClick={() => handleInit('MetaMask')} className={s.wallet}>
            <div className={s.wallet_icon}>
              <img src={metamask} alt="metamask" />
            </div>
            <span>Metamask</span>
          </button>
          <button className={s.wallet} type="button" onClick={() => handleInit('WalletConnect')}>
            <div className={s.wallet_icon}>
              <img src={walletconnect} alt="walletconnect" />
            </div>
            <span>WalletConnect</span>
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default WalletModal;
