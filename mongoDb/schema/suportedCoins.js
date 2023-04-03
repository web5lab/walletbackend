const mongoose = require('mongoose');

const supportedCrypto = new mongoose.Schema(
   {
      createdAt:{
        type:Number
      },
      supportedCrypto: [
         {
            currencyId: { type: mongoose.Types.ObjectId, ref: 'cryptocoins' },
            enabled:{type:Boolean,default:true}
         },
      ],
   }
);


module.exports = mongoose.model('supportedCrypto', supportedCrypto);

