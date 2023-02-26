/*
contract with users
users have amounts
can withdraw, or deposit
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Account {
    mapping(address => uint) public balance;

    function get_balance() public view returns (uint) {
        return balance[msg.sender];
    }

    function deposit() public payable {
        require(msg.value > 0);
        balance[msg.sender] += msg.value;
    }

    function withdraw(uint _i) public {
        uint b = balance[msg.sender];
        require(_i > 0);
        require(b >= _i);
        require(b <= address(this).balance);
        balance[msg.sender] -= _i;
        payable(msg.sender).transfer(_i);
    }
}