// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Funder {
uint256 public numberofFunders;
mapping(uint256=>address) private funders;
receive() external payable{

}
function transfer() external payable{
    funders[numberofFunders]=msg.sender;
}
function withraw(uint amount) external payable{
    require(amount<= 2 ether,"Amount greater than 2 ether");
    payable(msg.sender).transfer(amount);
}
}