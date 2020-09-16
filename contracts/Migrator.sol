pragma solidity 0.6.12;

import "./uniswapv2/interfaces/IUniswapV2Pair.sol";
import "./uniswapv2/interfaces/IUniswapV2Factory.sol";
import "./uniswapv2/interfaces/ICrosschainPair.sol";
import "./uniswapv2/interfaces/ICrosschainFactory.sol";


contract Migrator {
    address public master;
    address public oldFactory;
    ICrosschainFactory public factory;
    uint256 public notBeforeBlock;
    uint256 public desiredLiquidity = uint256(-1);

    constructor(
        address _master,
        address _oldFactory,
        ICrosschainFactory _factory,
        uint256 _notBeforeBlock
    ) public {
        master = _master;
        oldFactory = _oldFactory;
        factory = _factory;
        notBeforeBlock = _notBeforeBlock;
    }

    function migrate(IUniswapV2Pair orig) public returns (ICrosschainPair) {
        require(msg.sender == master, "not from master access");
        require(block.number >= notBeforeBlock, "too early to migrate");
        require(orig.factory() == oldFactory, "not from old factory");
        address token0 = orig.token0();
        address token1 = orig.token1();
        ICrosschainPair pair = ICrosschainPair(factory.getPair(token0, token1));
        if (pair == ICrosschainPair(address(0))) {
            pair = ICrosschainPair(factory.createPair(token0, token1));
        }

        uint256 lp = orig.balanceOf(msg.sender);
        if (lp == 0) return pair;
        desiredLiquidity = lp;
        orig.transferFrom(msg.sender, address(orig), lp);
        orig.burn(address(pair));
        pair.mint(msg.sender);
        desiredLiquidity = uint256(-1);

        return pair;
    }
}
