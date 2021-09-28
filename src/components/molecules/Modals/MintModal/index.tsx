import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';
import ImgWithPreload from '../../../atoms/ImgWithPreload/index';
import { backendUrl, is_production } from '../../../../config/index';

import s from './MintModal.module.scss';

import discrod from '../../../../assets/img/icons/discord-blue.svg';
import loader from '../../../../assets/img/icons/loader.svg';

export interface IMintModalProps {
  image: string;
  id: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

const MintModal: React.FC<IMintModalProps> = ({ rarity, image, id }) => {
  const { modals, closeModal, contractId } = useModals();

  const handleClose = () => {
    closeModal(id.toString());
    fetch(`${backendUrl}payments/viewed/${id}/`);
  };

  if (id === undefined) {
    return <></>;
  }

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes(id.toString())}>
      <div className={s.modal}>
        <div className={s.title}>
          You&apos;ve minted {rarity === 'uncommon' ? 'an' : 'a'} <br />{' '}
          {rarity === 'legendary' ? <span>{rarity.toUpperCase()}</span> : rarity.toUpperCase()} DEEZ
          NUTS NFT!
        </div>
        <div className="center">
          <a
            target="_blank"
            rel="noreferrer"
            href={`${
              is_production
                ? `https://opensea.io/assets/${contractId}/${id - 1}`
                : `https://testnets.opensea.io/assets/${contractId}/${id - 1}`
            }`}
            className={`${s.img} ${rarity === 'legendary' && s.legendary}`}
          >
            <ImgWithPreload preloader={loader} img={image} />
            <div className={s.img_bg} />
          </a>
        </div>
        {rarity === 'legendary' ? (
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
            {rarity[0].toUpperCase() + rarity.slice(1)} NFT holders will get access to Exclusive VIP
            Deeznuts crypto events in 2022 with the Deez Nuts OG team and get access to the hidden
            DEEZ NUTS NFT Discord category. Join here:
          </div>
        )}

        <div className="center">
          <div className={s.discord}>
            <div className={s.discord_icon}>
              <img src={discrod} alt="discrod" />
            </div>
            <a
              href="https://discord.com/invite/deeznutsnfts"
              rel="noreferrer"
              target="_blank"
              className={s.discord_link}
            >
              discord/deeznutsnfts
            </a>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MintModal;
