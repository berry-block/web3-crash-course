import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

import LandingPage from "./components/LandingPage";

const polygonMumbai = {
  id: "0x13881",
  token: "MATICMUM",
  label: "Polygon Mumbai",
  rpcUrl: `https://rpc.ankr.com/polygon_mumbai`,
};

const chains = [polygonMumbai];
const wallets = [injectedModule()];

const web3Onboard = init({
  wallets,
  chains,
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
  theme: "dark",
  connect: {
    autoConnectLastWallet: true,
  },
});

const App = () => {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <div className="App">
        <LandingPage />
      </div>
    </Web3OnboardProvider>
  );
};

export default App;
