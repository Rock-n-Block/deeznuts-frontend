import { useState } from 'react';
import cn from 'classnames';
import s from './ScaryMeter.module.scss';
import Button from '../../../../atoms/Button';
import bunny from '../../../../../assets/img/sections/landing/body/bunny1.png';

const levels = [
  {
    key: 1,
    title: 'level 1',
    descr:
      '10% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 2,
    title: 'level 2',
    descr:
      '20% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 20% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 3,
    title: 'level 3',
    descr:
      '30% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 30% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 30% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 4,
    title: 'level 4',
    descr:
      '40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 40% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  {
    key: 5,
    title: 'level 5',
    descr:
      '50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects) 50% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
];

const ScaryMeter: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(levels[0]);

  const handleLevel = (level: any) => {
    setActiveLevel(level);
  };

  return (
    <section className={s.section}>
      <div className={s.title}>Scary Meter</div>
      <div className={s.content}>
        <div className={s.left}>
          <div className={s.levels}>
            {levels.map((level: any) => (
              <Button
                title={level.title}
                className={cn(s.level, { [s.active]: level.key === activeLevel.key })}
                onClick={() => handleLevel(level)}
                insideShadow
              />
            ))}
          </div>
          <div className={s.description}>{activeLevel.descr}</div>
        </div>
        <div className={s.right}>
          <div className={s.head}>
            <p className={s.nft}>NFT #7</p>
            <div className={s.price}>$5</div>
          </div>
          <img src={bunny} alt="bunny" className={s.image} />
        </div>
      </div>
    </section>
  );
};

export default ScaryMeter;
