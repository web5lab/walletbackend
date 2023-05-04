const onChainData = require("../../mongoDb/schema/onChainData");
const userSchema = require("../../mongoDb/schema/userSchema");
const { getExplorerUrl, getCurrencyIcon } = require("./coinCommon");
const { saveTransactionData } = require("./userTransactions");

const compareBalance = async (
  previousBal,
  latestBal,
  userId,
  from,
  hash,
  network
) => {
  try {
    const obj = {
      busdBsc: latestBal.BalBusdBsc - previousBal.busdBalanceOnBsc,
      busdEth: latestBal.BalBusdEth - previousBal.busdBalanceOnEth,
      busdMatic: latestBal.BalBusdMatic - previousBal.busdBalanceOnMatic,
      testPayBsc: latestBal.BalTestPayBsc - previousBal.testPayBalnceOnBsc,
      testPayEth: latestBal.BalTestPayEth - previousBal.testPayBalnceOnEth,
      testPayMatic:
        latestBal.BalTestPayMatic - previousBal.testPayBalnceOnMatic,
      usdtBsc: latestBal.BalUsdtBsc - previousBal.usdtBalanceOnBsc,
      usdtEth: latestBal.BalUsdtEth - previousBal.usdtBalanceOnEth,
      usdtMatic: latestBal.BalUsdtMatic - previousBal.usdtBalanceOnMatic,
    };
    if (
      obj.busdBsc != 0 ||
      obj.busdEth != 0 ||
      obj.busdMatic != 0 ||
      obj.usdtBsc != 0 ||
      obj.usdtEth != 0 ||
      obj.usdtMatic != 0 ||
      obj.testPayBsc != 0 ||
      obj.testPayEth != 0 ||
      obj.testPayMatic != 0
    ) {
      let updatedCoin;
      let updatedBalance;
      let amount;
      await onChainData.updateMany(
        { _id: { $in: userId } },
        {
          $inc: {
            busdBalanceOnBsc: obj.busdBsc,
            busdBalanceOnEth: obj.busdEth,
            busdBalanceOnMatic: obj.busdMatic,
            usdtBalanceOnBsc: obj.usdtBsc,
            usdtBalanceOnEth: obj.usdtEth,
            usdtBalanceOnMatic: obj.usdtMatic,
            testPayBalnceOnBsc: obj.testPayBsc,
            testPayBalnceOnEth: obj.testPayEth,
            testPayBalnceOnMatic: obj.testPayMatic,
          },
        }
      );
      const bal = {
        busdBalance: obj.busdBsc + obj.busdEth + obj.busdMatic,
        usdtBalance: obj.usdtBsc + obj.usdtEth + obj.usdtMatic,
        testPayBalance: obj.testPayBsc + obj.testPayEth + obj.testPayMatic,
      };
      const r = await userSchema.updateMany(
        { _id: { $in: userId } },
        {
          $inc: {
            busdBalance: bal.busdBalance,
            usdtBalance: bal.usdtBalance,
            testPayBalance: bal.testPayBalance,
          },
        }
      );
      const userData = await userSchema.findById(userId);
      console.log(userData);
      if (bal.busdBalance !== 0) {
        updatedCoin = "Busd";
        (amount = bal.busdBalance), (updatedBalance = userData.busdBalance);
      } else if (bal.usdtBalance !== 0) {
        updatedCoin = "Usdt";
        (amount = bal.usdtBalance), (updatedBalance = userData.usdtBalance);
      } else if (bal.testPayBalance !== 0) {
        updatedCoin = "testPay";
        (amount = bal.testPayBalance),
          (updatedBalance = userData.testPayBalance);
      }
      const transactionData = {
        userId,
        currencyName: updatedCoin,
        amount,
        address: from,
        network: network,
        transactionHash: hash,
        transactionType:"Deposite",
        status:"Deposited",
        explorerUrl: getExplorerUrl("bscTestnet") + "tx/" + hash,
        currencyIcon: getCurrencyIcon(updatedCoin),
      };
      const saveTransaction = await saveTransactionData(transactionData);
      console.log("ok", saveTransaction);
      return {
        error: false,
        data: {
          userId: userId,
          symbol: updatedCoin,
          balance: updatedBalance.toString(),
          currencyType: "CRYPTO",
          status: "COMPLETED",
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  compareBalance,
};
