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
      case 'busd':
        incObj.busdBalance = amount;
        break;
      case 'usdt':
        incObj.usdtBalance = amount;
        break;
      case 'testPay':
        incObj.testPayBalance = amount;
        break;
      default:
        throw new Error('Invalid currency');
    }
    await userSchema.updateOne({ _id: userId }, { $inc: incObj });
  } catch (error) {
     console.log(error)
  }

};


const getAddress = async (userId, currency) => {
  if (currency == "Btc") {
    const obj = {
      success: true,
      error: false,
      data: await getuserDepositeAdressBtc(userId),
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

const getCoinData = async (userId, currency) => {
  const user = await userSchema.findById(userId);
  if (currency == "Btc") {
    const data = {
      icon: "https://bc.game/coin/BTC.black.png",
      symbol: "Btc",
      balance: user.btcBalance.toString(),
      currencyType:"CRYPTO"
    };
    const obj = {
      success: true,
      error: false,
      data: data,
    };
    return obj;
  }
  if (currency == "Usdt") {
    const data = {
      icon: "https://bc.game/coin/USDT.black.png",
      symbol: "Usdt",
      balance: user.usdtBalance.toString(),
      currencyType:"CRYPTO"
    };
    const obj = {
      success: true,
      error: false,
      data: data,
    };
    return obj;
  }
  if (currency == "Busd") {
    const data = {
      icon: "https://bc.game/coin/BUSD.black.png",
      symbol: "Busd",
      balance: user.busdBalance.toString(),
      currencyType:"CRYPTO"
    };
    const obj = {
      success: true,
      error: false,
      data: data,
    };
    return obj;
  }
  if (currency == "testPay") {
    const data = {
      icon: "https://bc.game/coin/PEOPLE.black.png",
      symbol: "testPay",
      balance: user.testPayBalance.toString(),
      currencyType:"CRYPTO"
    };
    const obj = {
      success: true,
      error: false,
      data: data,
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
// converted to number
  const userAr = [
    {
      icon: "https://bc.game/coin/BTC.black.png",
      symbol: "Btc",
      balance: user.btcBalance.toString(),
    },
    {
      icon: "https://bc.game/coin/USDT.black.png",
      symbol: "Usdt",
      balance: user.usdtBalance.toString(),
    },
    {
      icon: "https://bc.game/coin/BUSD.black.png",
      symbol: "Busd",
      balance: user.busdBalance.toString(),
    },
    {
      icon: "https://bc.game/coin/PEOPLE.black.png",
      symbol: "testPay",
      balance: user.testPayBalance.toString(),
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
  getCoinData,
  updateBal,
  getUserData,
  getAddress,
};
