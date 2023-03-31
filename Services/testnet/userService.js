const { getWallet } = require("./walletService.js");
const userSchema = require("../../mongoDb/schema/userSchema");
const onChainData = require("../../mongoDb/schema/onChainData");

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
    return "user not found";
  }
  const data =  [
      {
        network: "native",
        address: user.btcAddress,
      },
    ]
  return data;
};

const getuserDepositeAdressUsdt = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return "user not found";
  }
  const data =  [
      {
        network: "Erc20",
        address: user.ethAddress,
      },
      {
        network: "Bep20",
        address: user.ethAddress,
      },
      {
        network: "matci",
        address: user.ethAddress,
      },
    ]
  return data;
};

const getuserDepositeAdressBusd = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return "user not found";
  }
  const data =  [
      {
        network: "Erc20",
        address: user.ethAddress,
      },
      {
        network: "Bep20",
        address: user.ethAddress,
      },
      {
        network: "matci",
        address: user.ethAddress,
      },
    ]
  return data;
};

const getuserDepositeAdressTestPay = async (userId) => {
  const user = await userSchema.findById(userId);
  if (!user) {
    return "user not found";
  }
  const data = 
    [
      {
        network: "Erc20",
        address: user.ethAddress,
      },
      {
        network: "Bep20",
        address: user.ethAddress,
      },
      {
        network: "matci",
        address: user.ethAddress,
      },
    ]
  ;
  return data;
};

const updateBal = async (userId, currency, amount) => {
  const user = await userSchema.findById(userId);
};

const getAddress = async (userId, currency) => {
  if (currency == "Btc") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressBtc(userId)
    };
    return obj;
  }
  if (currency == "Usdt") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressUsdt(userId)
    };
    return obj;
  }
  if (currency == "Busd") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressBusd(userId)
    };
    return obj;
  }
  if (currency == "testPay") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressTestPay(userId)
    };
    return obj;
  }
  const obj = {
    success: false,
    error: true,
    data: "invalid currency"
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

  const userAr = [
    {
      icon: "https://bc.game/coin/BTC.black.png",
      symbol: "Btc",
      balance: user.btcBalance,
    },
    {
      icon: "https://bc.game/coin/USDT.black.png",
      symbol: "Usdt",
      balance: user.usdtBalance,
    },
    {
      icon: "https://bc.game/coin/BUSD.black.png",
      symbol: "Busd",
      balance: user.busdBalance,
    },
    {
      icon: "https://bc.game/coin/PEOPLE.black.png",
      symbol: "testPay",
      balance: user.testPayBalance,
    },
  ];

  const obj = {
    success: true,
    error: false,
    data: userAr,
  };

  return obj;
};

module.exports = {
  addUser,
  getUserData,
  getAddress,
};
