import { useMemo, useState } from 'react';
import cn from 'classnames';

import arrow from '../../../../../assets/img/icons/arrow.svg';
import arrowWhite from '../../../../../assets/img/icons/arrowWhite.svg';

import s from './Intro.module.scss';
import { useTranslation } from 'react-i18next';

interface IINTROItemProps {
  title: string;
  subtitle: string;
  subpic: string;
}

const INTROItem: React.FC<IINTROItemProps> = ({ title, subtitle, subpic}) => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(s.item, { [s.itemActive]: isOpen })}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cn(s.item_title, { [s.item_titleActive]: isOpen })}>
          {title}
          <img src={isOpen ? arrowWhite : arrow} alt="arrow" className={s.arrow} />
      </div>
      <div className={cn(s.item_subtitle, { [s.active]: isOpen })}>
        <span> {subtitle} </span>
        <img src={subpic} alt="cap" />
      </div>
     </div>
  );
};

const INTRO: React.FC = () => {
  const { t } = useTranslation();

  const INTROData = useMemo(
    () => [
      {
        id: 1,
        title: t('Bunnyverse'),
        subtitle: t('intro.preview.text1.1'),
        subpic: t('/static/media/cap3.3ceec026.jpg'),
      },
      {
        id: 2,
        title: t('Gamefi'),
        subtitle: t('intro.preview.text2'),
        subpic: t('/static/media/cap4.32614628.jpg'),
      },
      {
        id: 3,
        title: t('Staking'),
        subtitle: t('intro.preview.text3.1'),
        subpic: t('/static/media/cap1.d7c6434a.jpg'),
      }
    ],
    [t],
  );

  return (
    <section className={s.section} id="intro">
      <div className={s.section_inner}>
        <div className={s.title}>{t('navigation.project')}</div>
        <div className={s.info}>
          <div className={s.text}>{t('intro.text')}</div>
        </div>
        <div className={s.intro}>
          {INTROData.map((data) => (
            <INTROItem key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default INTRO;
