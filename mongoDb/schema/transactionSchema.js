const mongoose = require('mongoose');
const schema = new mongoose.Schema(
   {
      userId: {
         type: mongoose.Types.ObjectId,
         ref: 'auth',
         reuqired: [true, 'user id is required'],
      },
      currencyId: {
        type: String,
         reuqired: [true, 'currency id is required'],
      },
      amount: {
         type: mongoose.Schema.Types.Decimal128,
      },
      status: { type: String, default: 'Deposit is in progress' },
      wayName: { type: String,default:"crypto transaction" },
      transactionType: {
         type: String,
         reuqired: [true, 'transaction type is reuqired'],
      },
      withdrawInformation: { type: Object },
      paymentApprovedBy: {
         type: String,
      },
      paymentRejectedBy: {
         type:String,
      },
      transactionUpdatedAt: { type: Date },
      createdAt: { type: Date, default: Date.now },
   }
   // { timestamps: true }
);

const model = mongoose.model('transaction', schema);
module.exports = model;


