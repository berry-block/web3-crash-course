import { useConnectWallet } from "@web3-onboard/react";
import ActionButton from "./ActionButton";
import Navbar from "./Navbar";

const LandingPage = () => {
  const [{ wallet }, connect] = useConnectWallet();

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen pt-40"
        style={{
          backgroundImage: "url('background.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
            Fellas
          </h1>
          <p className="mt-4 text-xl text-gray-700 text-center">
            Unique NFT Collection of just 6 Tokens.
          </p>
          <div className="flex justify-center mt-8">
            <ActionButton
              onClick={wallet ? () => {} : () => connect()}
              text={wallet ? "Mint" : "Connect Wallet"}
            />
          </div>
        </div>
      </div>
      <main>{/* Rest of the content */}</main>
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white">
            &copy; 2023 Berry Block. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
