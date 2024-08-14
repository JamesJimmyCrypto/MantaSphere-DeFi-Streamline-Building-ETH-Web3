// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MantaToken is ERC20, Ownable {
    uint256 private immutable _cap;

    event TokensMinted(address indexed to, uint256 amount);
    event TokensBurned(address indexed burner, uint256 amount);

    constructor(
        uint256 initialSupply, //10000000
        uint256 cap_ //100000000
    ) ERC20("MantaToken", "MANTA") Ownable(msg.sender) {
        require(cap_ > 0, "Cap is 0");
        require(initialSupply <= cap_, "Initial supply exceeds cap");
        _cap = cap_;
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18; // You can change this if you want a different number of decimals
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= _cap, "ERC20Capped: cap exceeded");
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }

    function cap() public view returns (uint256) {
        return _cap;
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
        emit TokensBurned(msg.sender, amount);
    }
}
