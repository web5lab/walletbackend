const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    platFormName: {
        type: String,
        required: true
    },
    _id: {
        type: Number,
        required: true
    },
    btcAddress: {
        type: String,
        required: true
    },
    bscAddress:{
       type:String,
       required: true
    },
    ethAddress: {
        type: String,
        required: true
    },
    maticAddress:{
       type:String,
       required:true
    },
    btcBalance: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    usdtBalanceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    usdtBalanceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    usdtBalanceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    busdBalanceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    busdBalanceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    busdBalanceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    testPayBalnceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    testPayBalnceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    testPayBalnceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    }
});

module.exports = mongoose.model('User', UserSchema);
