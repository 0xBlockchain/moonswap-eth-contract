const { expectRevert, time } = require('@openzeppelin/test-helpers');
const MoonToken = artifacts.require('MoonToken');
const MasterStar = artifacts.require('MasterStar');
const MoonFund = artifacts.require('MoonFund');
const MoonFansToken = artifacts.require('MoonFansToken');
const MockERC20 = artifacts.require('MockERC20');

contract('MasterStar', ([alice, bob, carol, lpAddr, crossAddr, dev, minter]) => {
    beforeEach(async () => {
      this.moon = await MoonToken.new({ from: alice });
      this.fans = await MoonFansToken.new({ from: alice });
    });

    it('should set correct state variables', async () => {
        this.master = await MasterStar.new(this.moon.address, dev, '1000', '0', { from: alice });
        await this.moon.transferOwnership(this.master.address, { from: alice });
        const token = await this.master.token();
        const owner = await this.moon.owner();
        assert.equal(token.valueOf(), this.moon.address);
        this.fund = await MoonFund.new(this.fans.address, this.master.address, this.moon.address, {from: alice});
        await this.fans.transferOwnership(this.fund.address, { from: alice });
        const fansToken = await this.fund.fansToken();
        assert.equal(fansToken.valueOf(), this.fans.address);
        // assert.equal(devaddr.valueOf(), dev);
        // assert.equal(fcLockAirdropAddr.valueOf(), airdropFc);
        // assert.equal(owner.valueOf(), this.master.address);
    });

    it('should set update allocpoint', async () => {
        // this.master = await MasterStar.new(this.token.address, dev, '1000', '0', { from: alice });
        // await this.token.transferOwnership(this.master.address, { from: alice });
        // await this.master.mintEarlybirdToken(lpAddr, {from: alice});
        // const earlybirdLpAddr = await this.master.earlybirdLpAddr();
        // assert.equal(earlybirdLpAddr.valueOf(), lpAddr);
        // assert.equal((await this.token.balanceOf(lpAddr)).valueOf(), '1250000');
        // const token = await this.master.token();
        // const devaddr = await this.master.devaddr();
        // const fcLockAirdropAddr = await this.master.fcLockAirdropAddr();
        // const owner = await this.token.owner();
        // assert.equal(token.valueOf(), this.token.address);
        // assert.equal(devaddr.valueOf(), dev);
        // assert.equal(fcLockAirdropAddr.valueOf(), airdropFc);
        // assert.equal(owner.valueOf(), this.master.address);
    });

    context('With ERC/LP token added to the field', () => {
         beforeEach(async () => {
            this.lp = await MockERC20.new('LPToken', 'LP', '10000000000', { from: minter });
            await this.lp.transfer(alice, '1000', { from: minter });
            await this.lp.transfer(bob, '1000', { from: minter });
            await this.lp.transfer(carol, '1000', { from: minter });
            this.lp2 = await MockERC20.new('LPToken2', 'LP2', '10000000000', { from: minter });
            await this.lp2.transfer(alice, '1000', { from: minter });
            await this.lp2.transfer(bob, '1000', { from: minter });
            await this.lp2.transfer(carol, '1000', { from: minter });
            this.lp3 = await MockERC20.new('LPToken3', 'LP3', '10000000000', { from: minter });
            await this.lp3.transfer(alice, '1000', { from: minter });
            await this.lp3.transfer(bob, '1000', { from: minter });
            await this.lp3.transfer(carol, '1000', { from: minter });
            this.lp4 = await MockERC20.new('LPToken3', 'LP3', '10000000000', { from: minter });
            await this.lp4.transfer(alice, '1000', { from: minter });
            await this.lp4.transfer(bob, '1000', { from: minter });
            await this.lp4.transfer(carol, '1000', { from: minter });
            this.lp4 = await MockERC20.new('LPToken4', 'LP4', '10000000000', { from: minter });
            await this.lp4.transfer(alice, '1000', { from: minter });
            await this.lp4.transfer(bob, '1000', { from: minter });
            await this.lp4.transfer(carol, '1000', { from: minter });
            this.lp4 = await MockERC20.new('LPToken5', 'LP5', '10000000000', { from: minter });
            await this.lp4.transfer(alice, '1000', { from: minter });
            await this.lp4.transfer(bob, '1000', { from: minter });
            await this.lp4.transfer(carol, '1000', { from: minter });
            this.lp4 = await MockERC20.new('LPToken6', 'LP6', '10000000000', { from: minter });
            await this.lp4.transfer(alice, '1000', { from: minter });
            await this.lp4.transfer(bob, '1000', { from: minter });
            await this.lp4.transfer(carol, '1000', { from: minter });
            this.lp4 = await MockERC20.new('LPToken7', 'LP7', '10000000000', { from: minter });
            await this.lp4.transfer(alice, '1000', { from: minter });
            await this.lp4.transfer(bob, '1000', { from: minter });
            await this.lp4.transfer(carol, '1000', { from: minter });

         });

         it('stop mint', async () => {
            // this.master = await MasterStar.new(this.token.address, airdropFc, dev, '100', '100', { from: alice });
            await this.master.add('100', this.fund.address, true);
            console.log(await this.master.poolIndexs(this.fund.address));
            await this.fund.stake(0, 1, {from: alice});
            // await this.lp.approve(this.master.address, '1000', { from: bob });
            // await this.master.deposit(0, '100', { from: bob });
            // assert.equal((await this.lp.balanceOf(bob)).valueOf(), '900');
            // await this.master.emergencyWithdraw(0, { from: bob });
            // assert.equal((await this.lp.balanceOf(bob)).valueOf(), '1000');
         });

         it('should allow emergency withdraw', async () => {
            // this.master = await MasterStar.new(this.token.address, airdropFc, dev, '100', '100', { from: alice });
            // await this.master.add('100', this.lp.address, true);
            // await this.lp.approve(this.master.address, '1000', { from: bob });
            // await this.master.deposit(0, '100', { from: bob });
            // assert.equal((await this.lp.balanceOf(bob)).valueOf(), '900');
            // await this.master.emergencyWithdraw(0, { from: bob });
            // assert.equal((await this.lp.balanceOf(bob)).valueOf(), '1000');
         });

         it('should allow set allocPoint', async () => {
            // this.master = await MasterStar.new(this.token.address, dev, '10', '100', { from: alice });
            // await this.token.transferOwnership(this.master.address, { from: alice });
            // await this.master.add(6, this.lp.address, true);

         });


    });
});
