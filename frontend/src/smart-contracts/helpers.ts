import { ethers } from "ethers";
import type { WalletState } from "@web3-onboard/core";

import FellasArtifact from "../smart-contracts/artifacts/Fellas.json";
import { FELLAS_ADDRESS } from "../environment";
import { Fellas } from "./types/Fellas";

export type WalletType = ethers.providers.Web3Provider | WalletState | null;

export const getFellasContract = (wallet: WalletType) => {
  if (!wallet) {
    throw new Error("Wallet not connected");
  }

  const fellas = new ethers.Contract(FELLAS_ADDRESS, FellasArtifact.abi);
  const provider =
    wallet instanceof ethers.providers.Web3Provider
      ? wallet
      : new ethers.providers.Web3Provider(wallet.provider);

  return fellas.connect(provider.getSigner()) as Fellas;
};
