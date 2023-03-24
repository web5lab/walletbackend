const {getWallet} =  require('./walletService.js');
const userSchema = require('../../mongoDb/schema/userSchema')
const onChainData = require('../../mongoDb/schema/onChainData');



const addUser = async (userId) => {
  try {
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
  return returnResponse;
  } catch (error) {
   return "error in server" 
  }
  
}



const getUserData = async (userId) => {
  try {
   const user = await userSchema.findById(userId);
   return user
  } catch (error) {
    try {
      const n = await registerNewUser(userId);
      return n;
    } catch (error) {
      return null;
    }
   
  }

}




module.exports = {
     addUser,
     getUserData
}
