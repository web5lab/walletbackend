const mongoose = require('mongoose');

const cryptoCoinsSchema = new mongoose.Schema({
   currencyName: {
      type: String,
      reuqired: [true, 'currency name is required!'],
   },
   suppportedNetwork: [
         {
            networkName: {
               type:String,
               required:true,
            },enabled: {
               type:Boolean,
               default:true,
            }
         },
   ]
   ,
   locked: { type: Boolean, default: true },
   icon: { type: String },
   lotteryCurrency:{type:Boolean,default: false},
   description: { type: String },
   metaDescription: { type: String },
});



const currencyModel = mongoose.model('cryptoCoins', cryptoCoinsSchema);

module.exports = currencyModel;
