import './App.css';

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const injected = new InjectedConnector({
  supportedChainIds: [56]
});


const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/c8fec96713c54f698db3709db29eb64a",
    56: "https://bsc-dataseed.binance.org/",
    4: "https://rinkeby.infura.io/v3/c8fec96713c54f698db3709db29eb64a"
  },
  network: "binance",
  qrcode: true,
  pollingInterval: 12000
});


function App() {


  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate
  } = useWeb3React();

  const connectInjected = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const connectWalletConnect = async () => {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <div>Active: {active ? "true" : "false"}</div>
      <div>Account: {account ? account : null}</div>
      <button onClick={connectInjected}>Injected</button>
      <button onClick={connectWalletConnect}>Wallet Connect</button>
      <button onClick={disconnect}>Disconnect</button>    </div>
  );
}

export default App;
