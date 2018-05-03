const oliOriginAbi = 
    [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "get_oliType",
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
            "constant": true,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "get_oliCkt",
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
            "inputs": [],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "get_oliTrafoid",
            "outputs": [
                {
                    "name": "",
                    "type": "uint32"
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
                    "name": "_tid",
                    "type": "uint32"
                }
            ],
            "name": "get_gsoAddr",
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
                    "name": "_account",
                    "type": "address"
                },
                {
                    "name": "_index",
                    "type": "uint8"
                }
            ],
            "name": "get_oliPeakLoad",
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
            "inputs": [
                {
                    "name": "oli",
                    "type": "address"
                },
                {
                    "name": "lat",
                    "type": "uint32"
                },
                {
                    "name": "long",
                    "type": "uint32"
                },
                {
                    "name": "trafo",
                    "type": "uint32"
                },
                {
                    "name": "ckt",
                    "type": "uint8"
                },
                {
                    "name": "typex",
                    "type": "uint8"
                },
                {
                    "name": "pload",
                    "type": "uint16[]"
                }
            ],
            "name": "addOli",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "paymentAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "latOfLocation",
                    "type": "uint32"
                },
                {
                    "indexed": false,
                    "name": "longOfLocation",
                    "type": "uint32"
                }
            ],
            "name": "newAddedOli",
            "type": "event"
        }
    ]; 

module.exports={oliOriginAbi}; 