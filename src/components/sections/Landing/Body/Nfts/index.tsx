import bunny from '../../../../../assets/img/sections/landing/body/bunny1.png';
import cn from 'classnames';

import s from './Nfts.module.scss';
import Button from '../../../../atoms/Button';
import { useState } from 'react';

const pages = ['08', '09', '10', '11', '12', '13', '14', '15'];

const Nfts: React.FC = () => {
  const [activePage, setActivePage] = useState(pages[0]);

  const handlePage = (page: string) => {
    setActivePage(page);
  };
  return (
    <section className={s.section}>
      <div className={s.nfts}>
        {[1, 2, 3].map((item: number) => (
          <div className={s.nft}>
            <div className={s.head}>
              <p className={s.number}>NFT #{item}</p>
            </div>
            <img src={bunny} alt="bunny" className={s.image} />
          </div>
        ))}
      </div>
      <div className={s.pages}>
        {pages.map((page: string) => (
          <Button
            title={page}
            className={cn(s.page, { [s.active]: page === activePage })}
            onClick={() => handlePage(page)}
            insideShadow
          />
        ))}
      </div>
    </section>
  );
};

export default Nfts;
