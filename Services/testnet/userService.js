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
  res.send('succesfully saved')
}

const findUser = async (userId) => {
   const user = await userSchema.findById(userId);
   return user;
}

const checkTopUp = async (userId) => {
  const user = await findUser(userId);
  console.log(user.ethAddress);
  const onChainBalance = await Walletbalance(user.ethAddress);
  console.log(onChainBalance);
}
checkTopUp(1)

module.exports = {
     registerNewUser
}
