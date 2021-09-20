import Button from '../../../../atoms/Button/index';

import s from './Whitepaper.module.scss';

const Whitepaper: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.section_inner}>
        <div className={s.title}>CHECK OUT THE WHITEPAPER</div>
        <Button title="Read whitepaper" />
      </div>
    </section>
  );
};

export default Whitepaper;
