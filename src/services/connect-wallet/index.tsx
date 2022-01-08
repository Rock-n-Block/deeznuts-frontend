import { ConnectWallet } from '@amfi/connect-wallet';
import { metabunnyAbi } from '../../config/abi';
import Web3 from 'web3';
import i18n from 'i18next';

import { chain, connectWalletConfig } from '../../config/index';
import { clogData } from '../../utils/logger';
import { notify } from '../../utils/notify';
import BigNumber from 'bignumber.js';

export class WalletConnect {
  private connectWallet: any;

  private t: (translation: string) => string;

  constructor() {
    this.connectWallet = new ConnectWallet();
    this.t = i18n.t;
  }

  public async initWalletConnect(name: string): Promise<boolean> {
    const { provider, network, settings } = connectWalletConfig;
    localStorage.setItem('metabunny_provider', name);
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
        const resChain = await connector.connector.request({
          method: 'eth_chainId',
        });
        if (connectWalletConfig.network.chainID !== parseInt(resChain, 16)) {
          connector.connector.request({
            method: 'wallet_switchEthereumChain',
            params: [
              {
                chainId: `0x${connectWalletConfig.network.chainID.toString(16)}`,
              },
            ],
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
      const resChain = await connector.connector.request({
        method: 'eth_chainId',
      });
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
            message: {
              text: `Wrong network, please choose ${connectWalletConfig.network.chainName}`,
            },
          });
      });
    });
  }

  public logOut(): void {
    localStorage.removeItem('metabunny_provider');
    localStorage.removeItem('metabunny_address');
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

  public async getContract(address: string, abi: any) {
    const contract = await this.connectWallet.getContract({
      address,
      abi,
    });

    return contract;
  }

  async mint(amount: number, userAddress: string) {
    const contract = await this.getContract(chain.contractAddress, metabunnyAbi);
    const isPaused = await contract.methods.paused().call();
    if (isPaused) {
      notify(this.t('toast.pausedMint'), 'error');
      return;
    }
    const isWhitelistEnabled = await contract.methods.whitelistEnabled().call();
    if (isWhitelistEnabled) {
      const isAddressInWhitelist = await contract.methods.whitelist(userAddress).call();
      if (!isAddressInWhitelist) {
        notify(this.t('toast.whitelist'), 'error');
        return;
      }
    }
    const totalSupply = await contract.methods.totalSupply().call();
    const allowance = await contract.methods.allowedToExist().call();
    if (new BigNumber(totalSupply).plus(amount).isGreaterThan(new BigNumber(allowance))) {
      notify(this.t('toast.allMinted'), 'error');
      return;
    }
    const price = await contract.methods.price().call();
    contract.methods
      .buy(amount)
      .send({
        from: userAddress,
        value: new BigNumber(amount.toString()).times(new BigNumber(price)).toFixed(),
      })
      .on('transactionHash', (transactionHash: any) => {
        notify(
          <>
            <span>{this.t('toast.mintProgress')}</span>
            <a
              href={`https://rinkeby.etherscan.io/tx/${transactionHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Etherscan
            </a>
          </>,
          'info',
        );
      })
      .then((result: any) => {
        if (result?.events?.Transfer) {
          if (Array.isArray(result.events.Transfer)) {
            notify(
              <>
                <span>
                  {this.t('toast.minted1')} {amount} {this.t('toast.minted2')}{' '}
                </span>
                <a
                  href={`https://testnets.opensea.io/${result.from}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opensea
                </a>
              </>,
              'info',
            );
          } else {
            notify(
              <>
                <span>{this.t('toast.minted3')} </span>
                <a
                  href={`https://testnets.opensea.io/assets/${chain.contractAddress}/${result.events.Transfer.returnValues.tokenId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Opensea
                </a>
              </>,
              'info',
            );
          }
        } else {
          notify(this.t('toast.error'), 'error');
        }
      });
  }
}
