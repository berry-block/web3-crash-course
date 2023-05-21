// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Chinpokomon is ERC721, Ownable {
    uint256 public tokenPrice;
    uint256 public tokenCount;
    uint256 public maxSupply;

    string private baseURI;

    constructor(
        uint256 _tokenPrice,
        uint256 _maxSupply,
        string memory baseURI_
    ) ERC721("Chinpokomon", "CPK") {
        maxSupply = _maxSupply;
        tokenPrice = _tokenPrice;
        baseURI = baseURI_;
    }

    function mint() external payable {
        require(msg.value >= tokenPrice, "token underpriced");
        require(tokenCount < maxSupply, "max supply minted");

        _mint(msg.sender, tokenCount++);
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function setBaseURI(string memory baseURI_) external onlyOwner {
        baseURI = baseURI_;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}
