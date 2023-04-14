const {expect} = require("chai");

describe("Token contract", function(){

    it("Deployment should assign the total  supply of token to the owner",async function(){
        const [owner] = await ethers.getSigners();

        console.log("Signers object:",owner);
        const Token = await ethers.getContractFactory("Token"); //creating instance of contract

        const hardhatToken = await Token.deploy();//deploying the contract

        const ownerBallance = await hardhatToken.balanceOf(owner.address); //getting the ballance of owner

        console.log("Owner Address:",owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBallance);


    })
});