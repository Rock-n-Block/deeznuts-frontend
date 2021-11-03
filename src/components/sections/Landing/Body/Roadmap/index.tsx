import s from './Roadmap.module.scss';
import cn from 'classnames';

const stages = [
  { title: '10%', descr: 'To be revealed' },
  {
    title: '20%',
    descr:
      '20% of profit will go to community wallet on buying hidden gems (non-blue chip projects)',
  },
  { title: '30%', descr: 'To be revealed' },
  {
    title: '40%',
    descr:
      'Daily Crypto raffle to all members (every day will be different for which crypto be drawn from the raffle (If OG members are chosen, the reward will be increased)',
  },
  { title: '50%', descr: 'To be revealed' },
  {
    title: '60%',
    descr:
      'Weekly contest for a specific game (poker, meme contest, Trivia game, tabletop games). After each month a 1of 1 Metabunny will be given to the person in 1st place as well as the most participated member.',
  },
  { title: '70%', descr: 'To be revealed' },
  {
    title: '80%',
    descr: 'Confirm on Roadmap 2.0 which will include another NFT launch ',
  },
  { title: '90%', descr: 'To be revealed' },
  {
    title: '100%',
    descr:
      'The development of the Meta Bunny Metaverse will kick-off and all the token holders will receive a skin of their Meta Bunny after the game launches.',
  },
];

const Roadmap: React.FC = () => {
  return (
    <section className={s.section} id="roadmap">
      <div className={s.title}>Roadmap</div>
      <span className={s.subtitle}>100 NFT pcs airdrop to first 10% buyers</span>
      <div className={s.section_body}>
        <div className={s.stages}>
          {stages.map((stage: any, index: number) => (
            <div className={cn(s.stage, { [s.oddStage]: index % 2 })}>
              <div className={s.percentage}>{stage.title}</div>
              <div className={s.description}>{stage.descr}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
