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
    usdtBalance: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    busdBalance: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    },
    testPayBalance: {
        type: Schema.Types.Decimal128,
        default:"0.0000"
    }
    
});

module.exports = mongoose.model('User', UserSchema);
