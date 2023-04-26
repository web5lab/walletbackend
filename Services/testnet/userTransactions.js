const userTransaction = require("../../mongoDb/schema/WithdrawlSchema");
const userWithdrawl = require("../../mongoDb/schema/WithdrawlSchema");

const perPage = 2; // replace with the number of transactions to show per page

const getUserWithdrawl = async (userId, page) => {
  try {
    const data = await userTransaction.aggregate([
      // match transactions for the given user ID
      {
        $match: { userId: userId,transactionType: "Withdrawl" },
      },
      {
        $sort: { userTrasactionTime: -1 },
      },
      {
        $project: {
          _id: { $toString: "$_id" },
          amount: 1,
          status: 1,
          createdAt: "$userTrasactionTime",
          currencyName: "$currencyId",
          currencyIcon: "$currencyIcon",
          transactionType: "$transactionType",
        },
      },
      {
        $skip: page * perPage,
      },
      {
        $limit: perPage,
      },
    ]);
    const count = await userTransaction.countDocuments({ userId });

    return {
      success: true,
      transactions: data,
      totalDocuments: count,
      totalPages: Math.ceil(count / perPage - 1),
      page,
    };
  } catch (error) {
    console.error(error);
    // return an error response
  }
};

const getDetailedTransaction = async (id) => {
  try {
    const data = await userTransaction.findById(id);
    return {
      success: true,
      transaction: {
        _id: data._id.toString(),
        status: data.status,
        network: data.network,
        amount: data.amount,
        currencyName: data.currencyId,
        currencyIcon: data.currencyIcon,
        transactionHash: data.transactionHash,
        transactionUrl: data.explorerUrl,
        transactionType: data.transactionType,
        createdAt: data.userTrasactionTime,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};

const getUserDeposit = async (id) => {
  try {
    const data = await userTransaction.aggregate([
      { $match: { userId: id, transactionType: "Deposit" } },
      {
        $sort: { userTrasactionTime: -1 },
      },
      {
        $project: {
          _id: { $toString: "$_id" },
          amount: 1,
          status: 1,
          createdAt: "$userTrasactionTime",
          depositedBy:"$address",
          currencyName: "$currencyId",
          currencyIcon: "$currencyIcon",
          transactionType: "$transactionType",
        },
      },
      {
        $skip: page * perPage,
      },
      {
        $limit: perPage,
      },
    ]);
    const count = await userTransaction.countDocuments({ userId });

    return {
      success: true,
      transactions: data,
      totalDocuments: count,
      totalPages: Math.ceil(count / perPage - 1),
      page,
    };
  } catch (error) {
    console.log("error from user deposit",error)
  }
};

async function saveTransactionData(data) {
  const transaction = new userWithdrawl(data);
  await transaction.save();
}

module.exports = {
  getUserDeposit,
  saveTransactionData,
  getUserWithdrawl,
  getDetailedTransaction,
};
