const wallet = require("../../Services/testnet/walletBalance");
const { compareBalance } = require("../../Services/testnet/topupService");
const {
  getUserData,
  addUser,
  getAddress,
  getCoinData,
  updateBalByCurrencyId,
} = require("../../Services/testnet/userService");
const { getAllCoins } = require("../../Services/testnet/coinService");
const onChainData = require("../../mongoDb/schema/onChainData");
const { catchAsync, httpStatusCodes } = require("../../helper/helper");
const {
  addUserWithDrawl,
  getWithdrawlData,
} = require("../../Services/testnet/withdrawCoin");
const { jwtExtractor } = require("../../helper/jwtExtractor");
const {
  getUserDeposit,
  getDetailedTransaction,
  getUserWithdrawl,
} = require("../../Services/testnet/userTransactions");

const userWithdrawl = async (req, res) => {
  try {
    const userId = req.userPayload.userId;
    const page = req.query.page;
    const data = await getUserWithdrawl(Number(userId), page);
    res.status(httpStatusCodes.OK).json(data);
  } catch (error) {
    console.log("error", error);
    res.status(httpStatusCodes.INTERNAL_SERVER);
  }
};

const userDetailedTransaction = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const data = await getDetailedTransaction(id);
    console.log(data);
    res.status(httpStatusCodes.OK).json(data);
  } catch (error) { }
};

const userDeposite = async (req, res) => {
  try {
    const userId = req.userPayload.userId;
    const page = req.query.page;
    const data = await getUserDeposit(Number(userId), page);
    res.status(httpStatusCodes.OK).json(data);
  } catch (error) {
    console.log("error", error);
    res.status(httpStatusCodes.INTERNAL_SERVER);
  }
};


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

const checkTopupExternalServer = async (req, res, userid) => {
  try {
    const address = req.body.address;
    const hash = req.body.hash;
    const from = req.body.from;
    const network = req.body.network;
    const userPreviousData = await onChainData.findOne({ bscAddress: address });
    if (userPreviousData === null) {
      return res.json({
        error: true,
        data: "user not found",
      });
    }
    console.log(userPreviousData._id);
    const userId = userPreviousData._id;
    const latestbal = await wallet.Walletbalance(userPreviousData.bscAddress);
    const response = await compareBalance(userPreviousData, latestbal, userId,from,hash,network);
    res.status(httpStatusCodes.OK).json(response);
  } catch (error) {
    console.log(error);
    res.status(httpStatusCodes.INTERNAL_SERVER).json("internal server error");
  }
};

const addWithdrawal = async (req, res) => {
  console.log(req.userPayload);
  const userId = req.userPayload.userId;
  console.log("user id in jwt", userId);
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

const addUserCoin = catchAsync(async(req,res)=>{
  const userId = req.body.userId
  const amount = req.body.balance
  const id = req.body.selectedCurrency
  await updateBalByCurrencyId(userId,id,amount);
  res.json({
    success:true,
    error:false,
    data:"ok"
  });
})

module.exports = {
  userWithdrawl,
  userDeposite,
  addWithdrawal,
  checkTopup,
  addUserCoin,
  getCoins,
  getSpecificCoin,
  getUserAdress,
  getUser,
  userDetailedTransaction,
  registerNewUser,
  checkTopupExternalServer,
};
