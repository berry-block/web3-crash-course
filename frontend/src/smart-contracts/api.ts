import { WalletType, getFellasContract } from "./helpers";

export const mint = async (wallet: WalletType) => {
  const fellas = getFellasContract(wallet);
  const tokenPrice = await fellas.tokenPrice();

  await fellas.mint({ value: tokenPrice });
};
