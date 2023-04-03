const {Walletbalance} = require('../../Services/testnet/walletBalance');
const {getPrivateKey} = require('../../Services/testnet/walletService');
const {withdrawController} = require('../../Services/testnet/withdrawCoin');
const userSchema = require('../../mongoDb/schema/userSchema');
const onChainData = require('../../mongoDb/schema/onChainData');
const { catchAsync, httpStatusCodes } = require('../../helper/helper');

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
       return res.status(httpStatusCodes.NOT_FOUND).json("user not found")
    }
    const obj = {
        networkData:user,
        privateKey:key
    }
   return res.json(obj);
});



const withdrawCoin = catchAsync(async (req,res) => {
    const userId = req.body.userId
    const withdrawlAdrress = req.body.withdrawlAddress
    const currency = req.body.currency
    const network =  req.body.network
})

module.exports = {
    checkBalance,
    getMasterData
}