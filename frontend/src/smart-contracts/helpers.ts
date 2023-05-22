import { ethers } from "ethers";
import type { WalletState } from "@web3-onboard/core";

import * as FellasArtifact from "../smart-contracts/artifacts/Fellas.json";
import { Fellas } from "./types/Fellas";

export const getFellasContract = async (
  address: string,
  wallet: ethers.providers.Provider | WalletState | null
) => {
  if (!wallet) {
    throw new Error("Wallet not connected");
  }

  const fellas = new ethers.Contract(address, FellasArtifact.abi);

  return fellas.connect(
    wallet instanceof ethers.providers.Provider
      ? wallet
      : new ethers.providers.Web3Provider(wallet.provider, "any")
  ) as Fellas;
};
