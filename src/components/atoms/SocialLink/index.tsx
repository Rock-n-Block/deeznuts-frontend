import React from 'react';

import twitter from '../../../assets/img/icons/twitter.svg';
import insta from '../../../assets/img/icons/insta.svg';
import discord from '../../../assets/img/icons/discord.svg';
import facebook from '../../../assets/img/icons/facebook.svg';
import telegram from '../../../assets/img/icons/telegram.svg';

import s from './SocialIcon.module.scss';

interface ISocialIcon {
  link: string;
  name: 'twitter' | 'insta' | 'discord' | 'facebook' | 'telegram';
  classname?: string;
}

const icons = {
  twitter,
  insta,
  discord,
  facebook,
  telegram,
};

const SocialIcon: React.FC<ISocialIcon> = ({ link, name, classname }) => {
  return (
    <a className={`${s.icon} ${classname}`} target="_blank" rel="noreferrer" href={link}>
      <img src={icons[name]} alt={name} />
    </a>
  );
};

export default SocialIcon;
