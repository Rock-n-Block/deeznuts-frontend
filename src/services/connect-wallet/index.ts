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
    return true;
  }

  public async getAccounts() {
    return new Promise((resolve) => {
      this.checkEthNetwork().then(() => {
        this.connectWallet.getAccounts().subscribe(
          (user: any) => {
            resolve(user);
          },
          (err: any) => {
            resolve(err);
          },
        );
      });
    });
  }

  public logOut(): void {
    this.connectWallet.resetConect();
  }

  public currentWeb3(): Web3 {
    return this.connectWallet.currentWeb3();
  }

  public async signMessage(message: string) {
    const currentWeb3 = this.currentWeb3();
    const res = await currentWeb3.eth.personal.sign(
      message,
      '0xe34D4eC7C83d9eD6EB25f9c028A913877537DEC4',
      '',
    );
    return res;
  }

  public async sendTx(data: { from: string; to: string; value: string }) {
    const currentWeb3 = this.currentWeb3();
    const res = await currentWeb3.eth.sendTransaction(data);
    return res;
  }
}
