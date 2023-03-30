const wallet = require("../../Services/testnet/walletBalance");
const { compareBalance } = require("../../Services/testnet/topupService");
const { getUserData, addUser,getAddress } = require("../../Services/testnet/userService");
const {getAllCoins} = require('../../Services/testnet/coinService')
const onChainData = require("../../mongoDb/schema/onChainData");
const { catchAsync, httpStatusCodes } = require("../../helper/helper");

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
  if(currency == "Btc"){
     return res.json("currently this service is unavilabel")
  }
  if(currency == "Usdt"){

  }
  if(currency == "Busd"){

  }
  if(currency == "TestPay"){

  }
  return res.json("coin not supported")
}

const getUser = catchAsync(async (req, res) => {
  const userId = req.query.userId;
  const n = await getUserData(userId);
  res.json(n);
});

const registerNewUser = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const n = await addUser(userId);
  res.status(httpStatusCodes.CREATED).json(n);
});

const getUserAdress = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const currency = req.body.userId;
  const n = await getAddress(userId);
  res.status(httpStatusCodes.OK).json(n);
});

const getCoins = catchAsync(async (req,res) => {
   const obj = await getAllCoins();
   res.status(httpStatusCodes.OK).json(obj)
});

module.exports = {
  checkTopup,
  getCoins,
  getUserAdress,
  getUser,
  registerNewUser,
};
