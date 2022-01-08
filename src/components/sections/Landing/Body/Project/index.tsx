// import bunny from '../../../../../assets/img/sections/landing/first-block/bg.png';
import bg from '../../../../../assets/img/sections/landing/mint/bg.png';

import s from './Project.module.scss';

const Project: React.FC = () => {
  return (
    <>
      {/* <img src={bunny} alt="bunny" className={s.bunny} /> */}

      <section className={s.block} id="project">
        <div className={s.block_inner}>
          <div className={s.head}>
            <div className={s.title}>Project</div>
          </div>
          <div className={s.info}>
            <div className={s.text}>
              Meta Bunny consists of 10,000 Bunnies completely generated via computer algorithm.
              Their existence is to scare people but unfortunately not all of them looks scary.
              Sadly some are even cute! Every Bunny has a scary meter which represents how scary are
              they. This will be based on their accessory, appearance and the location they choose
              to scare people.
            </div>
          </div>
        </div>
        <img src={bg} alt="background" className={s.background} />
      </section>
      <div className={s.introTab}>
        <div className={s.carte_button}> intro</div>
        <div className={s.carte}>
          Meta Bunny consists of 10,000 Bunnies completely generated via computer algorithm. Their
          existence is to scare people but unfortunately not all of them looks scary. Sadly
        </div>
        <div className={s.carte_button2}> intro2</div>

        <div className={s.carte2}>Meta Bunny</div>
      </div>
    </>
  );
};

export default Project;
