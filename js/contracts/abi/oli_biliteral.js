const oliBiliteralAbi = 
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "setOliOrigin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_stock",
                    "type": "address"
                },
                {
                    "name": "_rate",
                    "type": "uint8"
                }
            ],
            "name": "stockBidding",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_stock",
                    "type": "address"
                }
            ],
            "name": "get_stockAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint16"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint16"
                },
                {
                    "name": "_rate",
                    "type": "uint8"
                },
                {
                    "name": "_period",
                    "type": "uint32"
                },
                {
                    "name": "_btime",
                    "type": "uint32"
                }
            ],
            "name": "regStock",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_stock",
                    "type": "address"
                }
            ],
            "name": "get_stockBidder",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_stock",
                    "type": "address"
                }
            ],
            "name": "get_stockRate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "saccount",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "samount",
                    "type": "uint16"
                },
                {
                    "indexed": false,
                    "name": "smrate",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "name": "speriod",
                    "type": "uint32"
                },
                {
                    "indexed": false,
                    "name": "sbiddingTime",
                    "type": "uint32"
                }
            ],
            "name": "NewStock",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "baccount",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "bmrate",
                    "type": "uint8"
                }
            ],
            "name": "NewStockBid",
            "type": "event"
        }
    ]; 
 
module.exports = {oliBiliteralAbi}; 