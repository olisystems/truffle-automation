// dependencies
// ----------------------------------------------------------------------

// node modules
const express = require('express');
const bodyParser = require('body-parser');
const web3 = require('web3');

// smart contrct abis
const oli_origin_abi  = require('./js/contracts/abi/oli_origin');
const oli_coin_abi  = require('./js/contracts/abi/oli_coin');
const oli_biliteral_abi  = require('./js/contracts/abi/oli_biliteral');
const oli_daughter_abi  = require('./js/contracts/abi/oli_daughter');
const dynamic_grid_fee_abi  = require('./js/contracts/abi/dynamic_grid_fee');

// smart contract addresses
//const contract_addresses = require('./js/addresses/contract_addresses');
const contractAddr = require('./js/contracts/addresses/addresses');


// set up the http server server
// ----------------------------------------------------------------------------
const app = express();
const port = 8001;
app.listen(process.env.PORT || port);
console.log('\n\n\n\n--> local server is running on port ' + port + '!');
console.log('-- --------------------------------------\n'); 


// set up the app uses
// ----------------------------------------------------------------------------

// public folder for static files (client side)
app.use(express.static('public'));

// enable body parsing for json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
})); 



// web3 interface and smart contract interaction
// ============================================================================

const httpProvider = 'http://localhost:7545';

// initalize a new web3 objekt, through connecting to a local network node 
var tmpWeb3 = new web3(new web3.providers.HttpProvider(httpProvider));   

// set coinbase and default block
coinbase = tmpWeb3.eth.coinbase; 
tmpWeb3.eth.defaultBlock = 'latest';  

console.log('\n-> start web3 interface and interaction!');
console.log('   on: ' + httpProvider);
console.log('   coinbase: '+ tmpWeb3.eth.coinbase + '\n');


// initialize the smart contracts
// ------------------------------
var contractOliOrigin = tmpWeb3.eth.contract(oli_origin_abi.oliOriginAbi);
var contractOliCoin = tmpWeb3.eth.contract(oli_coin_abi.oliCoinAbi);
var contractOliBiliteral = tmpWeb3.eth.contract(oli_biliteral_abi.oliBiliteralAbi);
var contractOliDaughter = tmpWeb3.eth.contract(oli_daughter_abi.oliDaughterAbi);
var contractDynamicGridFee = tmpWeb3.eth.contract(dynamic_grid_fee_abi.dynamicGridFeeAbi);

var contractOliOriginInst = contractOliOrigin.at(contractAddr.addresses.oliOrigin);
var contractOliCoinInst = contractOliCoin.at(contractAddr.addresses.oliCoin);
var contractOliBiliteralInst = contractOliBiliteral.at(contractAddr.addresses.oliDaughter);
var contractOliDaughterInst = contractOliDaughter.at(contractAddr.addresses.oliBiliteral);
var contractDynamicGridFeeInst = contractDynamicGridFee.at(contractAddr.addresses.oliDynamicGridFee);


// create 10 new initial accounts 
// if only the ganache default accounts are there (number of accounts < 11)
if (tmpWeb3.eth.accounts.length < 11) {
    for (i = 0; i < 10; i++) {
        tmpWeb3.personal.newAccount('oli');
        console.log('log: account was created');      
    };
};


// Transact from Ganache account nr. 5 to all 10 new created acounts 2000000000000 wei each 
if (tmpWeb3.eth.getBalance(tmpWeb3.eth.accounts[10]) < 2000000000000000000 ) { 
    for (i = 10; i < tmpWeb3.eth.accounts.length; i++) {
        tmpWeb3.eth.sendTransaction({
            from: tmpWeb3.eth.accounts[4],
            to: tmpWeb3.eth.accounts[i],
            value: '2000000000000000000'
        })
        console.log('log: 2000000000000000000 wei were transfered from account: ' + tmpWeb3.eth.accounts[4] + ' to account: ' + tmpWeb3.eth.accounts[i] + '.');
    }
}


// setup acounts
var account_11 = tmpWeb3.eth.accounts[10];
var account_12 = tmpWeb3.eth.accounts[11];
var account_13 = tmpWeb3.eth.accounts[12];
var account_14 = tmpWeb3.eth.accounts[13];
var account_15 = tmpWeb3.eth.accounts[14];
var account_16 = tmpWeb3.eth.accounts[15];
var account_17 = tmpWeb3.eth.accounts[16];
var account_18 = tmpWeb3.eth.accounts[17];
var account_19 = tmpWeb3.eth.accounts[18];
var account_20 = tmpWeb3.eth.accounts[19];

// unlock accounts
tmpWeb3.personal.unlockAccount(account_11, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_12, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_13, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_14, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_15, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_16, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_17, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_18, 'oli', 600);
tmpWeb3.personal.unlockAccount(account_19, 'oli', 600);
//tmpWeb3.personal.unlockAccount(account_20, 'oli', 600);

console.log('\nlog: accounts are unlocked.');

// Register oli boxes
/*
contractOliOriginInst.addOli.sendTransaction(account_11, 493000, 83500, 67376, 0, 0, [990], {from: account_11});
contractOliOriginInst.addOli.sendTransaction(account_12, 494700, 84700, 67376, 0, 0, [650], {from: account_12});
contractOliOriginInst.addOli.sendTransaction(account_13, 484200, 10070, 67376, 0, 0, [730], {from: account_13});
contractOliOriginInst.addOli.sendTransaction(account_14, 488000, 92200, 67376, 0, 0, [995], {from: account_14});
contractOliOriginInst.addOli.sendTransaction(account_15, 488700, 92200, 67376, 0, 0, [825], {from: account_15});
contractOliOriginInst.addOli.sendTransaction(account_16, 488700, 91900, 67376, 0, 0, [117], {from: account_16});
contractOliOriginInst.addOli.sendTransaction(account_17, 488100, 91800, 67376, 0, 0, [487], {from: account_17});
contractOliOriginInst.addOli.sendTransaction(account_18, 484000, 99600, 67376, 0, 0, [467], {from: account_18});
contractOliOriginInst.addOli.sendTransaction(account_19, 485000, 10060, 67376, 0, 0, [634], {from: account_19});
//contractOliOriginInst.addOli.sendTransaction(account_20, 486000, 10160, 67376, 0, 0, [980], {from: account_11});
*/


// OliDaughterAuction -> feed the consumer and producer values
// -----------------------------------------------------------

/*
try {
    contractOliDaughterInst.bid.sendTransaction(350, 3, {from: tmpWeb3.eth.accounts[0]}, function (error, result){
        if (error) {
            console.log('request error fo contractOliDaughter: ' + error);
        }
        else {
            console.log('request result of contractOliDaughter: ' + result); 
        }
    }); 
} 
catch(err) {
    console.log(err);
}
*/

// Examples for getting different information
// ------------------------------------------

//console.log('\ninof: number of accounts: ' + tmpWeb3.eth.accounts.length + '\n');

//console.log('\n\ntransaction info: \n-----------------'); 
//console.log('number of transactions of initial account 5: ' + tmpWeb3.eth.getTransactionCount(tmpWeb3.eth.accounts[4])); 

// Balance - Check example:
// console.log(tmpWeb3.eth.getBalance(tmpWeb3.eth.accounts[10])); 


/*
console.log('\n\ncontract oliOrigin address: ' + contractOliOriginInst.address);

let resOrigin = contractOliOriginInst.addOli.sendTransaction(account_11, 493000, 83500, 67376, 0, 0, [990], {from: account_11});
console.log(resOrigin); 

try {
    contractOliDaughterInst.bid.sendTransaction(350, 3, {from: account_11}, function (error, result){
        if (error) {
            console.log('request error fo contractOliDaughter: ' + error);
        }
        else {
            console.log('request result of contractOliDaughter: ' + result); 
        }
    }); 
} 
catch(err) {
    console.log(err);
}
*/








