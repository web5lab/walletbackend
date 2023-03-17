const Web3 = require("web3");
const { TestnetRpc, MainnetRpc } = require('../Config/Config');
const { TestnetContract, MainnetContract } = require('../Config/SmartContarct');
const contractAbi = require('../Config/abi.json')

const web3EthTestnet = new Web3(TestnetRpc.Eth);
const web3BscTestnet = new Web3(TestnetRpc.Bsc);
const web3MaticTestnet = new Web3(TestnetRpc.Matic);

const CheckBalanceTestnet = async (userAddress, networkName, TokenName) => {
        if (networkName == "Eth") {
            checkBalanceEthTestnet(userAddress, TokenName)
        }else if (networkName == "Bsc") {
            checkBalanceBscTestnet(userAddress, TokenName)
        }else if (networkName == "Matic") {
            const t = await checkBalancePolygonTestnet(userAddress, TokenName)
            return t;
        } else {
            return "invalid NetWork"
        }
    
}

const checkBalancePolygonTestnet = async (userAddress, TokenName) => {
    try {
        if (TokenName == "Usdt") {
            try {
               const UsdtInterface = new web3MaticTestnet.eth.Contract(contractAbi, TestnetContract.Usdtmatic);
               const t = await UsdtInterface.methods.balanceOf(userAddress).call((error, result) => {
                    if (error) {
                        console.log(error);
                    } else {
                        const balance = result / 1e6; // USDT has 6 decimal places, so divide by 1e6 to get the balance in USDT
                        const obj =  `USDT balance of ${userAddress}: ${balance}`
                        return obj;
                    
                    }
                });
                return t;
            } catch (error) {
            }
        } else if (TokenName == "Busd") {

        } else if (TokenName == "TestCoin") {
     
        }else {

        }
    } catch (error) {

    }
}

const checkBalanceBscTestnet = (userAddress, TokenName) => {
    try {
        if (TokenName == "Usdt") {

        }else if (TokenName == "Busd") {

        }else if (TokenName == "TestCoin") {

        } else {
            return "invalid Token Name"
        }
    } catch (error) {

    }
}

const checkBalanceEthTestnet = (userAddress, TokenName) => {
    try {
        if (TokenName == "Usdt") {

        } if (TokenName == "Busd") {

        } if (TokenName == "TestCoin") {

        } else {
            return "invalid Token Name"
        }
    } catch (error) {

    }
}

module.exports = {
    CheckBalanceTestnet
}