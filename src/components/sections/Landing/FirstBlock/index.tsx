// import { useModals } from '../../../../context/Modal';
// import Button from '../../../atoms/Button';

import MintModal from '../../../molecules/Modals/MintModal/index';

import s from './FirstBlock.module.scss';

const FirstBlock: React.FC = () => {
  return (
    <section className={s.block}>
      <MintModal type="COMMON" img="" txHash="txHash" id={0} />

    </section>
  );
};

export default FirstBlock;
