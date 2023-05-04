const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const onChainSchema = new Schema({
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
        default:"0"
    },
    usdtBalanceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    usdtBalanceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    usdtBalanceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    busdBalanceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    busdBalanceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    busdBalanceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    testPayBalnceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    testPayBalnceOnEth: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    testPayBalnceOnMatic: {
        type: Schema.Types.Decimal128,
        default:"0"
    },
    pepeCoinBalnceOnBsc: {
        type: Schema.Types.Decimal128,
        default:"0"
    }
});

module.exports = mongoose.model('onChainData', onChainSchema);
