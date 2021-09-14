import { useState } from 'react';
import Button from '../../../../atoms/Button';

import s from './FAQ.module.scss';

interface IFAQItemProps {
  title: string;
  subtitle: string;
}

const FAQItem: React.FC<IFAQItemProps> = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={s.item}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={s.item_title}>{title}</div>
      <div className={`${s.item_subtitle} ${isOpen && s.active}`}>{subtitle}</div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.section_inner}>
        <div className={s.title}>QUESTIONS? WE GOT THE ANSWERS!</div>
        <Button transparent title="Contact us" />
        <div className={s.faqs}>
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
          <FAQItem
            title="What are Deez Nuts Sacks"
            subtitle="Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
