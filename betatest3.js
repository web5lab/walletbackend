const Web3 = require('web3');

async function subscribeToTransferEvents(accountAddress, projectId) {
  const web3 = new Web3(`https://mainnet.infura.io/v3/${projectId}`);

  // create an instance of the web3.eth subscription object
  const subscription = await web3.eth.subscribe('logs', {
    address: [accountAddress],
    topics: [
      // ERC20 Transfer event signature
      '0xa9059cbb000000000000000000000000' + accountAddress.substring(2),
      // Ether transfer event signature
      '0x' + '0'.repeat(24) + accountAddress.substring(2)
    ]
  }, function(error, result) {
    if (!error) {
      console.log(result);
    }
  })
  .on('data', function(log) {
    console.log(log);
  })
  .on('error', console.error);

  return subscription;
}

// example usage
subscribeToTransferEvents('0x1234567890123456789012345678901234567890', 'YOUR_PROJECT_ID');