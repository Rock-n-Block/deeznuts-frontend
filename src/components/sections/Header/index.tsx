import React from 'react';

import s from './Header.module.scss';

import logo from '../../../assets/img/sections/landing/header/logo60x60.png';
import Button from '../../atoms/Button';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header_inner}>
        <div className={s.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.nav}>
          <a href="#project" className={s.link}>
            Project
          </a>
          <a href="#roadmap" className={s.link}>
            Roadmap
          </a>
          <a href="#team" className={s.link}>
            Team
          </a>
          <a href="#faq" className={s.link}>
            Faq
          </a>
        </div>
        <Button title="Connect wallet" className={s.button} />
      </div>
    </header>
  );
};

export default Header;
