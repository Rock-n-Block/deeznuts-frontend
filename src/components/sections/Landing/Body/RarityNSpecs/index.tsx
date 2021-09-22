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
          Deez Nuts NFTs are a collection of <span>10,000 uniquely generated</span> pixelated ball
          sack NFTs created from 20 unique themes & 5 dynamic traits.
        </p>
        <p className={s.subtitle}>
          Some traits are <span>LEGENDARY</span>, occuring only once. All Deez Nuts Sacks are
          custom-generated, registered on the Ethereum blockchain, and hosted on IPFS - meaning they
          can never be altered.
        </p>
        <p className={s.subtitle}>
          Each Deez Nuts NFTs can be utilised in our upcoming game “Flappy Sack” to be released Q4
          2021 and those who receive a LEGENDARY DEEZ NUTS NFT will join the OG’s on an ALL{' '}
          <span>INCLUSIVE Bucketlist Vacation to Bali</span> in 2022 and celebrate with A-List
          celebrities and Influencers valued up to $5000 per person.
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
            <div className={s.right_variable__text}>appendages</div>
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
