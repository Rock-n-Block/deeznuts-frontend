import { useTranslation } from 'react-i18next';
import bunny from '../../../../../assets/img/sections/landing/body/bunny2.png';
import s from './Community.module.scss';

const Community: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.title}>{t('community.title')}</div>
        <div className={s.box}>
          <div className={s.left}>
            <img src={bunny} alt="bunny" className={s.image} />
          </div>
          <div className={s.right}>
            <div className={s.text}>
              {t('community.text')}
              <div className={s.button2}>
                {' '}
                <a
                  href="https://discord.com/invite/r5XrJgnH8Y"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t('button.join')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
