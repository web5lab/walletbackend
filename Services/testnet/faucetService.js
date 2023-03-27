const {
    TestnetContract,
    testnetWallet
} = require("../../config/Config");
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"Bsc",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
};



const getFaucetBusdEth = async (Amount, reciver_address) => {
    const gasPrice = await testnetInstance.web3eth.eth.getGasPrice();
    const tx = {
        from: testnetWallet.address,
        to: TestnetContract.busdEth,
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
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
        coin:"testPay",
        txHash: txReceipt.transactionHash,
        network:"matic",
        amount: Amount,
        reciver_address: reciver_address,
        timeStamp: Date.now(),
    };
    const t = await saveFaucetToDb(obj)
    return t;
};

const getAFucetBalance = async () => {
    const t = await ContractInstance.usdtBsc.methods
        .balanceOf(testnetWallet.address)
        .call((error, result) => {
            if (error) {
                console.log(error);
            } else {
                const balance = result / 1e18; // USDT has 6 decimal places, so divide by 1e18 to get the balance in USDT
                const obj = `USDT balance of ${testnetWallet.address}: ${balance}`;
                console.log(obj);
            }
        });
};

const saveFaucetToDb = async (obj) => {
    const db = new faucetDb({
        walletAddress:obj.reciver_address,
        currencyType:obj.coin,
        amount:obj.amount,
        currencyNetwork:obj.network,
        timeStamp:obj.timeStamp,
        transactionHash:obj.txHash

    })
   const t = await db.save().then(() => {return "saved successfully"}).catch(err => {return "database error"});
   return t;
}


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