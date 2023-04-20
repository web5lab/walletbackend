const userTransaction = require("../../mongoDb/schema/WithdrawlSchema");

const perPage = 2; // replace with the number of transactions to show per page

const getUserTransctions = async (userId,page) => {
  try {
    const data = await userTransaction.aggregate([
      // match transactions for the given user ID
      {
        $match: { userId },
      },
      {
        $lookup: {
          from: "currencies",
          localField: "currencyId",
          foreignField: "_id",
          as: "currency",
        },
      },
      {
        $project: {
          _id: { $toString: "$_id" },
          amount: 1,
          status: 1,
          createdAt: "$userWithdrawlTime",
          currencyName: "$currencyId",
          currencyIcon:"$currencyIcon"
        },
      },
      {
        $skip: (page - 1) * perPage,
      },
      {
        $limit: perPage,
      },
    ]);
    const count = await userTransaction.countDocuments({ userId });

    return{
      success: true,
      transactions: data,
      totalDocuments: count,
      totalPages: Math.ceil(count / perPage),
      page,
    };
  } catch (error) {
    console.error(error);
    // return an error response
  }
};

module.exports = {
  getUserTransctions,
};
