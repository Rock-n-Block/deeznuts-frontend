import React from 'react';

import SocialIcon from '../../atoms/SocialLink/index';
import WalletModal from '../../molecules/Modals/WalletModal/index';
import { useModals } from '../../../context/Modal';
import { useWeb3Context } from '../../../context/WalletConnect';

import s from './Header.module.scss';

import logo from '../../../assets/img/sections/landing/header/logo60x60.png';

const Header: React.FC = () => {
  const { setModal } = useModals();
  const { init, user } = useWeb3Context();

  return (
    <header className={s.header}>
      <WalletModal init={(wallet: 'MetaMask' | 'WalletConnect') => init(wallet)} />
      <div className={s.header_inner}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.nav}>
          <a href="#roadmap" className={s.link}>
            Roadmap
          </a>
          <a href="#about" className={s.link}>
            About
          </a>
          <a href="#faq" className={s.link}>
            Faq
          </a>
          <SocialIcon name="twitter" link="https://twitter.com/deeznuts" />
          <SocialIcon name="insta" link="https://www.instagram.com/deeznuts" />
          <SocialIcon name="discord" link="https://discord.com/invite/deeznutsnfts" />
          <SocialIcon name="telegram" link="https://t.me/Deeznutscoin" />
        </div>
        <button type="button" onClick={() => setModal('wallet')} className={s.connect}>
          {user.adress ? `${user.adress.slice(0, 7)}...${user.adress.slice(-5)}` : 'Connect Wallet'}
        </button>
      </div>
    </header>
  );
};

export default Header;
