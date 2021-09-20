import s from './RarityNSpecs.module.scss';

import variable1 from '../../../../../assets/img/sections/landing/variablies/variable_1.png';
import variable2 from '../../../../../assets/img/sections/landing/variablies/variable_2.png';
import variable3 from '../../../../../assets/img/sections/landing/variablies/variable_3.png';
import variable4 from '../../../../../assets/img/sections/landing/variablies/variable_4.png';
import variable5 from '../../../../../assets/img/sections/landing/variablies/variable_5.png';

const RarityNSpec: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.left}>
        <div className={s.title}>Rarity & Specs</div>
        <p className={s.subtitle}>
          Deez Nuts Sacks are a collection of{' '}
          <span>10,000 uniquely generated flappy sack NFTs</span> created from{' '}
          <span>10 unique themes & 5 dynamic traits.</span>
        </p>
        <p className={s.subtitle}>
          Some traits are ultra-rare, occuring only once. All Deez Nuts Sacks are custom-generated,
          registered on the Ethereum blockchain, and hosted on IFPS - meaning they can never be
          altered.
        </p>
        <p className={s.subtitle}>
          Each Deeznuts NFTs can be utilised in our upcoming game Flappy Sack to be released Q4
          2021.
        </p>
      </div>
      <div className={s.right}>
        <div className={s.right_title}>
          <span>5</span> sacktacular variables
        </div>
        <div className={s.right_variables}>
          <div className={s.right_variable}>
            <div className={s.right_variable__icon}>
              <img src={variable1} alt="variable1" />
            </div>
            <div className={s.right_variable__text}>scrotum skins</div>
          </div>
          <div className={s.right_variable}>
            <div className={s.right_variable__icon}>
              <img src={variable2} alt="variable2" />
            </div>
            <div className={s.right_variable__text}>accessories</div>
          </div>
          <div className={s.right_variable}>
            <div className={s.right_variable__icon}>
              <img src={variable3} alt="variable3" />
            </div>
            <div className={s.right_variable__text}>sack hats</div>
          </div>
          <div className={s.right_variable}>
            <div className={s.right_variable__icon}>
              <img src={variable4} alt="variable4" />
            </div>
            <div className={s.right_variable__text}>wings</div>
          </div>
          <div className={s.right_variable}>
            <div className={s.right_variable__icon}>
              <img src={variable5} alt="variable5" />
            </div>
            <div className={s.right_variable__text}>backgrounds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RarityNSpec;
