import Button from '../../../../atoms/Button';

import s from './FAQ.module.scss';

const FAQ: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.section_inner}>
        <div className={s.title}>QUESTIONS? WE GOT THE ANSWERS!</div>
        <Button transparent title="Contact us" />
      </div>
    </section>
  );
};

export default FAQ;
