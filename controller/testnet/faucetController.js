const { catchAsync } = require("../../helper/helper");
const {
  getFaucetBusdBsc,
  getFaucetBusdEth,
  getFaucetBusdMatic,
  getFaucetTestPayBsc,
  getFaucetTestPayEth,
  getFaucetTestPayMatic,
  getFaucetUsdtBsc,
  getFaucetUsdtEth,
  getFaucetUsdtMatic,
} = require("../../Services/testnet/faucetService");

const faucetController = catchAsync(async (req, res) => {
  const { network, coin, address, amount } = req.body;
  if (network == "eth") {
    if (coin == "Busd") {
        await getFaucetBusdEth(amount,address);
    } else if (coin == "Usdt") {
       await  getFaucetUsdtEth(amount,address);
    } else if (coin == "testPay") {
       await getFaucetTestPayEth(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else if (network == "bsc") {
    if (coin == "Busd") {
       await getFaucetBusdBsc(amount,address);
    } else if (coin == "Usdt") {
       await getFaucetUsdtBsc(amount,address);
    } else if (coin == "testPay") {
       await getFaucetTestPayBsc(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else if (network == "matic") {
    if (coin == "Busd") {
       await getFaucetBusdMatic(amount,address);
    } else if (coin == "Usdt") {
      await  getFaucetUsdtMatic(amount,address);
    } else if (coin == "testPay") {
       await getFaucetTestPayMatic(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else {
    res.send("invalid network");
  }
  
});

module.exports = {
  faucetController,
};
