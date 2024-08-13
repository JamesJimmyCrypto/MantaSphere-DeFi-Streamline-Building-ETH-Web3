const hre = require("hardhat");

async function main() {
  const MantaToken = await hre.ethers.getContractFactory("MantaToken");
  const mantaToken = await MantaToken.deploy(1000000);

  await mantaToken.deployed();
  console.log("MantaToken deployed to:", mantaToken.address);

  const MantaConnect = await hre.ethers.getContractFactory("MantaConnect");
  const mantaConnect = await MantaConnect.deploy(mantaToken.address);

  await mantaConnect.deployed();
  console.log("MantaConnect deployed to:", mantaConnect.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
