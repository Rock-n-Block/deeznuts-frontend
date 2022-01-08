import cn from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import s from './Roadmap.module.scss';

const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const stages = useMemo(
    () => [
      { title: '10%', descr: t('roadmap.percents.10') },
      {
        title: '20%',
        descr: t('roadmap.percents.20'),
      },
      { title: '30%', descr: t('roadmap.percents.30') },
      {
        title: '40%',
        descr: t('roadmap.percents.40'),
      },
      {
        title: '50%',
        descr: t('roadmap.percents.50'),
      },
      {
        title: '60%',
        descr: t('roadmap.percents.60'),
      },
      { title: '70%', descr: t('roadmap.percents.70') },
      {
        title: '80%',
        descr: t('roadmap.percents.80'),
      },
      { title: '90%', descr: t('roadmap.percents.90') },
      {
        title: '100%',
        descr: t('roadmap.percents.100'),
      },
    ],
    [t],
  );

  return (
    <section className={s.section} id="roadmap">
      <div className={s.title}>{t('navigation.roadmap')}</div>
      <div className={s.section_body}>
        <div className={s.stages}>
          {stages.map((stage: any, index: number) => (
            <div className={cn(s.stage, { [s.oddStage]: index % 2 })}>
              <div className={s.percentage}>{stage.title}</div>
              <div className={s.description}>{stage.descr}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
