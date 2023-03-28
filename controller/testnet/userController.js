const wallet = require("../../Services/testnet/walletBalance");
const { compareBalance } = require("../../Services/testnet/topupService");
const { getUserData, addUser } = require("../../Services/testnet/userService");
const onChainData = require("../../mongoDb/schema/onChainData");
const { catchAsync } = require("../../helper/helper");

const checkTopup = async(req, res) => {
  try {
  const userId = req.body.userId;
  const userPreviousData = await onChainData.findById(userId);
  const latestbal = await wallet.Walletbalance(userPreviousData.bscAddress);
  const t = await compareBalance(userPreviousData, latestbal,userId);
  res.json("updated");
} catch (error) {
    console.log(error)
}
};

const checkCoinTopup = async(req,res) => {
  const userId = req.body.userId;
  const currency = req.body.currency;
  if(currency == "btc"){
     return res.json("currently this service is unavilabel")
  }
  if(currency == "usdt"){

  }
  if(currency == "busd"){

  }
  if(currency == "testPay"){

  }
  return res.json("coin not supported")
}

const getUser = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const n = await getUserData(userId);
  res.json(n);
});

const registerNewUser = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const n = await addUser(userId);
  res.json(n);
});

module.exports = {
  checkTopup,
  getUser,
  registerNewUser,
};
