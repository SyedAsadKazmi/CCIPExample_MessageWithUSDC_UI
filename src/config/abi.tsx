export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "CCIPMessageWithUSDC__InsufficientUSDCBalance",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CCIPMessageWithUSDC__NotFundedWithEnoughLINK",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "CCIPMessageWithUSDC__NotOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "messageId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "sourceChainSelector",
                        "type": "uint64"
                    },
                    {
                        "internalType": "bytes",
                        "name": "sender",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct Client.EVMTokenAmount[]",
                        "name": "destTokenAmounts",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct Client.Any2EVMMessage",
                "name": "message",
                "type": "tuple"
            }
        ],
        "name": "ccipReceive",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "router",
                "type": "address"
            }
        ],
        "name": "InvalidRouter",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NetworkConfig__NetworkNotSupported",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "receivedMessage",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "receivedAmount",
                "type": "uint256"
            }
        ],
        "name": "MessageReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "messageId",
                "type": "bytes32"
            }
        ],
        "name": "MessageSent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "messageString",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amountOfUsdc",
                "type": "uint256"
            },
            {
                "internalType": "uint64",
                "name": "destinationChainId",
                "type": "uint64"
            },
            {
                "internalType": "address",
                "name": "destinationContractAddress",
                "type": "address"
            }
        ],
        "name": "publishMessageWithUSDC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawLINK",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawUSDC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalanceOfLINK",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalanceOfUSDC",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentNetworkName",
        "outputs": [
            {
                "internalType": "string",
                "name": "networkName",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLastReceivedMessage",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLastReceivedUSDC",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRouter",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
]