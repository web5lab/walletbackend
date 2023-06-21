const currencyModel = require("../../mongoDb/schema/currencySchema");
const supportedCoin = require("../../mongoDb/schema/suportedCoins");

const getAllCoins = async () => {
  const coins = await currencyModel.aggregate([
    {
      $addFields: { currencyType: "CRYPTO" }
    },
    { 
      $project: {
        currencyId: "$_id",
        _id: 0,
        currencyName: 1,
        currencyType: 1,
        lotteryCurrency: 1
      }
    }
  ]);
  
  console.log(coins);
  return coins;
};

const getSpecifiCoins = async (id) => {
  const coins = await currencyModel.findById(id);
  return coins;
};

module.exports = {
  getAllCoins,
  getSpecifiCoins
};
