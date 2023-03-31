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
    console.log(bal,"balbusdbsc")
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
    });;
  console.log(bal,"testpay balance")
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
  const obj = {
    BalBusdBsc: await getBalBusdBsc(walletAddress),
    BalBusdEth:  await getBalBusdEth(walletAddress),
    BalBusdMatic: await getBalBusdMatic(walletAddress),
    BalTestPayBsc: await getBalTestPayBsc(walletAddress),
    BalTestPayEth: await getBalTestPayEth(walletAddress),
    BalTestPayMatic: await getBalTestPayMatic(walletAddress),
    BalUsdtBsc: await getBalUsdtBsc(walletAddress),
    BalUsdtEth: await getBalUsdtEth(walletAddress),
    BalUsdtMatic: await getBalUsdtMatic(walletAddress),
  };
  console.log(obj,"wallet ballance");
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
