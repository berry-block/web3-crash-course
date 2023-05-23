import { ethers } from "hardhat";
import { BigNumberish } from "ethers";

type DeployArgs = [
  _tokenSupply: BigNumberish,
  _maxSupply: BigNumberish,
  _baseURI: string
];

const deploy = async () => {
  const deployArgs: DeployArgs = [
    ethers.utils.parseEther("0.01"),
    "6",
    "ipfs://QmesdkpFTZF96SEa8ppPCkP2aibiE9yqJ6WBPi5XLjb6kS/",
  ];

  const Fellas = await ethers.getContractFactory("Fellas");
  const fellas = await Fellas.deploy(...deployArgs);

  await fellas.deployed();

  console.log(`Fellas deployed at: ${fellas.address}`);
};

deploy();
