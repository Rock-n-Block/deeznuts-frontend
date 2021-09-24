import { ConnectWallet } from '@amfi/connect-wallet';
import Web3 from 'web3';

import { connectWalletConfig } from '../../config/index';
import { clogData } from '../../utils/logger';

export class WalletConnect {
  private connectWallet: any;

  constructor() {
    this.connectWallet = new ConnectWallet();
  }

  public async initWalletConnect(name: string): Promise<boolean> {
    const { provider, network, settings } = connectWalletConfig;

    const connecting = this.connectWallet
      .connect(provider[name], network, settings)
      .then((connected: boolean) => {
        if (connected) {
          return this.getAccounts();
        }
        return connected;
      })
      .catch((err: any) => {
        clogData('CONNECT ERR', err);
      });

    return Promise.all([connecting]).then((connect: any) => {
      return connect[0];
    });
  }

  private async checkEthNetwork() {
    const { connector, providerName } = this.connectWallet;

    if (providerName === 'MetaMask') {
      try {
        const resChain = await connector.connector.request({ method: 'eth_chainId' });
        if (connectWalletConfig.network.chainID !== parseInt(resChain, 16)) {
          connector.connector.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${connectWalletConfig.network.chainID.toString(16)}` }],
          });
          return true;
        }
        return true;
      } catch (error) {
        clogData('checkNewErr', error);
        return false;
      }
    }

    if (providerName === 'WalletConnect') {
      const resChain = await connector.connector.request({ method: 'eth_chainId' });
      if (connectWalletConfig.network.chainID !== parseInt(resChain, 16)) {
        localStorage.removeItem('walletconnect');
        return false;
      }
      return true;
    }

    return true;
  }

  public async getAccounts() {
    return new Promise((resolve) => {
      this.checkEthNetwork().then((connection) => {
        if (connection) {
          this.connectWallet.getAccounts().subscribe(
            (user: any) => {
              resolve(user);
            },
            (err: any) => {
              resolve(err);
            },
          );
        } else
          resolve({
            code: 404,
            message: { text: `Wrong network, please choose ${connectWalletConfig.network.name}` },
          });
      });
    });
  }

  public logOut(): void {
    this.connectWallet.resetConect();
  }

  public currentWeb3(): Web3 {
    return this.connectWallet.currentWeb3();
  }

  public async sendTx(data: { from: string; to: string; value: string }) {
    const currentWeb3 = this.currentWeb3();
    const res = await currentWeb3.eth.sendTransaction(data);
    return res;
  }
}
