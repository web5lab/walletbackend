const { ContractInstance } = require("./contractInstance");

const getBalUsdtBsc = (userAddress) => {
  ContractInstance.usdtBsc.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `Busd balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
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
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
      }
    });
};

const getBalTestPayMatic = (userAddress) => {
  ContractInstance.testPayMatic.methods
    .balanceOf(userAddress)
    .call((error, result) => {
      if (error) {
        console.log(error);
      } else {
        const balance = result / 1e6; // USDT has 6 decimal place,
        const obj = `USDT balance of ${userAddress}: ${balance}`;
        console.log(obj);
        return obj;
      }
    });
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
    getBalUsdtMatic
}