const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Tokenready = await hre.ethers.getContractFactory("TokenMint");
  const TokenBalance = await hre.ethers.getContractFactory("TokenBalance");
  const tokenready = await Tokenready.deploy();
  const tokenbalance = await TokenBalance.deploy(tokenready.address, ["0x34A7350f5C5F08f9444CbBef1624275E66cCFFBf","0x074130e9AF22f457092C24aB7E14C0c7f34CEb90","0x3831826A3a0c10251f596DB93B36Ad3dE74cD995","0xf0D8CD99D25495c00Feec066D5b6075B8F5dA901","0xf0D8CD99D25495c00Feec066D5b6075B8F5dA901"]);
  await tokenready.deployed();
  await tokenbalance.deployed();

  console.log("Token address is :", tokenready.address);
  console.log("Contract has been deployed to:", tokenbalance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
