import { ConnectWallet } from '@amfi/connect-wallet';
import Web3 from 'web3';

import { connectWalletConfig } from '../../config/index';

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
          console.log('CONNECTED');
        }
        return connected;
      })
      .catch((err: any) => {
        console.log('CONNECT ERR', err);
      });

    return Promise.all([connecting]).then((connect: any) => {
      return connect[0];
    });
  }

  public async getAccounts() {
    const { connector } = this.connectWallet;

    connector.connector.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${connectWalletConfig.network.chainID.toString(16)}` }],
    });

    this.connectWallet.getAccounts().subscribe(
      (user: any) => console.log('user account: ', user),
      (err: any) => console.log('user account error: ', err),
    );
  }

  public Web3(): Web3 {
    return this.connectWallet.Web3Provider;
  }
}
