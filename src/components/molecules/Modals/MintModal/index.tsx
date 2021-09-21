import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';

import s from './MintModal.module.scss';

import discrod from '../../../../assets/img/icons/discord-blue.svg';

export interface IMintModalProps {
  type: 'COMMON' | 'LEGENDARY';
  img: string;
  txHash: string;
}

const MintModal: React.FC<IMintModalProps> = ({ type, img, txHash }) => {
  const { modals, closeModal } = useModals();

  const handleClose = () => {
    closeModal('mintmodal');
    console.log(txHash);
  };

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes('mintmodal')}>
      <div className={s.modal}>
        <div className={s.title}>
          You&apos;ve minted a <br /> {type === 'LEGENDARY' ? <span>{type}</span> : type} DEEZ NUTS
          NFT!
        </div>
        <div className="center">
          <div className={`${s.img} ${type === 'LEGENDARY' && s.legendary}`}>
            <img src={img} alt="img-nft" />
            <div className={s.img_bg} />
          </div>
        </div>
        {type === 'LEGENDARY' ? (
          <>
            <div className={s.subtitle}>
              <span>CONGRATULATIONS!</span> There&apos;s only 20 legendaries out of 10,000, and
              you&apos;ve minted one of them! This means you get to join the DEEZ NUTS Team on ALL
              INCLUSIVE 7 NIGHT BALI VACATION CELEBRATING WITH A-LIST CELEBRITIES AND INFLUENCERS.
            </div>
            <div className={s.subtitle}>
              Join the Discord and message one of the admins for more info on your trip!
            </div>
          </>
        ) : (
          <div className={s.subtitle}>
            Common NFT holders will get access to Exclusive VIP Deeznuts crypto events in 2022 with
            the Deez Nuts OG team and get access to the hidden DEEZ NUTS NFT Discord category. Join
            here:
          </div>
        )}

        <div className="center">
          <div className={s.discord}>
            <div className={s.discord_icon}>
              <img src={discrod} alt="discrod" />
            </div>
            <div className={s.discord_link}>discord.gg/NJNMRTEsgZ</div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MintModal;
