const mongoose = require('mongoose');
const userTransaction = new mongoose.Schema(
    {
       _Id:{
         type:Number
       },
       transaction: [
          {
             currencyId: { type:String},
             network:{type:String},
             hash:{type:String},
             transactioyType:{type:String},
             transactedBy:{type:String},
             timeStamp:{type:Number}
          },
       ],
    },
 );
 module.exports = mongoose.model('userTransaction', userTransaction);