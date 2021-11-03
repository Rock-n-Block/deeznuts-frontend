import { useState } from 'react';

import s from './FAQ.module.scss';

import cn from 'classnames';

interface IFAQItemProps {
  title: string;
  subtitle: string;
}

const FAQItem: React.FC<IFAQItemProps> = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(s.item, { [s.itemActive]: isOpen })}
      tabIndex={0}
      onKeyDown={() => {}}
      role="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cn(s.item_title, { [s.item_titleActive]: isOpen })}>{title}</div>
      <div className={cn(s.item_subtitle, { [s.active]: isOpen })}>{subtitle}</div>
    </div>
  );
};

const FaqData = [
  {
    id: 1,
    title: '– What are the creation fees for the Token contract?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 2,
    title: '– Can I use my Token contract with other contracts?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 3,
    title: '– How To Add custom ERC20 Tokens in MEW wallet',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 4,
    title: '– Can I use the same token in the preSALE and publicSALE contracts?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 5,
    title: '– How to verify my token contract on Etherscan?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 6,
    title: '– What are the creation fees for the Token contract?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 7,
    title: '– Can I use my Token contract with other contracts?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 8,
    title: '– How To Add custom ERC20 Tokens in MEW wallet',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 9,
    title: '– Can I use the same token in the preSALE and publicSALE contracts?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  {
    id: 10,
    title: '– How to verify my token contract on Etherscan?',
    subtitle:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased) Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className={s.section} id="faq">
      <div className={s.section_inner}>
        <div className={s.title}>FAQ</div>
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
