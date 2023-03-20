const {TestnetRpc,TestnetContract,testnetWallet} = require('../../Config/Config');
const Web3 = require('web3');
const abi = require('../../Config/abi.json')
const testnetInstance ={
    web3bsc : new Web3(TestnetRpc.Bsc),
    web3eth : new Web3(TestnetRpc.Eth),
    web3matic : new Web3(TestnetRpc.Matic)
}

console.log(testnetInstance);