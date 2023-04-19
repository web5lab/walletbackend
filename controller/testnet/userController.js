const wallet = require("../../Services/testnet/walletBalance");
const { compareBalance } = require("../../Services/testnet/topupService");
const {
  getUserData,
  addUser,
  getAddress,
  getCoinData,
} = require("../../Services/testnet/userService");
const { getAllCoins } = require("../../Services/testnet/coinService");
const onChainData = require("../../mongoDb/schema/onChainData");
const { catchAsync, httpStatusCodes } = require("../../helper/helper");
const {
  addUserWithDrawl,
  getWithdrawlData,
} = require("../../Services/testnet/withdrawCoin");
const { jwtExtractor } = require("../../helper/jwtExtractor");

const checkTopup = async (req, res, userid) => {
  try {
    const userId = req.query.userId;
    const userPreviousData = await onChainData.findById(userId);
    const latestbal = await wallet.Walletbalance(userPreviousData.bscAddress);
    const t = await compareBalance(userPreviousData, latestbal, userId);
    res.json("updated");
  } catch (error) {
    console.log(error);
  }
};

const add_withdraw = async (req, res) => {
  const userId = req.userPayload.userId;
  const walletAddress = req.body.walletAddress;
  const SelectedCryptoCr = req.body.SelectedCryptoCr;
  const network = req.body.network;
  const amount = req.body.amount;
  const t = await addUserWithDrawl(
    userId,
    SelectedCryptoCr,
    amount,
    network,
    walletAddress
  );
  if (t.error) {
    return res.status(httpStatusCodes.INTERNAL_SERVER).json({
      error: true,
      success: false,
      userId: userId,
    });
  }
  return res.status(httpStatusCodes.ACCEPTED).json({
    error: false,
    updatedBal: t.data,
    currencyId: SelectedCryptoCr,
    success: true,
    userId: userId,
  });
};

/*{
  walletAddress: 'mqass1zS43E22PDu9WWFABN5G34tkEWQox',
  amount: '100',
  SelectedCryptoCr: 'Usdt',
  network: 'Bep20'
}*/

const getUser = catchAsync(async (req, res) => {
  const userId = req.query.userId;
  const n = await getUserData(userId);
  res.json(n);
});

const getSpecificCoin = catchAsync(async (req, res) => {
  const userId = req.query.userId;
  const currency = req.query.currency;
  const n = await getCoinData(userId, currency);
  res.status(httpStatusCodes.OK).json(n);
});

const updateBal = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const currency = req.body.currency;
  const amount = req.body.amount;
});

const registerNewUser = catchAsync(async (req, res) => {
  const userId = req.body.userId;
  const n = await addUser(userId);
  res.status(httpStatusCodes.CREATED).json(n);
});

const getUserAdress = catchAsync(async (req, res) => {
  const userId = req.query.userId;
  const currency = req.query.currency;
  const n = await getAddress(userId, currency);
  res.status(httpStatusCodes.OK).json(n);
});

const getCoins = catchAsync(async (req, res) => {
  const obj = await getAllCoins();
  res.status(httpStatusCodes.OK).json(obj);
});

module.exports = {
  add_withdraw,
  checkTopup,
  getCoins,
  getSpecificCoin,
  getUserAdress,
  getUser,
  registerNewUser,
};
