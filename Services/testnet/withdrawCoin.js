const { ContractInstance } = require("./contractInstance");
const { testnetWallet } = require("../../Config/Config");
const userWithdrawl = require("../../mongoDb/schema/WithdrawlSchema");
const withdrawBusdeth = async () => {};
const withdrawController = async () => {};

const addUserWithDrawl = async (
  userId,
  currencyName,
  amount,
  network,
  withdrawlAddress
) => {
  try {
    const db = new userWithdrawl({
      userId: userId,
      address: withdrawlAddress,
      currencyId: currencyName,
      amount: amount,
      network: network,
    });
    await db.save();
  } catch (error) {
    console.log("error in withdrawl");
  }
};

const getWithdrawlData = async () => {
  const t = await userWithdrawl.aggregate([
    {
      $sort: { userWithdrawlTime: -1 }
    },
    {
      $group: {
        _id: null,
        transactions: {
          $push: {
            uniqueId: "$_id",
            userId: "$userId",
            currencyId: "$currencyId",
            address: "$address",
            network: "$network",
            amount: "$amount",
            userWithdrawlTime: "$userWithdrawlTime",
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        transactions: 1
      }
    }
  ])
  
  console.log(t);
  return t;
};

module.exports = {
  addUserWithDrawl,
  withdrawController,
  getWithdrawlData,
};
