import { createContext, useContext } from 'react';
import { WalletConnect } from '../services/connect-wallet/index';

interface ITxData {
  from: string;
  to: string;
  value: string;
}

const wcService = new WalletConnect();

interface IContext {
  init: () => any;
  sendEth: (data: ITxData) => any;
}

const Web3Context = createContext({} as IContext);

const WalletConnectProvider: React.FC = ({ children }) => {
  const init = async () => {
    const account = await wcService.initWalletConnect('MetaMask');
    return account;
  };

  const sendEth = async (data: ITxData) => {
    const res = await wcService.sendTx(data);
    return res;
  };

  return (
    <Web3Context.Provider value={{ init: () => init(), sendEth: (data: ITxData) => sendEth(data) }}>
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3Context = () => {
  return useContext(Web3Context);
};

export { WalletConnectProvider, useWeb3Context };
