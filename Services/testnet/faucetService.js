const {TestnetRpc,TestnetContract,testnetWallet} = require('../../Config/Config');
const Web3 = require('web3');
const abi = require('../../Config/abi.json')
const testnetInstance ={
    web3bsc : new Web3(TestnetRpc.Bsc),
    web3eth : new Web3(TestnetRpc.Eth),
    web3matic : new Web3(TestnetRpc.Matic)
}

const ContractInstance = {
    usdtBsc : new testnetInstance.web3bsc.eth.Contract(abi,TestnetContract.UsdtBsc),
    busdBsc : new testnetInstance.web3bsc.eth.Contract(abi,TestnetContract.BusdBsc),
    testPayBsc : new testnetInstance.web3bsc.eth.Contract(abi,TestnetContract.TestCoinBsc),
    usdtEth : new testnetInstance.web3eth.eth.Contract(abi,TestnetContract.UsdtEth),
    busdEth : new testnetInstance.web3eth.eth.Contract(abi,TestnetContract.busdEth),
    testPayEth : new testnetInstance.web3eth.eth.Contract(abi,TestnetContract.TestCoinEth),
    usdtMatic : new testnetInstance.web3matic.eth.Contract(abi,TestnetContract.Usdtmatic),
    busdMatic : new testnetInstance.web3matic.eth.Contract(abi,TestnetContract.BusdMatic),
    testPayMatic : new testnetInstance.web3matic.eth.Contract(abi,TestnetContract.TestCoinMatic)
}

const getFaucetUsdtBsc = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetBusdBsc = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetTestPayBsc = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetBusdEth = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetUsdtEth = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetTestPayEth = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetBusdMatic = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetUsdtMatic = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}
const getFaucetTestPayMatic = async (Amount,reciver_address) =>{
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
      from: testnetWallet.address,
      to: TestnetContract.BusdBsc,
      gasPrice: gasPrice,
      gasLimit: 100000,
      data: ContractInstance.busdBsc.methods.transfer(reciver_address, Amount).encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(tx, testnetWallet.privateKey);
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(signedTx.rawTransaction);
    const obj = {
        txHash : txReceipt.transactionHash,
        Amount:Amount,
        reciver_address:reciver_address,
        timeStamp:Date.now()
    }
    console.log(obj);
 return obj;
}

const getBalance = async () => {
    const t = await ContractInstance.usdtBsc.methods.balanceOf(testnetWallet.address).call((error, result) => {
        if (error) {
            console.log(error);
        } else {
            const balance = result / 1e6; // USDT has 6 decimal places, so divide by 1e6 to get the balance in USDT
            const obj =  `USDT balance of ${testnetWallet.address}: ${balance}`
            console.log(obj)
            
        
        }
    });
}

getFaucet(1000,"0x8045287B546E4fB8C069553fA972FF52eaB5AE78")