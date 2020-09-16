const { expectRevert, time } = require('@openzeppelin/test-helpers');
const MoonToken = artifacts.require('MoonToken');
const MasterStar = artifacts.require('MasterStar');
const MockERC20 = artifacts.require('MockERC20');

contract('MasterStar', ([alice, bob, carol, lpAddr, crossAddr, dev, minter]) => {
    beforeEach(async () => {
      this.token = await MoonToken.new({ from: alice });
    });

    it('should set correct state variables', async () => {
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
            this.master = await MasterStar.new(this.token.address, dev, '10', '100', { from: alice });
            await this.token.transferOwnership(this.master.address, { from: alice });
            await this.master.add(6, this.lp.address, true);



         });
         // it('mult pool test diff time', async () => {
         //      // startBlock = 100
         //      this.master = await MasterStar.new(this.token.address, dev, '10', '100', { from: alice });
         //      await this.token.transferOwnership(this.master.address, { from: alice });
         //      await this.master.mintEarlybirdToken(lpAddr, {from: alice});
         //      await this.master.add(1, this.lp.address, true);
         //      await time.advanceBlockTo('110');
         //      await this.lp.approve(this.master.address, '1000', { from: bob });
         //      await this.master.deposit(0, '100', { from: bob }); // 111
         //      await time.advanceBlockTo('112');
         //      await this.master.deposit(0, 0, { from: bob }); // 113
         //      console.log('bob balance =>', (await this.token.balanceOf(bob)).valueOf().toString());
         //
         //      await this.master.add(2, this.lp2.address, true);
         //      await this.lp2.approve(this.master.address, '1000', { from: alice });
         //      await this.master.deposit(1, '100', { from: alice }); // 114
         //      await time.advanceBlockTo('120');
         //      await this.master.deposit(0, 0, { from: bob }); // 121
         //      await this.master.deposit(1, 0, { from: alice }); // 122
         //      console.log('bob balance =>', (await this.token.balanceOf(bob)).valueOf().toString());
         //      console.log('alice balance =>', (await this.token.balanceOf(alice)).valueOf().toString());
         // });


         it('mult pool test same time', async () => {
              // startBlock = 100
              // this.master = await MasterStar.new(this.token.address, dev, '10', '100', { from: alice });
              // await this.token.transferOwnership(this.master.address, { from: alice });
              // await this.master.mintEarlybirdToken(lpAddr, {from: alice});
              // await this.master.add(1, this.lp.address, true);
              // await this.master.add(2, this.lp2.address, true);
              //
              // await time.advanceBlockTo('110');
              // await this.lp.approve(this.master.address, '1000', { from: bob });
              // await this.lp2.approve(this.master.address, '1000', { from: alice });
              // await this.master.deposit(0, '100', { from: bob }); // 111
              // await this.master.deposit(1, '100', { from: alice }); // 114
              //
              // await time.advanceBlockTo('121');
              // await this.master.deposit(0, 0, { from: bob }); // 122
              // await this.master.deposit(1, 0, { from: alice }); // 123
              // console.log('bob balance =>', (await this.token.balanceOf(bob)).valueOf().toString());
              // console.log('alice balance =>', (await this.token.balanceOf(alice)).valueOf().toString());
         });

         // it('when dely deposit test', async () => {
         //      // startBlock = 100
         //      this.master = await MasterStar.new(this.token.address, dev, '100', '100', { from: alice });
         //      await this.token.transferOwnership(this.master.address, { from: alice });
         //      await this.master.mintEarlybirdToken(lpAddr, {from: alice});
         //      await this.master.add('100', this.lp.address, true);
         //      console.log('lastRewardBlock => ', (await this.master.poolInfo(0))['lastRewardBlock'].toString());
         //
         //      await time.advanceBlockTo('110');
         //      await this.lp.approve(this.master.address, '1000', { from: bob });
         //      await this.master.deposit(0, '100', { from: bob }); // 111
         //
         //      console.log('startBlock => ', (await this.master.startBlock()).valueOf().toString());
         //      console.log('firstMinerBlock => ', (await this.master.firstMinerBlock()).valueOf().toString());
         //      console.log('genesisEndBlock => ', (await this.master.genesisEndBlock()).valueOf().toString());
         //      console.log('maxMinerBlock => ', (await this.master.maxMinerBlock()).valueOf().toString());
         //
         // });
         it('when migrate end', async () => {
           // this.master = await MasterStar.new(this.token.address, dev, '100', '100', { from: alice });
           // await this.token.transferOwnership(this.master.address, { from: alice });
           // await this.master.mintEarlybirdToken(lpAddr, {from: alice});
           // await this.master.add('100', this.lp.address, true);
           // //console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
           // await this.lp.approve(this.master.address, '1000', { from: bob });
           // await this.master.deposit(0, '100', { from: bob });
           // console.log((await this.token.balanceOf(bob)).valueOf().toString());
           // await time.advanceBlockTo('110');
           // await this.master.deposit(0, '0', { from: bob }); // block 111
           // console.log((await this.token.balanceOf(bob)).valueOf().toString());
           // console.log('masterStar balacne 1=====>', (await this.token.balanceOf(this.master.address)).valueOf().toString());
           //
           // //migrate
           // await this.master.migrate(0, {from: alice});
           //
           // console.log((await this.master.poolInfo(0))['finishMigrate']);
           // //setCrosschain
           // await this.master.setCrosschain(0, true, carol);
           //
           // console.log('migrate pool address=>', (await this.master.migratePoolAddrs(0)).valueOf());
           // assert((await this.master.migratePoolAddrs(0)).valueOf(), carol);
           //
           //  // tokenConvert
           // await this.master.tokenConvert(0, crossAddr, {from: bob});
           // console.log('lockCrosschainAmount => ', (await this.master.poolInfo(0))['lockCrosschainAmount'].toString());
           // console.log('LpTargetBalance =>', (await this.lp.balanceOf(crossAddr)).valueOf().toString());
           // console.log('carol balacne 1=>', (await this.token.balanceOf(carol)).valueOf().toString());
           // console.log('crossAddr balacne 1=>', (await this.token.balanceOf(this.master.address)).valueOf().toString());
           // console.log('dev balacne 1=>', (await this.token.balanceOf(dev)).valueOf().toString());
           // console.log('crossAddr  userinfo 1=>', (await this.master.userInfo(0, carol))['amount'].toString());
           // console.log('crossAddr balacne 1=>', (await this.token.balanceOf(bob)).valueOf().toString());
           //
           // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
           // await time.advanceBlockTo('120');
           // await this.master.massUpdatePools({ from: bob }); // 121
           // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
           // console.log('crossAddr balacne 2=>', (await this.token.balanceOf(bob)).valueOf().toString());
           // console.log('carol balacne 2=>', (await this.token.balanceOf(carol)).valueOf().toString());
           // console.log('crossAddr balacne 2=>', (await this.token.balanceOf(this.master.address)).valueOf().toString());
           // console.log('dev balacne 2=>', (await this.token.balanceOf(dev)).valueOf().toString());
           // console.log('crossAddr  userinfo 2=>', (await this.master.userInfo(0, carol))['amount'].toString());
         });

         it('should give out Tokens only after farming time', async () => {
            // this.master = await MasterStar.new(this.token.address, dev, '100', '100', { from: alice });
            // await this.token.transferOwnership(this.master.address, { from: alice });
            // await this.master.mintEarlybirdToken(lpAddr, {from: alice});
            // await this.master.add('100', this.lp.address, true);
            // //console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // await this.lp.approve(this.master.address, '1000', { from: bob });
            // await this.master.deposit(0, '100', { from: bob });
            // await time.advanceBlockTo('89');
            // await this.master.deposit(0, '0', { from: bob }); // block 90
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), '0');
            // await time.advanceBlockTo('94');
            // await this.master.deposit(0, '0', { from: bob }); // block 95
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), '0');
            // await time.advanceBlockTo('99');
            // await this.master.deposit(0, '0', { from: bob }); // block 100
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), '0');
            // assert.equal((await this.master.firstMinerBlock()).valueOf(), '100');
            // assert.equal((await this.master.genesisEndBlock()).valueOf(), '150');
            // assert.equal((await this.master.maxMinerBlock()).valueOf(), '350');
            // await time.advanceBlockTo('100');
            // await this.master.deposit(0, '0', { from: bob }); // block 101
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100);
            // await time.advanceBlockTo('101');
            // await this.master.deposit(0, '0', { from: bob }); // 102
            // console.log('102 end =>', (await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 2);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 2);
            // await time.advanceBlockTo('104');
            // await this.master.deposit(0, '0', { from: bob }); // block 105
            // console.log('105 end =>', (await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 5);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 5);
            // assert.equal((await this.token.totalSupply()).valueOf(), 5000 + 1250000);
            // // prodution Period
            // await time.advanceBlockTo('149');
            // await this.master.deposit(0, '0', { from: bob }); // block 150
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000);
            // await time.advanceBlockTo('150');
            // await this.master.deposit(0, '0', { from: bob });  // block 151
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50 + 100 * 0.9);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50 + 100 * 0.1);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000 + 100 * 1);
            //
            // await time.advanceBlockTo('151');
            // await this.master.deposit(0, '0', { from: bob });  // block 152
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50 + 100 * 0.9 * 2);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50 + 100 * 0.1 * 2);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000 + 100 * 1 * 2);
            // await time.advanceBlockTo('198');
            // await this.master.deposit(0, '0', { from: bob });  // block 199
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50 + 100 * 0.9 * 49);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50 + 100 * 0.1 * 49);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000 + 100 * 1 * 49);
            //
            // await time.advanceBlockTo('199');
            // await this.master.deposit(0, '0', { from: bob });  // block 200
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // // first halve
            // await time.advanceBlockTo('200');
            // await this.master.deposit(0, '0', { from: bob });  // block 201
            // console.log("======first halve======");
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50 + 100 * 0.9 * 50 + 50 * 0.9 * 1);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50 + 100 * 0.1 * 50 + 50 * 0.1 * 1);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000 + 100 * 1 * 50 + 50 * 1);
            //
            // await time.advanceBlockTo('210');
            // await this.master.deposit(0, '0', { from: bob });  // block 211
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log((await this.token.balanceOf(bob)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 900 * 50 + 100 * 0.9 * 50 + 50 * 0.9 * 11);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 100 * 50 + 100 * 0.1 * 50 + 50 * 0.1 * 11);
            // assert.equal((await this.token.totalSupply()).valueOf(), 1000 * 50 + 1250000 + 100 * 1 * 50 + 50 * 11);
            //
            // // two parse test
            // // second halve
            // console.log("======second halve + first parse======");
            // await time.advanceBlockTo('270');
            // console.log('lastHalveBlock before => ', (await this.master.lastHalveBlock()).valueOf().toString());
            // console.log('currentTokenPerBlock before => ', (await this.master.currentTokenPerBlock()).valueOf().toString());
            // console.log('poolTokenPerBlock before => ', (await this.master.poolInfo(0))['tokenPerBlock'].toString());
            // console.log('poollastRewardBlock before => ', (await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // await this.master.deposit(0, '0', { from: bob });  // block 271
            // console.log((await this.master.poolInfo(0))['lastRewardBlock'].toString());
            // console.log('lastHalveBlock after => ', (await this.master.lastHalveBlock()).valueOf().toString());
            // console.log('currentTokenPerBlock after => ', (await this.master.currentTokenPerBlock()).valueOf().toString());
            // console.log('poolTokenPerBlock after => ', (await this.master.poolInfo(0))['tokenPerBlock'].toString());
            // console.log('poollastRewardBlock after => ', (await this.master.poolInfo(0))['lastRewardBlock'].toString());
            //
            // console.log('bob=>', (await this.token.balanceOf(bob)).valueOf().toString());
            // console.log('dev=>', (await this.token.balanceOf(dev)).valueOf().toString());
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), Math.ceil(900 * 50 + 100 * 0.9 * 50 + 50 * 0.9 * 50 + 25 * 0.9 * 21));
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), Math.floor(100 * 50 + 100 * 0.1 * 50 + 50 * 0.1 * 50 + 25 * 0.1 * 21));
            // assert.equal((await this.token.totalSupply()).valueOf(), Math.ceil(1000 * 50 + 1250000 + 100 * 1 * 50 + 50 * 50 + 25 * 21));
            // MAX_TOKEN_MINER Testcase
            // assert.equal((await this.token.balanceOf(bob)).valueOf(), 3000 * 0.85);
            // assert.equal((await this.token.balanceOf(dev)).valueOf(), 3000 * 0.1);
            // assert.equal((await this.token.balanceOf(airdropFc)).valueOf(), 3000 * 0.05);
            // assert.equal((await this.token.totalSupply()).valueOf(), 3000);
         });
    });
    // it('should allow dev and only dev to update dev', async () => {
    //     this.chef = await MasterChef.new(this.sushi.address, dev, '1000', '0', '1000', { from: alice });
    //     assert.equal((await this.chef.devaddr()).valueOf(), dev);
    //     await expectRevert(this.chef.dev(bob, { from: bob }), 'dev: wut?');
    //     await this.chef.dev(bob, { from: dev });
    //     assert.equal((await this.chef.devaddr()).valueOf(), bob);
    //     await this.chef.dev(alice, { from: bob });
    //     assert.equal((await this.chef.devaddr()).valueOf(), alice);
    // })
    //
    // context('With ERC/LP token added to the field', () => {
    //     beforeEach(async () => {
    //         this.lp = await MockERC20.new('LPToken', 'LP', '10000000000', { from: minter });
    //         await this.lp.transfer(alice, '1000', { from: minter });
    //         await this.lp.transfer(bob, '1000', { from: minter });
    //         await this.lp.transfer(carol, '1000', { from: minter });
    //         this.lp2 = await MockERC20.new('LPToken2', 'LP2', '10000000000', { from: minter });
    //         await this.lp2.transfer(alice, '1000', { from: minter });
    //         await this.lp2.transfer(bob, '1000', { from: minter });
    //         await this.lp2.transfer(carol, '1000', { from: minter });
    //     });
    //
    //     it('should allow emergency withdraw', async () => {
    //         // 100 per block farming rate starting at block 100 with bonus until block 1000
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '100', '1000', { from: alice });
    //         await this.chef.add('100', this.lp.address, true);
    //         await this.lp.approve(this.chef.address, '1000', { from: bob });
    //         await this.chef.deposit(0, '100', { from: bob });
    //         assert.equal((await this.lp.balanceOf(bob)).valueOf(), '900');
    //         await this.chef.emergencyWithdraw(0, { from: bob });
    //         assert.equal((await this.lp.balanceOf(bob)).valueOf(), '1000');
    //     });
    //
    //     it('should give out SUSHIs only after farming time', async () => {
    //         // 100 per block farming rate starting at block 100 with bonus until block 1000
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '100', '1000', { from: alice });
    //         await this.sushi.transferOwnership(this.chef.address, { from: alice });
    //         await this.chef.add('100', this.lp.address, true);
    //         await this.lp.approve(this.chef.address, '1000', { from: bob });
    //         await this.chef.deposit(0, '100', { from: bob });
    //         await time.advanceBlockTo('89');
    //         await this.chef.deposit(0, '0', { from: bob }); // block 90
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '0');
    //         await time.advanceBlockTo('94');
    //         await this.chef.deposit(0, '0', { from: bob }); // block 95
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '0');
    //         await time.advanceBlockTo('99');
    //         await this.chef.deposit(0, '0', { from: bob }); // block 100
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '0');
    //         await time.advanceBlockTo('100');
    //         await this.chef.deposit(0, '0', { from: bob }); // block 101
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '1000');
    //         await time.advanceBlockTo('104');
    //         await this.chef.deposit(0, '0', { from: bob }); // block 105
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '5000');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '500');
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '5500');
    //     });
    //
    //     it('should not distribute SUSHIs if no one deposit', async () => {
    //         // 100 per block farming rate starting at block 200 with bonus until block 1000
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '200', '1000', { from: alice });
    //         await this.sushi.transferOwnership(this.chef.address, { from: alice });
    //         await this.chef.add('100', this.lp.address, true);
    //         await this.lp.approve(this.chef.address, '1000', { from: bob });
    //         await time.advanceBlockTo('199');
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '0');
    //         await time.advanceBlockTo('204');
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '0');
    //         await time.advanceBlockTo('209');
    //         await this.chef.deposit(0, '10', { from: bob }); // block 210
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '0');
    //         assert.equal((await this.lp.balanceOf(bob)).valueOf(), '990');
    //         await time.advanceBlockTo('219');
    //         await this.chef.withdraw(0, '10', { from: bob }); // block 220
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '11000');
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '10000');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '1000');
    //         assert.equal((await this.lp.balanceOf(bob)).valueOf(), '1000');
    //     });
    //
    //     it('should distribute SUSHIs properly for each staker', async () => {
    //         // 100 per block farming rate starting at block 300 with bonus until block 1000
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '300', '1000', { from: alice });
    //         await this.sushi.transferOwnership(this.chef.address, { from: alice });
    //         await this.chef.add('100', this.lp.address, true);
    //         await this.lp.approve(this.chef.address, '1000', { from: alice });
    //         await this.lp.approve(this.chef.address, '1000', { from: bob });
    //         await this.lp.approve(this.chef.address, '1000', { from: carol });
    //         // Alice deposits 10 LPs at block 310
    //         await time.advanceBlockTo('309');
    //         await this.chef.deposit(0, '10', { from: alice });
    //         // Bob deposits 20 LPs at block 314
    //         await time.advanceBlockTo('313');
    //         await this.chef.deposit(0, '20', { from: bob });
    //         // Carol deposits 30 LPs at block 318
    //         await time.advanceBlockTo('317');
    //         await this.chef.deposit(0, '30', { from: carol });
    //         // Alice deposits 10 more LPs at block 320. At this point:
    //         //   Alice should have: 4*1000 + 4*1/3*1000 + 2*1/6*1000 = 5666
    //         //   MasterChef should have the remaining: 10000 - 5666 = 4334
    //         await time.advanceBlockTo('319')
    //         await this.chef.deposit(0, '10', { from: alice });
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '11000');
    //         assert.equal((await this.sushi.balanceOf(alice)).valueOf(), '5666');
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(carol)).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(this.chef.address)).valueOf(), '4334');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '1000');
    //         // Bob withdraws 5 LPs at block 330. At this point:
    //         //   Bob should have: 4*2/3*1000 + 2*2/6*1000 + 10*2/7*1000 = 6190
    //         await time.advanceBlockTo('329')
    //         await this.chef.withdraw(0, '5', { from: bob });
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '22000');
    //         assert.equal((await this.sushi.balanceOf(alice)).valueOf(), '5666');
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '6190');
    //         assert.equal((await this.sushi.balanceOf(carol)).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(this.chef.address)).valueOf(), '8144');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '2000');
    //         // Alice withdraws 20 LPs at block 340.
    //         // Bob withdraws 15 LPs at block 350.
    //         // Carol withdraws 30 LPs at block 360.
    //         await time.advanceBlockTo('339')
    //         await this.chef.withdraw(0, '20', { from: alice });
    //         await time.advanceBlockTo('349')
    //         await this.chef.withdraw(0, '15', { from: bob });
    //         await time.advanceBlockTo('359')
    //         await this.chef.withdraw(0, '30', { from: carol });
    //         assert.equal((await this.sushi.totalSupply()).valueOf(), '55000');
    //         assert.equal((await this.sushi.balanceOf(dev)).valueOf(), '5000');
    //         // Alice should have: 5666 + 10*2/7*1000 + 10*2/6.5*1000 = 11600
    //         assert.equal((await this.sushi.balanceOf(alice)).valueOf(), '11600');
    //         // Bob should have: 6190 + 10*1.5/6.5 * 1000 + 10*1.5/4.5*1000 = 11831
    //         assert.equal((await this.sushi.balanceOf(bob)).valueOf(), '11831');
    //         // Carol should have: 2*3/6*1000 + 10*3/7*1000 + 10*3/6.5*1000 + 10*3/4.5*1000 + 10*1000 = 26568
    //         assert.equal((await this.sushi.balanceOf(carol)).valueOf(), '26568');
    //         // All of them should have 1000 LPs back.
    //         assert.equal((await this.lp.balanceOf(alice)).valueOf(), '1000');
    //         assert.equal((await this.lp.balanceOf(bob)).valueOf(), '1000');
    //         assert.equal((await this.lp.balanceOf(carol)).valueOf(), '1000');
    //     });
    //
    //     it('should give proper SUSHIs allocation to each pool', async () => {
    //         // 100 per block farming rate starting at block 400 with bonus until block 1000
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '400', '1000', { from: alice });
    //         await this.sushi.transferOwnership(this.chef.address, { from: alice });
    //         await this.lp.approve(this.chef.address, '1000', { from: alice });
    //         await this.lp2.approve(this.chef.address, '1000', { from: bob });
    //         // Add first LP to the pool with allocation 1
    //         await this.chef.add('10', this.lp.address, true);
    //         // Alice deposits 10 LPs at block 410
    //         await time.advanceBlockTo('409');
    //         await this.chef.deposit(0, '10', { from: alice });
    //         // Add LP2 to the pool with allocation 2 at block 420
    //         await time.advanceBlockTo('419');
    //         await this.chef.add('20', this.lp2.address, true);
    //         // Alice should have 10*1000 pending reward
    //         assert.equal((await this.chef.pendingSushi(0, alice)).valueOf(), '10000');
    //         // Bob deposits 10 LP2s at block 425
    //         await time.advanceBlockTo('424');
    //         await this.chef.deposit(1, '5', { from: bob });
    //         // Alice should have 10000 + 5*1/3*1000 = 11666 pending reward
    //         assert.equal((await this.chef.pendingSushi(0, alice)).valueOf(), '11666');
    //         await time.advanceBlockTo('430');
    //         // At block 430. Bob should get 5*2/3*1000 = 3333. Alice should get ~1666 more.
    //         assert.equal((await this.chef.pendingSushi(0, alice)).valueOf(), '13333');
    //         assert.equal((await this.chef.pendingSushi(1, bob)).valueOf(), '3333');
    //     });
    //
    //     it('should stop giving bonus SUSHIs after the bonus period ends', async () => {
    //         // 100 per block farming rate starting at block 500 with bonus until block 600
    //         this.chef = await MasterChef.new(this.sushi.address, dev, '100', '500', '600', { from: alice });
    //         await this.sushi.transferOwnership(this.chef.address, { from: alice });
    //         await this.lp.approve(this.chef.address, '1000', { from: alice });
    //         await this.chef.add('1', this.lp.address, true);
    //         // Alice deposits 10 LPs at block 590
    //         await time.advanceBlockTo('589');
    //         await this.chef.deposit(0, '10', { from: alice });
    //         // At block 605, she should have 1000*10 + 100*5 = 10500 pending.
    //         await time.advanceBlockTo('605');
    //         assert.equal((await this.chef.pendingSushi(0, alice)).valueOf(), '10500');
    //         // At block 606, Alice withdraws all pending rewards and should get 10600.
    //         await this.chef.deposit(0, '0', { from: alice });
    //         assert.equal((await this.chef.pendingSushi(0, alice)).valueOf(), '0');
    //         assert.equal((await this.sushi.balanceOf(alice)).valueOf(), '10600');
    //     });
    // });
});
