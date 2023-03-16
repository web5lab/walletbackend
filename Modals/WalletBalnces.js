const Web3 = require("web3");
const {TestnetRpc,MainnetRpc} = require('../Config/Config');
const {TestnetContract,MainnetContract} = require('../Config/SmartContarct');
const contractAbi = require('../Config/abi.json')

const web3EthTestnet = new Web3(TestnetRpc.Eth);
const web3BscTestnet = new Web3(TestnetRpc.Bsc);
const web3MaticTestnet = new Web3(TestnetRpc.Matic);

const CheckBalanceTestnet = (userAddress,networkName,TokenName) => {
    try {
        if(networkName == "Eth"){
          checkBalanceEthTestnet(userAddress,TokenName)
        }if(networkName == "Bsc"){
          checkBalanceBscTestnet(userAddress,TokenName)
        }if(networkName == "Matic"){
          checkBalancePolygonTestnet(userAddress,TokenName)
        }else{
            return "invalid NetWork"
        }
    } catch (error) {
        console.log(error)
    }
}

const checkBalancePolygonTestnet = (userAddress,TokenName) => {
    try {
        if(TokenName == "Usdt"){
         const UsdtInterface = new web3MaticTestnet.eth.Contract(contractAbi,TestnetContract.Usdtmatic);
         UsdtInterface.methods.balanceOf(userAddress).call((error, result) => {
            if (error) {
              console.log(error);
            } else {
              const balance = result / 1e6; // USDT has 6 decimal places, so divide by 1e6 to get the balance in USDT
              console.log(`USDT balance of ${address}: ${balance}`);
            }
          });
        }if(TokenName == "Busd"){

        }if(TokenName == "TestCoin"){

        }else{
            return "invalid Token Name"
        }
    } catch (error) {
        
    }
}

const checkBalanceBscTestnet = (userAddress,TokenName) => {
    try {
        if(TokenName == "Usdt"){

        }if(TokenName == "Busd"){

        }if(TokenName == "TestCoin"){

        }else{
            return "invalid Token Name"
        }
    } catch (error) {
        
    }
}

const checkBalanceEthTestnet = (userAddress,TokenName) => {
    try {
        if(TokenName == "Usdt"){

        }if(TokenName == "Busd"){

        }if(TokenName == "TestCoin"){

        }else{
            return "invalid Token Name"
        }
    } catch (error) {
        
    }
}

module.exports = {
    CheckBalanceTestnet
}