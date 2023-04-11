const { ContractInstance, testnetInstance } = require("./contractInstance");
const {
  testnetWallet,
  erc20FundWallet,
  TestnetContract,
} = require("../../Config/Config");
const userWithdrawl = require("../../mongoDb/schema/WithdrawlSchema");

const withdrawController = async (data) => {
  console.log(data);
  return "success";
};


const withdrawErc20 = async (coin, coin_amount, receiver_address, network) => {
  let tx, gasPrice, contract, contractAddress;
  const amount = BigInt(coin_amount * 10 ** 18);

  if (network === "bsc") {
    gasPrice = await testnetInstance.web3bsc.eth.getGasPrice();
    if (coin === "usdt") {
      contract = ContractInstance.usdtBsc;
      contractAddress = TestnetContract.UsdtBsc;
    } else if (coin === "busd") {
      contract = ContractInstance.busdBsc;
      contractAddress = TestnetContract.BusdBsc;
    } else if (coin === "testPay") {
      contract = ContractInstance.testPayBsc;
      contractAddress = TestnetContract.TestCoinBsc;
    }
  } else if (network === "eth") {
    gasPrice = await testnetInstance.web3eth.eth.getGasPrice();
    if (coin === "usdt") {
      contract = ContractInstance.usdtEth;
      contractAddress = TestnetContract.UsdtEth;
    } else if (coin === "busd") {
      contract = ContractInstance.busdEth;
      contractAddress = TestnetContract.busdEth;
    } else if (coin === "testPay") {
      contract = ContractInstance.testPayEth;
      contractAddress = TestnetContract.TestCoinEth;
    }
  } else if (net) {
    gasPrice = await testnetInstance.web3matic.eth.getGasPrice();
    if (coin === "usdt") {
      contract = ContractInstance.usdtMatic;
      contractAddress = TestnetContract.Usdtmatic;
    } else if (coin === "busd") {
      contract = ContractInstance.busdMatic;
      contractAddress = TestnetContract.BusdMatic;
    } else if (coin === "testPay") {
      contract = ContractInstance.testPayMatic;
      contractAddress = TestnetContract.TestCoinMatic;
    }
  } else {
    return "invalid network";
  }

  tx = {
    from: testnetWallet.address,
    to: contractAddress,
    gasPrice: gasPrice,
    gasLimit: 100000,
    data: contract.methods.transfer(receiver_address, amount).encodeABI(),
  };

  const signedTx = await testnetInstance.web3bsc.eth.accounts.signTransaction(
    tx,
    erc20FundWallet.privateKey
  );
  const txReceipt = await testnetInstance.web3bsc.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );
  console.log(txReceipt);
};

const addUserWithDrawl = async (
  userId,
  currencyName,
  amount,
  network,
  withdrawlAddress
) => {
  try {
    const db = new userWithdrawl({
      userId: userId,
      address: withdrawlAddress,
      currencyId: currencyName,
      amount: amount,
      network: network,
    });
    await db.save();
  } catch (error) {
    console.log("error in withdrawl");
  }
};

const getWithdrawlData = async (page, limit) => {
  const startIndex = (page - 1) * limit;

  const t = await userWithdrawl.aggregate([
    
    {
      $sort: { userWithdrawlTime: -1 },
    },
    {
      $group: {
        _id: null,
        transactions: {
          $push: {
            uniqueId: "$_id",
            userId: "$userId",
            currencyId: "$currencyId",
            address: "$address",
            network: "$network",
            amount: "$amount",
            userWithdrawlTime: "$userWithdrawlTime",
          },
        },
        count: { $sum: 1 }
      },
    },
    {
      $project: {
        _id: 0,
        transactions: { $slice: ["$transactions", startIndex, limit] },
        totalPages: {
          $ceil: {
            $divide: ["$count", limit]
          }
        }
      },
    },
  ]);

  return t[0];
};



module.exports = {
  addUserWithDrawl,
  withdrawController,
  getWithdrawlData,
};
