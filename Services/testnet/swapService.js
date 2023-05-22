const userSchema = require("../../mongoDb/schema/userSchema");
const { getBalanceField } = require("./coinCommon");
const { BtcPrice } = require("./marketPrice");

const Swapper = async (from, to, amount, userId) => {
  const balanceFieldFrom = getBalanceField(from);
  const balanceFieldTo = getBalanceField(to);

  // Fetch the conversion rate for the currencies
  const conversionRate = await getConversionRate(from, to);

  const user = await userSchema.findById(userId);
  if (!user) {
    return {
      success: false,
      error: true,
      data: "user not found",
    };
  }

  const currentBalanceFrom = user[balanceFieldFrom];
  if (currentBalanceFrom < amount) {
    return {
      success: false,
      error: true,
      data: "insufficient fund",
    };
  }

  // Calculate the converted amount
  const convertedAmount = amount * conversionRate;

  const updatedUser = await userSchema.findByIdAndUpdate(
    userId,
    {
      $inc: { [balanceFieldFrom]: -amount, [balanceFieldTo]: convertedAmount },
    },
    { new: true }
  );

  const obj = {
    from: from,
    formAmount: amount,
    to: to,
    toAmount: convertedAmount,
  };
  const res = {
    success: true,
    error: false,
    data: obj,
  };

  return res;
};

const getConversionRate = async (from, to) => {
  const priceLookup = {
    Btc: await BtcPrice(),
    Usdt: 1,
    Busd: 1,
    testPay: 10,
    RPEPE: 100,
    LTC: 0.1,
  };
  if (from === to) {
    return 1; // Same currency, conversion rate is 1
  }
  const fromPrice = priceLookup[to];
  const toPrice = priceLookup[from];
  if (!fromPrice || !toPrice) {
    throw new Error("Invalid currency");
  }
  return toPrice / fromPrice;
};

module.exports = {
  Swapper,
  getConversionRate,
};
