import { IChainConfig, IConnectWallet } from '../types/index';

export const is_production = false;

export const show_logs = true;

export const is_presale = false;

export const open_sea_link =
  '';

export const backendUrl = is_production
  ? ''
  : '';

export const chain: IChainConfig = {
  name: is_production ? 'Ethereum Mainnet' : 'Ethereum Testnet Rinkeby',
  id: is_production ? 1 : 4,
  rpc: '',
  tx: {
    link: is_production ? '' : '',
  },
  nativeCurrency: {
    name: is_production ? 'RIN' : 'ETH',
    symbol: is_production ? 'RIN' : 'ETH',
    decimals: 18,
  },
  blockExp: is_production ? '' : '',
};

export const connectWalletConfig: IConnectWallet = {
  wallets: ['MetaMask', 'WalletConnect'],
  network: {
    name: chain.name,
    chainID: chain.id,
  },
  provider: {
    MetaMask: { name: 'MetaMask' },
    WalletConnect: {
      name: 'WalletConnect',
      useProvider: 'infura',
      provider: {
        infura: {
          // eslint-disable-next-line
          // @ts-ignore
          infuraId: 'e30174475e4b42bc9daab0cb45748b9c',
        },
      },
    },
  },
  settings: { providerType: true },
};
