const { ContractInstance } = require("./contractInstance");

const getBalUsdtBsc = (userAddress) => {
  ContractInstance.usdtBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalBusdBsc = (userAddress) => {
  ContractInstance.busdBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalTestPayBsc = (userAddress) => {
  ContractInstance.testPayBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalUsdtEth = (userAddress) => {
  ContractInstance.usdtEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalBusdEth = (userAddress) => {
  ContractInstance.busdEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalTestPayEth = (userAddress) => {
  ContractInstance.testPayEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalUsdtMatic = (userAddress) => {
  ContractInstance.usdtMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalBusdMatic = (userAddress) => {
  ContractInstance.busdMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
};

const getBalTestPayMatic = (userAddress) => {
  const t = ContractInstance.testPayMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const Walletbalance = async (walletAddress) => {
    busdBsc = getBalBusdBsc(walletAddress);
    const  obj = {
         BalBusdBsc : getBalBusdBsc(walletAddress),
        //  BalBusdEth :  getBalBusdEth(walletAddress),
         BalBusdMatic : getBalBusdMatic(walletAddress),
         BalTestPayBsc : getBalTestPayBsc(walletAddress),
        //  BalTestPayEth : getBalTestPayEth(walletAddress),
         BalTestPayMatic : await getBalTestPayMatic(walletAddress),
         BalUsdtBsc : getBalUsdtBsc(walletAddress),
        //  BalUsdtEth :getBalUsdtEth(walletAddress),
         BalUsdtMatic :getBalUsdtMatic(walletAddress),
    }
    console.log(obj)
    return obj;
}

module.exports = {
    getBalBusdBsc,
    getBalBusdEth,
    getBalBusdMatic,
    getBalTestPayBsc,
    getBalTestPayEth,
    getBalTestPayMatic,
    getBalUsdtBsc,
    getBalUsdtEth,
    getBalUsdtMatic,
    Walletbalance
}