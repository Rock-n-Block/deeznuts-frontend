import Button from '../../atoms/Button';
import s from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Button title="Join Discord" className={s.button} />
    </footer>
  );
};

export default Footer;
