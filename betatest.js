const Web3 = require('web3');
const batchSize = 4; // Number of wallet addresses to monitor per batch

const web3 = new Web3('https://data-seed-prebsc-2-s1.binance.org:8545'); // Replace with your Infura project ID

const walletAddresses = [ "0x0e170E7Efe1458fe9049ACeC8B4433b79a0A7DBB",
"0x8045287B546E4fB8C069553fA972FF52eaB5AE78",
"0x7029b7cf6529c1aCB430c23490F6843F8DA21629",
"0x3C301e2E3B007430497a76776d2db0bF320DdeC1",
"0x5506de5a5D9D9b74881862e3f33FAAE854baD5e2"

];

async function monitorWallets() {
  try {
    const latestBlockNumber = await web3.eth.getBlockNumber();

    // Split the wallet addresses into batches of batchSize
    const batches = [];
    for (let i = 0; i < walletAddresses.length; i += batchSize) {
      batches.push(walletAddresses.slice(i, i + batchSize));
    }

    // Create a batch object
    const batch = new web3.BatchRequest();

    // Monitor each batch in parallel
    batches.forEach((batchAddresses) => {
      const batchRequest = web3.eth.abi.encodeFunctionCall({
        name: 'getBatchTransactionsByAddress',
        type: 'function',
        inputs: [{
          type: 'address[]',
          name: 'addresses'
        }, {
          type: 'uint256',
          name: 'fromBlock'
        }]
      }, [batchAddresses, latestBlockNumber]);

      batch.add(web3.eth.call.request({ to: web3.eth.defaultAccount, data: batchRequest }, (error, result) => {
        if (error) {
          console.error(error);
          return;
        }

        const transactions = web3.eth.abi.decodeParameters([{
          type: 'tuple[]',
          components: [{
            type: 'address',
            name: 'from'
          }, {
            type: 'address',
            name: 'to'
          }, {
            type: 'uint256',
            name: 'value'
          }, {
            type: 'bytes',
            name: 'data'
          }, {
            type: 'uint256',
            name: 'blockNumber'
          }, {
            type: 'bytes32',
            name: 'hash'
          }, {
            type: 'uint256',
            name: 'transactionIndex'
          }]
        }], result);

        // Group the transactions by wallet address
        const transactionsByAddress = {};
        transactions.forEach((tx) => {
          if (!transactionsByAddress[tx.to.toLowerCase()]) {
            transactionsByAddress[tx.to.toLowerCase()] = [];
          }
          transactionsByAddress[tx.to.toLowerCase()].push(tx);
        });

        // Print incoming deposits for each wallet address with new transactions
        Object.entries(transactionsByAddress).forEach(([address, txs]) => {
          console.log(`Found ${txs.length} incoming deposits to ${address}:`);
          txs.forEach((tx) => {
            console.log(`- TxHash: ${tx.hash}, Value: ${web3.utils.fromWei(tx.value)} ETH`);
          });
        });
      }));
    });

    // Execute the batch request
    batch.execute();

   


    // Schedule the next check in 2 minute
    setTimeout(monitorWallets, 120000);
  } catch (error) {
    console.log("err");
    // next checkin will be happen in next two minute
    setTimeout(monitorWallets, 120000);
  }
}

monitorWallets();
