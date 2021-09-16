import ReactDOM from 'react-dom';

import { App } from './App';

import { WalletConnectProvider } from './context/WalletConnect';

import './styles/index.scss';

ReactDOM.render(
  <WalletConnectProvider>
    <App />
  </WalletConnectProvider>,
  document.getElementById('root'),
);
