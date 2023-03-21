const {
    TestnetContract,
    testnetWallet
} = require("../../Config/Config");
const {testnetInstance,ContractInstance} = require('./contractInstance')
const databaseConnection = require('../../mongoDb/db');
const faucetDb = require('../../mongoDb/schema/faucetSchema')

const getFaucetUsdtBsc = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.UsdtBsc,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.usdtBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    
    console.log(obj);
    return obj;
};

const getFaucetBusdBsc = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.BusdBsc,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        test:"testdats",
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const db = new faucetDb({
        walletAddress:reciver_address,
        currencyType:"usdt",
        amount:Amount,
        currencyNetwork:"bsc",
        transactionHash:txReceipt.transactionHash

    })
    db.save().then(() => console.log('New user saved to MongoDB successfully')).catch(err => console.log(err));
    console.log(obj);
    return obj;
};
const getFaucetTestPayBsc = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.TestCoinBsc,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.testPayBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetBusdEth = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.busdEth,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdEth.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3eth.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3eth.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetUsdtEth = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3eth.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.UsdtEth,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.usdtEth.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3eth.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3eth.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetTestPayEth = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3eth.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.BusdBsc,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetBusdMatic = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3matic.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.BusdMatic,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3matic.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3matic.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetUsdtMatic = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3matic.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.Usdtmatic,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3matic.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3matic.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};
const getFaucetTestPayMatic = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3matic.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.TestCoinMatic,
        gasPrice: gasPrice,
        gasLimit: 100000,
        data: ContractInstance.busdBsc.methods
            .transfer(reciver_address, Amount)
            .encodeABI(),
    };
    const signedTx = await testnetInstance.web3matic.eth.accounts.signTransaction(
        tx,
        testnetWallet.privateKey
    );
    const txReceipt = await testnetInstance.web3matic.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    const obj = {
        txHash: txReceipt.transactionHash,
        Amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    console.log(obj);
    return obj;
};

const getBalance = async () => {
    const t = await ContractInstance.usdtBsc.methods
        .balanceOf(testnetWallet.address)
        .call((error, result) => {
            if (error) {
                console.log(error);
            } else {
                const balance = result / 1e6; // USDT has 6 decimal places, so divide by 1e6 to get the balance in USDT
                const obj = `USDT balance of ${testnetWallet.address}: ${balance}`;
                console.log(obj);
            }
        });
};


getFaucetBusdBsc(1000,'0x8045287B546E4fB8C069553fA972FF52eaB5AE78')
module.exports ={
    getFaucetBusdBsc,
    getFaucetBusdEth,
    getFaucetBusdMatic,
    getFaucetTestPayBsc,
    getFaucetTestPayEth,
    getFaucetTestPayMatic,
    getFaucetUsdtBsc,
    getFaucetUsdtEth,
    getFaucetUsdtMatic
}