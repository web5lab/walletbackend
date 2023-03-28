const {getWallet} =  require('./walletService.js');
const userSchema = require('../../mongoDb/schema/userSchema')
const onChainData = require('../../mongoDb/schema/onChainData');



const addUser = async (userId) => {
  const userdb = await getUserData(userId)
   if(userdb){
      return userdb;
   }
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
  const obj = await user.save()
  return obj;
}




const getUserData = async (userId) => {
   const user = await userSchema.findById(userId);
   if(!user){
    return null
   }
   return user;
  }





module.exports = {
     addUser,
     getUserData
}
