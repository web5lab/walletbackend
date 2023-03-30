const {getWallet} =  require('./walletService.js');
const userSchema = require('../../mongoDb/schema/userSchema')
const onChainData = require('../../mongoDb/schema/onChainData');




const addUser = async (userId) => {
  const userdb = await getUserData(userId)
   
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

const getuserDepositeAdressBtc = async(userId) => {
  const user = await userSchema.findById(userId);
  if(!user){
   return "user not found"
  }
  const data ={
      btc:[{
        network:"native",
        address:user.btcAddress
      }] 
  }
  return data;
}

const getuserDepositeAdressUsdt = async(userId) => {
  const user = await userSchema.findById(userId);
  if(!user){
   return "user not found"
  }
  const data ={
      Usdt:[{
        network:"Erc20",
        address:user.ethAddress
      },{
        network:"Bep20",
        address:user.ethAddress
      },{
        network:"matci",
        address:user.ethAddress
      }] 
  }
  return data;
}

const getuserDepositeAdressBusd = async(userId) => {
  const user = await userSchema.findById(userId);
  if(!user){
   return "user not found"
  }
  const data ={
      Busd:[{
        network:"Erc20",
        address:user.ethAddress
      },{
        network:"Bep20",
        address:user.ethAddress
      },{
        network:"matci",
        address:user.ethAddress
      }] 
  }
  return data;
}

const getuserDepositeAdressTestPay = async(userId) => {
  const user = await userSchema.findById(userId);
  if(!user){
   return "user not found"
  }
  const data ={
      testPay:[{
        network:"Erc20",
        address:user.ethAddress
      },{
        network:"Bep20",
        address:user.ethAddress
      },{
        network:"matci",
        address:user.ethAddress
      }] 
  }
  return data;
}

const getAddress = async(userId,currency)=>{
 if (currency == "Btc") {
  return await getuserDepositeAdressBtc(userId)
 }
 if (currency == "Usdt") {
  return await getuserDepositeAdressBusd(userId)
 }
 if (currency == "Busd") {
  return await getuserDepositeAdressUsdt(userId)
 }
 if (currency == "TestPay") {
  return await getuserDepositeAdressTestPay(userId)
 }
 return "invalid currency";
}

const getUserData = async (userId) => {
   const user = await userSchema.findById(userId);

   console.log(user);

   
   if(!user){
    return "user not found"
   }
   
   const userAr = [
    {
      icon:"https://bc.game/coin/BTC.black.png",
      symbol:"Btc",
      balnance:user.btcBalance,
    },
    {
      icon:"https://bc.game/coin/USDT.black.png",
      symbol:"Usdt",
      balnance:user.usdtBalance,
    },
    {
      icon:"https://bc.game/coin/BUSD.black.png",
      symbol:"Busd",
      balnance:user.busdBalance,
    },
    {
      icon:"https://bc.game/coin/PEOPLE.black.png",
      symbol:"testPay",
      balnance:user.testPayBalance,
    }
  ]
   
   return userAr;
  }





module.exports = {
     addUser,
     getUserData,
     getAddress
}
