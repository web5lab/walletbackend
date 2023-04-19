const { json } = require('body-parser');
const Web3 = require('web3')

const MonitorBlock = () => {
//   const web3 = new Web3('wss://bsc.getblock.io/0b7a547e-cca3-435a-a9f7-f6e9fcdfea01/mainnet');
  const web3 = new Web3('wss://mainnet.infura.io/ws/v3/4e21d58207584e75a4cbea092f210b3a');

  web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(`New block received: ${blockHeader.number}`);

    web3.eth.subscribe('pendingTransactions', (error, transactionHash) => {
      if (error) {
        console.error(error);
        return;
      }

    //   console.log(`Transaction received: ${transactionHash}`);

      web3.eth.getTransaction(transactionHash, (error, transaction) => {
        if (error) {
          console.error(error);
          return;
        }
        try {
            let t =transaction
        console.log(t);
        } catch (error) {
            
        }
        
       
       
      });
    });
    return
  });
}

MonitorBlock();
