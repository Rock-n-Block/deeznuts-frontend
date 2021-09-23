import SocialIcon from '../../atoms/SocialLink/index';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.icons}>
        <SocialIcon classname={s.orange} name="twitter" link="https://twitter.com/deeznuts" />
        <SocialIcon classname={s.orange} name="insta" link="https://www.instagram.com/deeznuts" />
        <SocialIcon
          classname={s.orange}
          name="discord"
          link="https://discord.com/invite/deeznutsnfts"
        />
        <SocialIcon classname={s.orange} name="telegram" link="https://t.me/Deeznutscoin" />
      </div>
      <div className={s.subtitle}>© Copyright</div>
    </footer>
  );
};

export default Footer;
