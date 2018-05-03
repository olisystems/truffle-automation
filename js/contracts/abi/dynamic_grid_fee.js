const dynamicGridFeeAbi = 
   [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tid",
                    "type": "uint32"
                },
                {
                    "name": "_index",
                    "type": "uint8"
                }
            ],
            "name": "get_gridFee",
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
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint16"
                }
            ],
            "name": "set_trafocamount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
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
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint16"
                }
            ],
            "name": "set_cktcamount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
                    "name": "_tid",
                    "type": "uint32"
                }
            ],
            "name": "set_tgridFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_tid",
                    "type": "uint32"
                },
                {
                    "name": "_index",
                    "type": "uint8"
                }
            ],
            "name": "get_cktAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "int16"
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
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "get_tGFee",
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
            "constant": false,
            "inputs": [
                {
                    "name": "_address",
                    "type": "address"
                },
                {
                    "name": "_fee",
                    "type": "uint8[]"
                }
            ],
            "name": "set_minmaxgfee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint16"
                }
            ],
            "name": "set_traforamount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "get_dGFee",
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
            "constant": false,
            "inputs": [
                {
                    "name": "_tid",
                    "type": "uint32"
                }
            ],
            "name": "set_dgridFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint64"
                }
            ],
            "name": "set_cktramount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "get_trafoAmount",
            "outputs": [
                {
                    "name": "",
                    "type": "int16"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

module.exports = {dynamicGridFeeAbi}; 