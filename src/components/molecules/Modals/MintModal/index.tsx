import ModalWrapper from '../Modal';
import { useModals } from '../../../../context/Modal';
// import { open_sea_link } from '../../../../config/index';

import s from './MintModal.module.scss';

import discrod from '../../../../assets/img/icons/discord-blue.svg';
import nftPlaceholder from '../../../../assets/img/nft-placeholder.png';

export interface IMintModalProps {
  type: 'COMMON' | 'LEGENDARY';
  img: string;
  txHash: string;
  id: number;
}

const MintModal: React.FC<IMintModalProps> = ({ type, img, txHash, id }) => {
  const { modals, closeModal, contractId } = useModals();

  const handleClose = () => {
    closeModal(txHash);
    const txsFromLs = localStorage.getItem('txHashes');
    const txs: Array<string> = txsFromLs ? JSON.parse(txsFromLs) : [];

    localStorage.setItem('txHashes', JSON.stringify(txs.filter((tx) => tx !== txHash)));
  };

  if (id === undefined) {
    return <></>;
  }

  return (
    <ModalWrapper close={handleClose} isActive={modals.includes(txHash)}>
      <div className={s.modal}>
        <div className={s.title}>
          You&apos;ve minted a <br /> {type === 'LEGENDARY' ? <span>{type}</span> : type} DEEZ NUTS
          NFT!
        </div>
        <div className="center">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://testnets.opensea.io/assets/${contractId}/${id - 1}`}
            className={`${s.img} ${type === 'LEGENDARY' && s.legendary}`}
          >
            <img
              src={nftPlaceholder}
              alt="img-nft"
              onLoad={(e) => {
                e.currentTarget.src = img;
              }}
            />
            <div className={s.img_bg} />
          </a>
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
