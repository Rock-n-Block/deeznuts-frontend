import ReactDOM from 'react-dom';

import { App } from './App';

import { WalletConnectProvider } from './context/WalletConnect';
import { ModalsProvider } from './context/Modal';

import './styles/index.scss';

ReactDOM.render(
  <WalletConnectProvider>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </WalletConnectProvider>,
  document.getElementById('root'),
);
