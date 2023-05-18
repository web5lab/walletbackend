const userSchema = require('../../mongoDb/schema/userSchema');
const { getBalanceField } = require('./coinCommon');

const Swapper = async (from, to, amount, userId) => {
  const balanceFieldFrom = getBalanceField(from);
  const balanceFieldTo = getBalanceField(to);

  // Fetch the conversion rate for the currencies
  const conversionRate = await getConversionRate(from, to);

  const user = await userSchema.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const currentBalanceFrom = user[balanceFieldFrom];
  if (currentBalanceFrom < amount) {
    throw new Error("Insufficient balance");
  }

  // Calculate the converted amount
  const convertedAmount = amount * conversionRate;

  const updatedUser = await userSchema.findByIdAndUpdate(userId, {
    $inc: { [balanceFieldFrom]: -amount, [balanceFieldTo]: convertedAmount },
  }, { new: true });

  // Optional: Return the updated user object
  return updatedUser;
};

// Helper function to fetch the conversion rate
const getConversionRate = async (from, to) => {
    const priceLookup = {
      BTC: 1200,
      USDT: 1,
      Testcoin: 0.1,
      LTC: 32
    };
    if (from === to) {
      return 1; // Same currency, conversion rate is 1
    }
    const fromPrice = priceLookup[from];
    const toPrice = priceLookup[to];
    if (!fromPrice || !toPrice) {
      throw new Error("Invalid currency");
    }
    return toPrice / fromPrice;
  };
  


module.exports = {
    Swapper
}