const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const desiredTime = new Date();
  desiredTime.setHours(10);
  desiredTime.setMinutes(30);
  desiredTime.setSeconds(0);
  desiredTime.setMilliseconds(0);


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
      type:Number,
      default:Date.now()
   }
});

module.exports = mongoose.model('faucetSchema', faucetSchema);
