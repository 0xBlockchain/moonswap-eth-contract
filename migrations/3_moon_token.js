var MoonToken = artifacts.require("./MoonToken.sol");

module.exports = function(deployer) {
    deployer.deploy(MoonToken);
};
