const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faucetSchema = new Schema({
   walletAddress:{
    type:String,
    required:true
   },
   currencyType:{
    type:String,
    required:true
   },
   amount:{
    type:Number,
    required:true
   },
   currencyNetwork:{
    type:String,
    required:true
   },
   transactionHash:{
    type:String,
    required:true
   },
   timeStamp:{
      type:Date,
      default:Date.now()
   }
});

module.exports = mongoose.model('faucetSchema', faucetSchema);
