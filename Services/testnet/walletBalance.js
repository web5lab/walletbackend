const { ContractInstance } = require("./contractInstance");

const getBalUsdtBsc = (userAddress) => {
  const t = ContractInstance.usdtBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalBusdBsc = (userAddress) => {
  const t = ContractInstance.busdBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalTestPayBsc = (userAddress) => {
  const t = ContractInstance.testPayBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalUsdtEth = (userAddress) => {
  const t = ContractInstance.usdtEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalBusdEth = (userAddress) => {
  const t = ContractInstance.busdEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalTestPayEth = (userAddress) => {
  const t = ContractInstance.testPayEth.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalUsdtMatic = (userAddress) => {
  const t = ContractInstance.usdtMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalBusdMatic = (userAddress) => {
 const t =  ContractInstance.busdMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const getBalTestPayMatic = (userAddress) => {
  const t = ContractInstance.testPayMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e18; // USDT has 6 decimal place,
        return balance;
      }
    });
    return t;
};

const Walletbalance = async (walletAddress) => {
    const  obj = {
         BalBusdBsc :await getBalBusdBsc(walletAddress),
         BalBusdEth : await getBalBusdEth(walletAddress),
         BalBusdMatic :await getBalBusdMatic(walletAddress),
         BalTestPayBsc :await getBalTestPayBsc(walletAddress),
         BalTestPayEth :await getBalTestPayEth(walletAddress),
         BalTestPayMatic :await getBalTestPayMatic(walletAddress),
         BalUsdtBsc :await getBalUsdtBsc(walletAddress),
         BalUsdtEth : await getBalUsdtEth(walletAddress),
         BalUsdtMatic :await getBalUsdtMatic(walletAddress),
    }
    
    return obj ;
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