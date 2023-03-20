const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    platFormName: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    btcAddress: {
        type: String,
        required: true
    },
    ethAddress: {
        type: String,
        required: true
    },
    btcBalance: {
        type: Number,
        required: true
    },
    usdtBalance: {
        type: Number,
        required: true
    },
    busdBalance: {
        type: Number,
        required: true
    },
    testPayBalnce: {
        type: Number,
        required: true
    },
    
});

module.exports = mongoose.model('User', UserSchema);
