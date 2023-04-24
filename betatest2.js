const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545'); // Replace with your own Infura project ID or URL

const address = '0x0e170E7Efe1458fe9049ACeC8B4433b79a0A7DBB'; // Replace with the address you want to check

web3.eth.getTransactionCount(address, (error, count) => {
  if (error) {
    console.error(error);
  } else {
    if (count > 0) {
      console.log('Transactions have occurred on address:', address,count);
    } else {
      console.log('No transactions have occurred on address:', address);
    }
  }
});
