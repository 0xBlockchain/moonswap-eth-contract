const { expectRevert, time } = require('@openzeppelin/test-helpers');
const ethers = require('ethers');
const MoonToken = artifacts.require('MoonToken');
const Timelock = artifacts.require('Timelock');

function encodeParameters(types, values) {
    const abi = new ethers.utils.AbiCoder();
    return abi.encode(types, values);
}

contract('Timelock', ([alice, bob, carol]) => {
    beforeEach(async () => {
        this.token = await MoonToken.new({ from: alice });
        // 259200  86400
        this.timelock = await Timelock.new(bob, '86400', { from: alice });
        await this.token.transferOwnership(this.timelock.address, { from: alice });
    });

    it('should not allow non-owner to do operation', async () => {
        console.log('timelock_address =>', this.timelock.address);
        console.log('owner => ', (await this.token.owner()).valueOf());
        await expectRevert(
            this.token.transferOwnership(carol, { from: alice }),
            'Ownable: caller is not the owner',
        );
        await expectRevert(
            this.token.transferOwnership(carol, { from: bob }),
            'Ownable: caller is not the owner',
        );
        await expectRevert(
            this.timelock.queueTransaction(
                this.token.address, '0', 'transferOwnership(address)',
                encodeParameters(['address'], [carol]),
                (await time.latest()).add(time.duration.days(4)),
                { from: alice },
            ),
            'Timelock::queueTransaction: Call must come from admin.',
        );
    });

    it('should do the timelock thing', async () => {
        const eta = (await time.latest()).add(time.duration.days(4));
        console.log('latest =>', (await time.latest()).toString());
        console.log('eta =>', eta.toString());
        let resp = await this.timelock.queueTransaction(
            this.token.address, '0', 'transferOwnership(address)',
            encodeParameters(['address'], [carol]), eta, { from: bob },
        );

        await time.increase(time.duration.days(1));
        await expectRevert(
            this.timelock.executeTransaction(
                this.token.address, '0', 'transferOwnership(address)',
                encodeParameters(['address'], [carol]), eta, { from: bob },
            ),
            "Timelock::executeTransaction: Transaction hasn't surpassed time lock.",
        );
        await time.increase(time.duration.days(4));

        await this.timelock.executeTransaction(
            this.token.address, '0', 'transferOwnership(address)',
            encodeParameters(['address'], [carol]), eta, { from: bob },
        );
        assert.equal((await this.token.owner()).valueOf(), carol);
    });
});
