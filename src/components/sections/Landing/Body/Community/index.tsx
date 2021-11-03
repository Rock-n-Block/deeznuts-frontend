import s from './Community.module.scss';
import bunny from '../../../../../assets/img/sections/landing/body/bunny2.png';

const Community: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.left}>
          <img src={bunny} alt="bunny" className={s.image} />
        </div>
        <div className={s.right}>
          <div className={s.title}>Community</div>
          <div className={s.text}>
            We are a group of people that love games and fun, so we want the community to be like
            that as well! There will be contests held regularly including but not limited to Trivia,
            Poker nights, Tabletop games, Puzzle games, Meme contests and many more which some will
            be decided via voting among the community. There will be scoreboards of each game and
            the member ranked 1st as well as the most participated member of each month will receive
            a special 1 of 1 Metabunny
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
