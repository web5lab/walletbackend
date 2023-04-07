const mongoose = require("mongoose");
const userWithdrawl = new mongoose.Schema({
  userId: {
    type: Number,
  },
  currencyId: { type: String },
  address: { type: String },
  network: { type: String },
  amount: { type: String },
  transactioyType: { type: String },
  userWithdrawlTime: { type: Date, default: Date() },
  approved: { type: Boolean },
  approvedBy: { type: String },
});
module.exports = mongoose.model("userTransaction", userWithdrawl);
