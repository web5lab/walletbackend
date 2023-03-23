const {TestnetRpc} = require('../../config/Config')
const {TestnetContract} = require('../../config/Config')
const Web3 = require("web3");
const abi = require("../../config/abi.json");


const testnetInstance = {
    web3bsc: new Web3(TestnetRpc.Bsc),
    web3eth: new Web3(TestnetRpc.Eth),
    web3matic: new Web3(TestnetRpc.Matic),
};

const ContractInstance = {
    usdtBsc: new testnetInstance.web3bsc.eth.Contract(
        abi,
        TestnetContract.UsdtBsc
    ),
    busdBsc: new testnetInstance.web3bsc.eth.Contract(
        abi,
        TestnetContract.BusdBsc
    ),
    testPayBsc: new testnetInstance.web3bsc.eth.Contract(
        abi,
        TestnetContract.TestCoinBsc
    ),
    usdtEth: new testnetInstance.web3eth.eth.Contract(
        abi,
        TestnetContract.UsdtEth
    ),
    busdEth: new testnetInstance.web3eth.eth.Contract(
        abi,
        TestnetContract.busdEth
    ),
    testPayEth: new testnetInstance.web3eth.eth.Contract(
        abi,
        TestnetContract.TestCoinEth
    ),
    usdtMatic: new testnetInstance.web3matic.eth.Contract(
        abi,
        TestnetContract.Usdtmatic
    ),
    busdMatic: new testnetInstance.web3matic.eth.Contract(
        abi,
        TestnetContract.BusdMatic
    ),
    testPayMatic: new testnetInstance.web3matic.eth.Contract(
        abi,
        TestnetContract.TestCoinMatic
    ),
};

module.exports = {
    ContractInstance,
    testnetInstance
}