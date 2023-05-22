import { ethers } from "ethers";

import * as FellasArtifact from "../smart-contracts/artifacts/Fellas.json";
import { Fellas } from "./types/Fellas";

export const getFellasContract = async (
  address: string,
  provider: ethers.providers.Provider
) => {
  const fellas = new ethers.Contract(address, FellasArtifact.abi, provider);

  return fellas as Fellas;
};
