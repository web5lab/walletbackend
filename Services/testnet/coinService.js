const currencyModel = require("../../mongoDb/schema/currencySchema");
const supportedCoin = require("../../mongoDb/schema/suportedCoins");

// test data
const getAllCoins = async () => {
  const coins = await currencyModel.aggregate([
    {$addFields:{currencyType:"CRYPTO"}},
    { $project: {currencyId:"$_id",_id:0,  currencyName: 1, currencyType: 1 } },
  ]);
  return coins;
};

module.exports = {
  getAllCoins,
};
