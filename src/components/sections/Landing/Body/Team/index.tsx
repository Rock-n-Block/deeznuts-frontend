import s from './Team.module.scss';
import ellipse from '../../../../../assets/img/sections/landing/body/ellipse.png';

const teammates = [
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
  {
    avatar: ellipse,
    name: 'Name Name',
    descr:
      'Text crowdsourced encyclopedia that rewards users for contributing and peer reviewing information. Lunyr was raised almost 48 000 ETH during ICO on April’17. It w',
  },
];

const Team: React.FC = () => {
  return (
    <section className={s.section} id="team">
      <div className={s.title}>Team</div>
      <div className={s.content}>
        <div className={s.teammates}>
          {teammates.map((teammate: any) => (
            <div className={s.teammate}>
              <img src={teammate.avatar} alt="avatar" className={s.avatar} />
              <span className={s.name}>{teammate.name}</span>
              <span className={s.description}>{teammate.descr}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
