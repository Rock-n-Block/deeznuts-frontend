import React from 'react';

import SocialIcon from '../../atoms/SocialLink/index';

import s from './Header.module.scss';

import logo from '../../../assets/img/sections/landing/header/logo60x60.png';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
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
      </div>
    </header>
  );
};

export default Header;
