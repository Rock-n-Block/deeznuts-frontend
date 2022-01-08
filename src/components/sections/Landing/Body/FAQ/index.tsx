import { useMemo, useState } from 'react';
import cn from 'classnames';

import arrow from '../../../../../assets/img/icons/arrow.svg';
import arrowWhite from '../../../../../assets/img/icons/arrowWhite.svg';

import s from './FAQ.module.scss';
import { useTranslation } from 'react-i18next';

interface IFAQItemProps {
  title: string;
  subtitle: string;
}

const FAQItem: React.FC<IFAQItemProps> = ({ title, subtitle }) => {
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
      <div className={cn(s.item_subtitle, { [s.active]: isOpen })}>{subtitle}</div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  const FaqData = useMemo(
    () => [
      {
        id: 1,
        title: t('faq.faq1.title'),
        subtitle: t('faq.faq1.text'),
      },
      {
        id: 2,
        title: t('faq.faq2.title'),
        subtitle: t('faq.faq2.text'),
      },
      {
        id: 3,
        title: t('faq.faq3.title'),
        subtitle: t('faq.faq3.text'),
      },
      {
        id: 4,
        title: t('faq.faq4.title'),
        subtitle: t('faq.faq4.text'),
      },
      {
        id: 5,
        title: t('faq.faq5.title'),
        subtitle: t('faq.faq5.text'),
      },
      {
        id: 6,
        title: t('faq.faq6.title'),
        subtitle: t('faq.faq6.text'),
      },
      {
        id: 7,
        title: t('faq.faq7.title'),
        subtitle: t('faq.faq7.text'),
      },
    ],
    [t],
  );

  return (
    <section className={s.section} id="faq">
      <div className={s.section_inner}>
        <div className={s.title}>FAQ</div>
        <div className={s.faqs}>
          {FaqData.map((data) => (
            <FAQItem key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
