const onChainData = require('../../mongoDb/schema/onChainData');
const userSchema = require('../../mongoDb/schema/userSchema')

const compareBalance = async (previousBal, latestBal,userId) => {
  try {
    const obj = {
      busdBsc: latestBal.BalBusdBsc - previousBal.busdBalanceOnBsc,
      busdEth: latestBal.BalBusdEth - previousBal.busdBalanceOnEth,
      busdMatic: latestBal.BalBusdMatic - previousBal.busdBalanceOnMatic,
      testPayBsc: latestBal.BalTestPayBsc - previousBal.usdtBalanceOnBsc,
      testPayEth: latestBal.BalTestPayEth - previousBal.usdtBalanceOnEth,
      testPayMatic: latestBal.BalTestPayMatic - previousBal.usdtBalanceOnMatic,
      usdtBsc: latestBal.BalUsdtBsc - previousBal.testPayBalnceOnBsc,
      usdtEth: latestBal.BalUsdtEth - previousBal.testPayBalnceOnEth,
      usdtMatic: latestBal.BalUsdtMatic - previousBal.testPayBalnceOnMatic,
    };
    console.log(obj)
    if (obj.busdBsc != 0 ||obj.busdEth != 0||obj.busdMatic != 0||obj.usdtBsc != 0||obj.usdtEth != 0||obj.usdtMatic != 0 ||obj.testPayBsc != 0||obj.testPayEth != 0||obj.testPayMatic != 0) {
        await onChainData.updateMany({_id:userId},{ $inc: {busdBalanceOnBsc:obj.busdBsc } });
        await userSchema.updateOne({_id:userId},{$inc:{busdBalance:obj.busdBsc}});
    }  
    if (obj.busdEth != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {busdBalanceOnEth:obj.busdEth } });
        await userSchema.updateOne({_id:userId},{$inc:{busdBalance:obj.busdEth}});
    }  
    if (obj.busdMatic != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {busdBalanceOnMatic:obj.busdMatic } });
        await userSchema.updateOne({_id:userId},{$inc:{busdBalance:obj.busdMatic}});
    }  
    if (obj.usdtBsc != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {usdtBalanceOnBsc:obj.usdtBsc } });
        await userSchema.updateOne({_id:userId},{$inc:{usdtBalance:obj.usdtBsc}});
    }  
    if (obj.usdtEth != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {usdtBalanceOnEth:obj.usdtEth } });
        await userSchema.updateOne({_id:userId},{$inc:{usdtBalance:obj.usdtEth}});
    }  
    if (obj.usdtMatic != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {usdtBalanceOnMatic:obj.usdtMatic } });
        await userSchema.updateOne({_id:userId},{$inc:{usdtBalance:obj.usdtMatic}});
    }  
    if (obj.testPayBsc != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {testPayBalnceOnBsc:obj.testPayBsc } });
        await userSchema.updateOne({_id:userId},{$inc:{testPayBalance:obj.testPayBsc}});
    }  
    if (obj.testPayEth != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {testPayBalnceOnEth:obj.testPayEth } });
        await userSchema.updateOne({_id:userId},{$inc:{testPayBalance:obj.testPayEth}});
    }  
    if (obj.testPayMatic != 0) {
        await onChainData.updateOne({_id:userId},{ $inc: {testPayBalnceOnMatic:obj.testPayMatic } });
        await userSchema.updateOne({_id:userId},{$inc:{testPayBalance:obj.testPayMatic}});
    }  
    return "succesfully updated";
  } catch (error) {
    console.log(error);
  }
};

// const updateData = async (userId,obj) => {
//   const prevData = await onChainData.findById(userId).updateMany({})
//   const n = await onChainData.findByIdAndUpdate(userId,{ usdtBalanceOnBsc: ++currencyValue }) // Specify the new value you want to set
//   console.log(n);
// }

// updateData(1,"usdtBal",11)
module.exports = {
  compareBalance,
};