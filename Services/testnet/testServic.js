const userTransaction = require("../../mongoDb/schema/WithdrawlSchema");
const userId = 4001; // replace with the ID of the user you want to retrieve transactions for
const perPage = 2; // replace with the number of transactions to show per page
const page = 1;
const testFn = async () => {
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

    console.log({
      success: true,
      transactions: data,
      totalDocuments: count,
      totalPages: Math.ceil(count / perPage),
      page,
    });
  } catch (error) {
    console.error(error);
    // return an error response
  }
};
testFn();

module.exports = {
  testFn,
};
