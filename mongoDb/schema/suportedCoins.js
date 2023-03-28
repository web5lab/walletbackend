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
   },
   { timestamps: true }
);

const wallerModel = mongoose.model('supportedCrypto', supportedCrypto);

module.exports = wallerModel;
