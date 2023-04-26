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
  transactionType: { type: String,default:"Withdrawl"},
  userTrasactionTime: { type: Date, default: Date() },
  approvedTime:{type:Date},
  transactionHash:{type:String,default:"transaction hash is pending"},
  explorerUrl:{type:String,default:"https://bscscan.com/"},
  approved: { type: Boolean, default:false },
  approvedBy: { type: String },
});
module.exports = mongoose.model("userTransaction", userWithdrawl);
