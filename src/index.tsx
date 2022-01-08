import ReactDOM from 'react-dom';

import { ModalsProvider } from './context/Modal';
import { WalletConnectProvider } from './context/WalletConnect';
import { App } from './App';
import './utils/i18n';

import './styles/index.scss';

ReactDOM.render(
  <WalletConnectProvider>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </WalletConnectProvider>,
  document.getElementById('root'),
);
