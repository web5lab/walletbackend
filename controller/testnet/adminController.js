const {Walletbalance} = require('../../Services/testnet/walletBalance');
const {getPrivateKey} = require('../../Services/testnet/walletService');
const userSchema = require('../../mongoDb/schema/userSchema');
const onChainData = require('../../mongoDb/schema/onChainData');

const checkBalance = async (req,res) => {
    const userId = req.body.userId
    const user = await userSchema.findById(userId);
    const obj = await Walletbalance(user.ethAddress);
    res.json(obj);
}

const getMasterData = async (req,res) => {
    const userId = req.body.userId
    const key = await getPrivateKey(userId)
    const user = await onChainData.findById(userId);
    const obj = {
        networkData:user,
        privateKey:key
    }
    res.json(obj);
}

module.exports = {
    checkBalance,
    getMasterData
}