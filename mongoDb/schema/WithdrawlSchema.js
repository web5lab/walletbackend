const mongoose = require("mongoose");
const userWithdrawl = new mongoose.Schema({
  userId: {
    type: Number,
  },
  currencyId: { type: String },
  address: { type: String },
  network: { type: String },
  amount: { type: String },
  status:{type:String,default:"Withdrawl is in progress"},
  currencyIcon:{type:String},
  transactioyType: { type: String,default:"Withdrawl"},
  userWithdrawlTime: { type: Date, default: Date() },
  approvedTime:{type:Date},
  approved: { type: Boolean, default:false },
  approvedBy: { type: String },
});
module.exports = mongoose.model("userTransaction", userWithdrawl);
