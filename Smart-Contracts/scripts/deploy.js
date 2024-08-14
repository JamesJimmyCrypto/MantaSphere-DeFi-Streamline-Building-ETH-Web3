async function main() {
  const ContentNFT = await ethers.getContractFactory("ContentNFT");
  const contentNFT = await ContentNFT.deploy();
  await contentNFT.deployed();
  console.log("ContentNFT deployed to:", contentNFT.address);

  const Governance = await ethers.getContractFactory("Governance");
  const governance = await Governance.deploy();
  await governance.deployed();
  console.log("Governance deployed to:", governance.address);

  const MantaToken = await ethers.getContractFactory("MantaToken");
  const mantaToken = await MantaToken.deploy(1000000, 1000000);
  await mantaToken.deployed();
  console.log("MantaToken deployed to:", mantaToken.address);

  const Marketplace = await ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(contentNFT.address);
  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
