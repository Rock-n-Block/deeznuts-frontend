import Button from '../../../atoms/Button';
import s from './FirstBlock.module.scss';
import overview from '../../../../assets/img/sections/landing/header/overview.png';
// import bunny from '../../../../assets/img/sections/landing/first-block/bg.png'
import { ReactComponent as Meta } from '../../../../assets/img/icons/meta.svg';
import { ReactComponent as Bunny } from '../../../../assets/img/icons/bunny.svg';
import MintModal from '../../../molecules/Modals/MintModal/index';
import { useModals } from '../../../../context/Modal';

const FirstBlock: React.FC = () => {
  const { setModal } = useModals();
  return (
    <section className={s.block}>
    {/* <img src={bunny} alt="overview" className={s.bunny} /> */}
      <div className={s.block_inner}>
        <div className={s.banner}>
          <Meta />
          <Bunny />
          <img src={overview} alt="overview" className={s.overview} />
        </div>
        <Button title="Mint-a-sack" className={s.button} onClick={() => setModal('txHash')} />
      </div>
      <MintModal type="COMMON" img="" txHash="txHash" id={0} />
    </section>
  );
};

export default FirstBlock;
