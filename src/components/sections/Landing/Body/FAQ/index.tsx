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

const FaqData = [
  {
    id: 1,
    title: 'What are Deez Nuts Sacks',
    subtitle:
      'Deez Nuts are 10,000 cute NFTs of different DeezNuts wearing ???. Jerseys of 10 different basketball teams are randomized. Each Chibi Dino is completely unique.',
  },
  {
    id: 2,
    title: 'How will Deez Nuts Sacks be launched?',
    subtitle:
      'Join our Discord or follow us on Twitter for updates. All DeezNuts purchases will be made at XXX',
  },
  {
    id: 3,
    title: 'How much does each Deez Nuts Sack cost?',
    subtitle: 'Each DeezNuts will be minted at 0.069 ETH on minting day!',
  },
  {
    id: 4,
    title: 'What are Deez Nuts Sacks made of?',
    subtitle:
      'DeezNuts are programatically generated based on 200 different assets: BG, sack, wings, hat, accessory.',
  },
  {
    id: 5,
    title: 'What is the Smart Contract Address for Deez Nuts Sacks?',
    subtitle: 'XXXXXx',
  },
  {
    id: 6,
    title: 'Can i Buy on Mobile / Use Metamask?',
    subtitle: 'Yes! You will be able to mint Chibi Dinos directly on our website XXX',
  },
  {
    id: 7,
    title: 'How many Deez Nuts Sacks are reserved for giveaways?',
    subtitle: 'XXXX',
  },
  {
    id: 8,
    title: 'How can i contact the Deez Nuts Sacks team?',
    subtitle: 'We are all super active on Discord and Twitter!',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.section_inner}>
        <div className={s.title}>QUESTIONS? WE GOT THE ANSWERS!</div>
        <Button transparent title="Contact us" />
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
