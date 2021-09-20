import SocialIcon from '../../atoms/SocialLink/index';

import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.icons}>
        <SocialIcon name="twitter" link="/" classname={s.orange} />
        <SocialIcon name="insta" link="/" classname={s.orange} />
        <SocialIcon name="discord" link="/" classname={s.orange} />
        <SocialIcon name="facebook" link="/" classname={s.orange} />
        <SocialIcon name="telegram" link="/" classname={s.orange} />
      </div>
      <div className={s.subtitle}>© Copyright</div>
    </footer>
  );
};

export default Footer;
