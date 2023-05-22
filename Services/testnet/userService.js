const { getWallet } = require("./walletService.js");
const userSchema = require("../../mongoDb/schema/userSchema");
const onChainData = require("../../mongoDb/schema/onChainData");
const currencyModel = require("../../mongoDb/schema/currencySchema.js");

const addUser = async (userId) => {
  const userdb = await getUserData(userId);

  const t = getWallet(userId);
  const user = new userSchema({
    platFormName: "wc.game",
    _id: userId,
    btcAddress: t.BtcAdrress,
    bscAddress: t.EthAdress,
    ethAddress: t.EthAdress,
    maticAddress: t.EthAdress,
  });
  const chainData = new onChainData({
    platFormName: "wc.game",
    _id: userId,
    btcAddress: t.BtcAdrress,
    bscAddress: t.EthAdress,
    ethAddress: t.EthAdress,
    maticAddress: t.EthAdress,
  });
  chainData.save();
  const obj = await user.save();
  return obj;
};

const getuserDepositeAdressBtc = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return null;
  }
  const data = [
    {
      network: "native",
      address: user.btcAddress,
    },
  ];
  return data;
};

const getuserDepositeAdressUsdt = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return null;
  }
  const data = [
    {
      network: "Erc20",
      address: user.ethAddress,
    },
    {
      network: "Bep20",
      address: user.ethAddress,
    },
    {
      network: "matic",
      address: user.ethAddress,
    },
  ];
  return data;
};

const getuserDepositeAdressPepeCoin = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return null;
  }
  const data = [
    {
      network: "Bep20",
      address: user.ethAddress,
    },
  ];
  return data;
};

const getuserDepositeAdressBusd = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return null;
  }
  const data = [
    {
      network: "Erc20",
      address: user.ethAddress,
    },
    {
      network: "Bep20",
      address: user.ethAddress,
    },
    {
      network: "matic",
      address: user.ethAddress,
    },
  ];
  return data;
};

const getuserDepositeAdressTestPay = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return null;
  }
  const data = [
    {
      network: "Erc20",
      address: user.ethAddress,
    },
    {
      network: "Bep20",
      address: user.ethAddress,
    },
    {
      network: "matic",
      address: user.ethAddress,
    },
  ];
  return data;
};

const updateBal = async (userId, currency, amount) => {
  try {
    const incObj = {};
    switch (currency) {
      case "busd":
        incObj.busdBalance = amount;
        break;
      case "usdt":
        incObj.usdtBalance = amount;
        break;
      case "testPay":
        incObj.testPayBalance = amount;
        break;
      default:
        throw new Error("Invalid currency");
    }
    await userSchema.updateOne({ _id: userId }, { $inc: incObj });
  } catch (error) {
    console.log(error);
  }
};

const updateBalByCurrencyId = async (userId, currencyId, amount) => {
  try {
    const currencyData = await currencyModel.findById(currencyId);
    const currency = currencyData.currencyName;
    const incObj = {};
    switch (currency) {
      case "Busd":
        incObj.busdBalance = amount;
        break;
      case "Usdt":
        incObj.usdtBalance = amount;
        break;
      case "testPay":
        incObj.testPayBalance = amount;
        break;
      case "Btc":
        incObj.btcBalance = amount;
        break;
      case "LTC":
        incObj.LTCBalance = amount;
        break;
      case "RPEPE":
        incObj.pepeCoinBalnace = amount;
        break;
      default:
        throw new Error("Invalid currency");
    }
    await userSchema.updateOne({ _id: userId }, { $inc: incObj });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const getAddress = async (userId, currencyId) => {
  const currencyData = await currencyModel.findById(currencyId);
  const currency = currencyData.currencyName;
  if (currency == "Btc") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressBtc(userId),
    };
    return obj;
  }
  if (currency == "RPEPE") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressPepeCoin(userId),
    };
    return obj;
  }
  if (currency == "Usdt") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressUsdt(userId),
    };
    return obj;
  }
  if (currency == "Busd") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressBusd(userId),
    };
    return obj;
  }
  if (currency == "testPay") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressTestPay(userId),
    };
    return obj;
  }
  const obj = {
    success: false,
    error: true,
    data: "invalid currency",
  };
  return obj;
};
 
// get user coin
const getCoinData = async (userId, currency) => {
  const user = await userSchema.findById(userId);
  const currencyData = await currencyModel.findOne({currencyName:currency});
    const data = {
      icon: currencyData.icon,
      symbol: currencyData.currencyName,
      balance: getUserCurrencyBalance(user,currencyData.currencyName),
      lotteryCurrency: currencyData.lotteryCurrency,
      currencyType: "CRYPTO",
    };
    const obj = {
      success: true,
      error: false,
      data: data,
    };
    return obj;
};

const getUserData = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    const obj = {
      success: false,
      error: true,
      data: "user not found",
    };
    return obj;
  }

  const currencies = await currencyModel.find();

  // Add currencyId to each currency object
  const userCurrencies = currencies.map((currency) => {
    const userCurrency = {
      icon: currency.icon,
      symbol: currency.currencyName,
      balance:getUserCurrencyBalance(user, currency.currencyName),
      lotteryCurrency: currency.lotteryCurrency,
      currencyType: "CRYPTO",
      currencyId: currency._id,
    };
    return userCurrency;
  });

  const obj = {
    success: true,
    error: false,
    data: userCurrencies,
  };
  return obj;
};

const getUserCurrencyBalance = (user, currencyName) => {
  switch (currencyName) {
    case "Btc":
      return user.btcBalance.toString();
    case "Usdt":
      return user.usdtBalance.toString();
    case "Busd":
      return user.busdBalance.toString();
    case "testPay":
      return user.testPayBalance.toString();
    case "RPEPE":
      return user.pepeCoinBalnace.toString();
    case "LTC":
      return user.LTCBalance.toString();
    default:
      return "0.0000";
  }
};

module.exports = {
  updateBalByCurrencyId,
  addUser,
  getCoinData,
  updateBal,
  getUserData,
  getAddress,
};
