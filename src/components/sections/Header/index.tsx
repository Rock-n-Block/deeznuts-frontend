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
          <div className={s.link}>Roadmap</div>
          <div className={s.link}>Team</div>
          <div className={s.link}>Faq</div>
          <SocialIcon name="twitter" link="/" />
          <SocialIcon name="insta" link="/" />
          <SocialIcon name="discord" link="/" />
          <SocialIcon name="facebook" link="/" />
          <SocialIcon name="telegram" link="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
