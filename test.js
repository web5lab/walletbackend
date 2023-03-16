const Web3 = require('web3');
const USDT_ABI = [{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
const USDT_ADDRESS = "0xdac17f958d2ee523a2206206994597c13d831ec7"; // USDT contract address
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR-PROJECT-ID'); // Replace YOUR-PROJECT-ID with your Infura project ID
const usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
const address = "0x1234567890123456789012345678901234567890"; // Replace with the address you want to check

usdtContract.methods.balanceOf(address).call((error, result) => {
  if (error) {
    console.log(error);
  } else {
    const balance = result / 1e6; // USDT has 6 decimal places, so divide by 1e6 to get the balance in USDT
    console.log(`USDT balance of ${address}: ${balance}`);
  }
});
