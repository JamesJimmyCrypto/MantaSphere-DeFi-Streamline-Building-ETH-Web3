const { expect } = require("chai");

describe("MantaToken", function () {
  it("Should return the correct name and symbol", async function () {
    const MantaToken = await ethers.getContractFactory("MantaToken");
    const mantaToken = await MantaToken.deploy();
    await mantaToken.deployed();

    expect(await mantaToken.name()).to.equal("MantaToken");
    expect(await mantaToken.symbol()).to.equal("MANTA");
  });

  it("Should assign the total supply to the deployer", async function () {
    const [owner] = await ethers.getSigners();
    const MantaToken = await ethers.getContractFactory("MantaToken");
    const mantaToken = await MantaToken.deploy();
    await mantaToken.deployed();

    const ownerBalance = await mantaToken.balanceOf(owner.address);
    expect(await mantaToken.totalSupply()).to.equal(ownerBalance);
  });
});
