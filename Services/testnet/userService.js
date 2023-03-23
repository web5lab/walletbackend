const {getWallet} =  require('./walletService.js');
const userSchema = require('../../mongoDb/schema/userSchema')
const onChainData = require('../../mongoDb/schema/onChainData');
const {Walletbalance} = require('./walletBalance')

const registerNewUser = async (req,res) => {
  const userId = req.params.userId
  const t =  getWallet(userId);
  const user = new userSchema({
    platFormName:"wc.game",
    _id:userId,
    btcAddress:t.BtcAdrress,
    bscAddress:t.EthAdress,
    ethAddress:t.EthAdress,
    maticAddress:t.EthAdress,
  })
  const chainData = new onChainData({
    platFormName:"wc.game",
    _id:userId,
    btcAddress:t.BtcAdrress,
    bscAddress:t.EthAdress,
    ethAddress:t.EthAdress,
    maticAddress:t.EthAdress,
  })
  chainData.save()
  user.save()
  const returnResponse = {
    _id:userId,
    btcAddress:t.BtcAdrress,
    bscAddress:t.EthAdress,
    ethAddress:t.EthAdress,
    maticAddress:t.EthAdress,
    btcBalance:0,
    usdtBalance:0,
    maticAddress:0,
    busdBalance:0,
  }
  res.json(returnResponse);
}



const getUser = async (req,res) => {
  const userId = req.body.userId
   const user = await userSchema.findById(userId);
   res.json(user);
}




module.exports = {
     registerNewUser,
     getUser
}
