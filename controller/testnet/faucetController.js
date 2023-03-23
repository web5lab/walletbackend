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

const faucetController = (req, res) => {
  const { network, coin, address, amount } = req.body;
  if (network == "eth") {
    if (coin == "Busd") {
        getFaucetBusdEth(amount,address);
    } else if (coin == "Usdt") {
        getFaucetUsdtEth(amount,address);
    } else if (coin == "testPay") {
        getFaucetTestPayEth(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else if (network == "bsc") {
    if (coin == "Busd") {
        getFaucetBusdBsc(amount,address);
    } else if (coin == "Usdt") {
        getFaucetUsdtBsc(amount,address);
    } else if (coin == "testPay") {
        getFaucetTestPayBsc(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else if (network == "matic") {
    if (coin == "Busd") {
        getFaucetBusdMatic(amount,address);
    } else if (coin == "Usdt") {
        getFaucetUsdtMatic(amount,address);
    } else if (coin == "testPay") {
        getFaucetTestPayMatic(amount,address);
    } else {
      res.send("Coin Not Supported");
    }
  } else {
    res.send("invalid network");
  }
  res.json(obj);
};

module.exports = {
  faucetController,
};
