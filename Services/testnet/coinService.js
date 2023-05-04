const currencyModel = require("../../mongoDb/schema/currencySchema");
const supportedCoin = require("../../mongoDb/schema/suportedCoins");

const getAllCoins = async () => {
  const coins = await currencyModel.find();
  return coins;
};

module.exports = {
  getAllCoins,
};
