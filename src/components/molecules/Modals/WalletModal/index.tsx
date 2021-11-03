import React from 'react';
import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';

import s from './WalletModal.module.scss';

import metamask from '../../../../assets/img/icons/metamask.svg';
import walletconnect from '../../../../assets/img/icons/walletconnect.svg';

interface IWalletModalProps {
  mintNft?: (wallet: 'MetaMask' | 'WalletConnect') => void;
}

const WalletModal: React.FC<IWalletModalProps> = ({ mintNft }) => {
  const { modals, closeModal } = useModals();

  const handleClose = () => {
    closeModal('wallet');
  };

  const handleMint = (wallet: 'MetaMask' | 'WalletConnect') => {
    if (mintNft) {
      mintNft(wallet);
    }
    handleClose();
  };

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes('wallet')} className={s.wrapper}>
      <div className={s.modal}>
        <div className={s.title}>Select a Wallet</div>
        <div className={s.subtitle}>Connect to a wallet</div>
        <div className={s.wallets}>
          <button type="button" onClick={() => handleMint('MetaMask')} className={s.wallet}>
            <div className={s.wallet_icon}>
              <img src={metamask} alt="metamask" />
            </div>
            <span>Metamask</span>
          </button>
          <button className={s.wallet} type="button" onClick={() => handleMint('WalletConnect')}>
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
