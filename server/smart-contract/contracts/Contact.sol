// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContactStorage {
    address public owner;
    
    struct Contact {
        string name;
        string phoneNumber;
        string email;
    }
    
    mapping(address => Contact) private contacts;
    address[] private contactAddresses;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(string memory _ownerName, string memory _ownerPhoneNumber, string memory _ownerEmail) {
        owner = msg.sender;
        contacts[owner] = Contact(_ownerName, _ownerPhoneNumber, _ownerEmail);
        contactAddresses.push(owner);
    }

    function addContact(string memory _name, string memory _phoneNumber, string memory _email) external {
        Contact memory newContact = Contact(_name, _phoneNumber, _email);
        contacts[msg.sender] = newContact;
        contactAddresses.push(msg.sender);
    }

    function getContact(address _userAddress) external view returns (string memory, string memory, string memory) {
        Contact memory contact = contacts[_userAddress];
        return (contact.name, contact.phoneNumber, contact.email);
    }

    function getAllContacts() external view onlyOwner returns (Contact[] memory) {
        Contact[] memory allContacts = new Contact[](contactAddresses.length);
        for (uint256 i = 0; i < contactAddresses.length; i++) {
            allContacts[i] = contacts[contactAddresses[i]];
        }
        return allContacts;
    }
}
