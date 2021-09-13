import { WalletConnect } from '../../services/connect-wallet/index';

const Landing: React.FC = () => {
  const wc = new WalletConnect();

  return (
    <div>
      <button type="button" onClick={() => wc.initWalletConnect('MetaMask')}>
        MetaMask connect
      </button>
      <button type="button" onClick={() => wc.initWalletConnect('WalletConnect')}>
        WC connect
      </button>
      <button type="button" onClick={() => wc.getAccounts()}>
        info
      </button>
      <button type="button" onClick={() => wc.logOut()}>
        logOut
      </button>
      <button type="button" onClick={() => wc.signMessage('TEST MESSAGE')}>
        SIGN
      </button>
    </div>
  );
};

export default Landing;
