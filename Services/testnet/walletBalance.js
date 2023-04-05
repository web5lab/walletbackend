const { ContractInstance } = require("./contractInstance");

const getBalUsdtBsc = async (userAddress) => {
  const bal = await ContractInstance.usdtBsc.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const getBalBusdBsc = async (userAddress) => {
  const bal = await ContractInstance.busdBsc.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
  return bal/ 10 ** 18;
};

const getBalTestPayBsc = async (userAddress) => {
  const bal = await ContractInstance.testPayBsc.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
  return bal / 10 ** 18;
};

const getBalUsdtEth = async (userAddress) => {
  const bal = await ContractInstance.usdtEth.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const getBalBusdEth = async(userAddress) => {
  const bal = await ContractInstance.busdEth.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const getBalTestPayEth = async (userAddress) => {
  const bal = await ContractInstance.testPayEth.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const getBalUsdtMatic = async (userAddress) => {
  const bal = await ContractInstance.usdtMatic.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};



const getBalBusdMatic = async(userAddress) => {
  const bal = await ContractInstance.busdMatic.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const getBalTestPayMatic = async (userAddress) => {
  const bal = await ContractInstance.testPayMatic.methods.balanceOf(userAddress).call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });;
  return bal/ 10 ** 18;
};

const Walletbalance = async (walletAddress) => {
  const promises = [
    getBalBusdBsc(walletAddress),
    getBalBusdEth(walletAddress),
    getBalBusdMatic(walletAddress),
    getBalTestPayBsc(walletAddress),
    getBalTestPayEth(walletAddress),
    getBalTestPayMatic(walletAddress),
    getBalUsdtBsc(walletAddress),
    getBalUsdtEth(walletAddress),
    getBalUsdtMatic(walletAddress),
  ];
  
  const [BalBusdBsc, BalBusdEth, BalBusdMatic, BalTestPayBsc, BalTestPayEth, BalTestPayMatic, BalUsdtBsc, BalUsdtEth, BalUsdtMatic] = await Promise.all(promises);
  
  const obj = {
    BalBusdBsc,
    BalBusdEth,
    BalBusdMatic,
    BalTestPayBsc,
    BalTestPayEth,
    BalTestPayMatic,
    BalUsdtBsc,
    BalUsdtEth,
    BalUsdtMatic,
  };
  return obj;
};


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
  Walletbalance,
};
