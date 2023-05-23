import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      accounts:
        process.env.PRIVATE_KEY_MUMBAI !== undefined
          ? [process.env.PRIVATE_KEY_MUMBAI]
          : [],
    },
  },
};

export default config;
