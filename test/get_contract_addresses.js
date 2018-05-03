let OliCoin = artifacts.require('./OliCoin.sol');
let BilateralTrading = artifacts.require('./BilateralTrading.sol');
let DynamicGridFee = artifacts.require('./DynamicGridFee.sol');
let DaughterAuction = artifacts.require('./DaughterAuction.sol');
let OliDetail = artifacts.require('./OliDetail.sol');
let ParentAuction = artifacts.require('./ParentAuction.sol');
let OliOrigin = artifacts.require('./OliOrigin.sol');


console.log('\n\nContract Addresses:');
console.log('------------------------------------------');


contract('OliCoin', accounts => {
    OliCoin.deployed().then(instance => {
        console.log('\nOliCoin Address:')
        console.log(instance.address); 
    });
});

contract('OliOrigin', accounts => {
    OliOrigin.deployed().then(instance => {
        console.log('\nOliOrigin Address:')
        console.log(instance.address); 
    });
});

contract('BilateralTrading', accounts => {
    BilateralTrading.deployed().then(instance => {
        console.log('\nBilateralTrading Address:')
        console.log(instance.address); 
    });
});

contract('DynamicGridFee', accounts => {
    DynamicGridFee.deployed().then(instance => {
        console.log('\nDynamicGridFee Address:')
        console.log(instance.address); 
    });
});

contract('DaughterAuction', accounts => {
    DaughterAuction.deployed().then(instance => {
        console.log('\nDaughterAuction Address:')
        console.log(instance.address); 
    });
});

contract('OliDetail', accounts => {
    OliDetail.deployed().then(instance => {
        console.log('\nOliDetail Address:')
        console.log(instance.address); 
    });
});

contract('ParentAuction', accounts => {
    ParentAuction.deployed().then(instance => {
        console.log('\nParentAuction Address:')
        console.log(instance.address + '\n\n'); 
    });
});


