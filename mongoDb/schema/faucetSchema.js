const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faucetSchema = new Schema({
   timeStamp:{
    type:Date,
    required:true
   },
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
   hash:{
    type:String,
    required:true
   }
});

module.exports = mongoose.model('User', faucetSchema);
