const currencyModel = require("../../mongoDb/schema/currencySchema");
const supportedCoin = require("../../mongoDb/schema/suportedCoins");

const getAllCoins = async () => {
  const coins = await currencyModel.aggregate([
    {$addFields:{currencyType:"CRYPTO"}},
    { $project: {  currencyName: 1, currencyType: 1 } },
   
  ]);
  return coins;
};

module.exports = {
  getAllCoins,
};
