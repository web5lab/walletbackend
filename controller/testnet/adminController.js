const {Walletbalance} = require('../../Services/testnet/walletBalance');
const {getPrivateKey} = require('../../Services/testnet/walletService');
const userSchema = require('../../mongoDb/schema/userSchema');
const onChainData = require('../../mongoDb/schema/onChainData');
const { catchAsync } = require('../../helper/helper');

const checkBalance = catchAsync(async (req,res) => {
    const userId = req.body.userId
    const user = await userSchema.findById(userId);
    const obj = await Walletbalance(user.ethAddress);
    res.json(obj);
})



const getMasterData = catchAsync(async (req,res) => {
    const userId = req.body.userId
    const key = getPrivateKey(userId)
    const user = await onChainData.findById(userId);
    if(!user){
       return res.json("user not found")
    }
    const obj = {
        networkData:user,
        privateKey:key
    }
   return res.json(obj);
});

module.exports = {
    checkBalance,
    getMasterData
}