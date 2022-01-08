import { FC } from 'react';
import cx from 'classnames';

import Button from '../../../atoms/Button';
import { useWeb3Context } from '../../../../context/WalletConnect';

import s from './styles.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
  connectWallet: () => void;
  toggleMenu: () => void;
};

const MobileMenu: FC<Props> = ({ className, connectWallet, toggleMenu }) => {
  const { user } = useWeb3Context();
  const { t } = useTranslation();

  const handleScroll = (link: string) => {
    toggleMenu();
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cx(s.container, className)}>
      <div className={s.nav}>
        <div
          onClick={() => handleScroll('project')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.project')}
        </div>
        <div
          onClick={() => handleScroll('team')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.team')}
        </div>
        <div
          onClick={() => handleScroll('roadmap')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.roadmap')}
        </div>
        <div
          onClick={() => handleScroll('Faq')}
          tabIndex={0}
          onKeyDown={() => {}}
          role="button"
          className={s.link}
        >
          {t('navigation.faq')}
        </div>
      </div>
      <div className={s.footer}>
        <Button
          title={
            user.address
              ? `${user.address.slice(0, 7)}...${user.address.slice(-1)}`
              : t('button.connect')
          }
          className={s.button}
          onClick={connectWallet}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
