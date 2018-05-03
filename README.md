# truffle-automation

The project is implemented as node.js project and contains some basic examples of how to set up an interaction of web3.js and an Ethereum network. 
The interaction examples are set up in the server.js.

As well there is an automation process implemented, that deploys solidity smart contracts to the Ethereum network by using the developer framework truffle. During the automation process all addresses of the deployed contracts are automatically written into a file, that can be used in the in other files for the interaction with the Ethereum network. These address are stored in:

. \js\contracts\addresses\addresses.js

How to perform the automation:
1.)	Download, install and run the Ethereum test network ganache
http://truffleframework.com/ganache/

2.)	Install the Ethereum development framework truffle
http://truffleframework.com/


The server.js file 
