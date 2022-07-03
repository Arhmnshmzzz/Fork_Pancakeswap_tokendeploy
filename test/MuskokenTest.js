const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MuskToken", function () {
  it("Should return owner of token", async function () {
    const [owner] = await ethers.getSigners();
    // const signers = await ethers.getSigners();
    const MuskToken = await ethers.getContractFactory("MuskToken");
    const muskToken = await MuskToken.deploy();
    await muskToken.deployed();
    const owneraddress = await muskToken.owner();

    // expect(await muskToken.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await muskToken.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    expect(owneraddress).to.equal(owner.address);
  });
});
