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
    title: 'What are Deeznuts Sacks?',
    subtitle:
      'Deez Nuts NFTs are a collection of 10,000 uniquely generated pixelated ballsack NFTs created from 20 unique themes & 5 dynamic traits.',
  },
  {
    id: 2,
    title: 'How will Deez Nuts Sacks be launched?',
    subtitle: 'Join or discord group for all the updates and Presale details.',
  },
  {
    id: 3,
    title: 'How much does each Deez Nuts Sack cost?',
    subtitle: 'Each Deez Nuts NFT will be minted at 0.069 ETH on minting day!',
  },
  {
    id: 4,
    title: 'What are Deez Nuts Sacks made of?',
    subtitle:
      'Deez Nuts Sacks are randomly generated based on 10,000 different combinations consisting of Background, Ball Sack Skins, Accessories, Sack hats and Appendages. ',
  },
  {
    id: 5,
    title: 'What is the Smart Contract Address for Deez Nuts Sacks?',
    subtitle: '0x7c5fe4bc15bc88d297b133174173f1cc95925b09',
  },
  {
    id: 6,
    title: 'Can I Buy on Mobile/MetaMask?',
    subtitle:
      'Yes! You will be able to mint Deez Nuts Sacks directly on our website connecting your MetaMask wallet.',
  },
  {
    id: 7,
    title: 'How many Deez Nuts Sacks are reserved for giveaways?',
    subtitle: 'There are 100 Deez Nuts Sacks reserved for giveaways.',
  },
  {
    id: 8,
    title: 'How can i contact the Deez Nuts Sacks team?',
    subtitle: 'We are super active on Discord, Telegram and Twitter!',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className={s.section} id="faq">
      <div className={s.section_inner}>
        <div className={`${s.title} anim`}>QUESTIONS? WE GOT THE ANSWERS!</div>
        <Button href="https://discord.com/invite/deeznutsnfts" transparent title="Contact us" />
        <div className={`${s.faqs} anim`}>
          {FaqData.map((data) => (
            <FAQItem key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
