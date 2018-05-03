// set required artifacts for truffle
// --------------------------------------------------------

var oliDetail = artifacts.require("OliDetail");
var oliCoin = artifacts.require("OliCoin");
var parentAuction = artifacts.require("ParentAuction");
var daughterAuction = artifacts.require("DaughterAuction");
var bilateralTrading = artifacts.require("BilateralTrading");
var dynamicGridFee = artifacts.require("DynamicGridFee");
var oliOrigin = artifacts.require("OliOrigin"); 


// constants, global variables and requirements
// --------------------------------------------------------

var fs = require('../node_modules/file-system');
const pathRel = '../js/contracts/addresses/addresses.js';
const pathRoot = './js/contracts/addresses/addresses.js'


// check if address file exists -> If not create
// --------------------------------------------------------

if (!fs.existsSync(pathRel)){
	fs.writeFile(pathRel, '//contract addresses: ', function (err) {
		if (err){
			console.log(err);
		}
		else {
			console.log('file ..' + pathRel + ' was created!');
		}
	});
}


// truffle deployment
// --------------------------------------------------------

module.exports = function(deployer) {
	
	deployer.deploy(oliDetail).then(function(){
		fs.appendFile(pathRoot, '\n\toliDetail: ' + "'" + oliDetail.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});
	
	deployer.deploy(oliCoin).then(function(){
		fs.appendFile(pathRoot, '\n\toliCoin: ' + "'" + oliCoin.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});

	deployer.deploy(parentAuction).then(function(){
		fs.appendFile(pathRoot, '\n\tparentAuction: ' + "'" + parentAuction.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});

	deployer.deploy(daughterAuction).then(function(){
		fs.appendFile(pathRoot, '\n\tdaughterAuction: ' + "'" + daughterAuction.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});

	deployer.deploy(bilateralTrading).then(function(){
		fs.appendFile(pathRoot, '\n\tbilateralTrading: ' + "'" + bilateralTrading.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});

	deployer.deploy(dynamicGridFee).then(function(){
		fs.appendFile(pathRoot, '\n\tdynamicGridFee: ' + "'" + dynamicGridFee.address + "',", function (err) {
			if (err) {
				console.log(err);
			};
		}); 
	});

	deployer.deploy(oliOrigin).then(function(){
		fs.appendFile(pathRoot, '\n\toliOrigin: ' + "'" + oliOrigin.address + "'", function (err) {
			if (err) {
				console.log(err);
			};
		});
	});

};