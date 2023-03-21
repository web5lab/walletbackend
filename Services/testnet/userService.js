const {getWallet} =  require('./walletService.js');
const userSchema = require('../../mongoDb/schema/userSchema')
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
  user.save()
  res.send('succesfully saved')
}

const findUser = async (userId) => {
   const user = await userSchema.findById(userId);
   console.log(user);
   
}
findUser(2);

module.exports = {
     registerNewUser
}
