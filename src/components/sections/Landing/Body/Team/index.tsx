import { useTranslation } from 'react-i18next';
import ellipse from '../../../../../assets/img/sections/landing/body/ellipse.png';
import ellipse2 from '../../../../../assets/img/sections/landing/body/ellipse2.png';
import ellipse3 from '../../../../../assets/img/sections/landing/body/ellipse3.png';
import s from './Team.module.scss';

const Team: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={s.section} id="team">
      <div className={s.title}>{t('navigation.team')}</div>
      <div className={s.content}>
        <div className={s.teammates}>
          <div className={s.teammate}>
            <img src={ellipse} alt="avatar" className={s.avatar} />
            <span className={s.name}>Riichi</span>
            <span className={s.description}>{t('team.team1.text')}</span>
          </div>
        </div>
        <div className={s.teammates}>
          <div className={s.teammate}>
            <img src={ellipse2} alt="avatar" className={s.avatar} />
            <span className={s.name}>Anson</span>
            <span className={s.description}>{t('team.team2.text')}</span>
          </div>
        </div>
        <div className={s.teammates}>
          <div className={s.teammate}>
            <img src={ellipse3} alt="avatar" className={s.avatar} />
            <span className={s.name}>ZEN</span>
            <span className={s.description}>{t('team.team3.text')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
