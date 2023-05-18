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
        lotteryCurrency:false,
        currencyType: "CRYPTO",
      },
      {
        icon: "https://bc.game/coin/USDT.black.png",
        symbol: "Usdt",
        balance: user.usdtBalance.toString(),
        lotteryCurrency:false,
        currencyType: "CRYPTO",
      },
      {
        icon: "https://bc.game/coin/BUSD.black.png",
        symbol: "Busd",
        balance: user.busdBalance.toString(),
        lotteryCurrency:false,
        currencyType: "CRYPTO",
      },
      {
        icon: "https://bc.game/coin/PEOPLE.black.png",
        symbol: "testPay",
        balance: user.testPayBalance.toString(),
        lotteryCurrency:false,
        currencyType: "CRYPTO",
      },
      {
        icon: "http://15.207.226.246:9051/images/red-pepe-logo.png",
        symbol: "RPEPE",
        balance: user.pepeCoinBalnace.toString(),
        lotteryCurrency:false,
        currencyType: "CRYPTO",
      },
      {
        icon: "https://upi-gateway.s3.ap-south-1.amazonaws.com/coin.png",
        symbol: "LTC",
        balance: user.LTCBalance.toString(),
        lotteryCurrency:true,
        currencyType: "CRYPTO",
      }
    ];
  
    // coindetails
  
    const obj = {
      success: true,
      error: false,
      data: userAr,
    };
  
    return obj;
  };