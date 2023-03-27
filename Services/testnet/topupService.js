const onChainData = require('../../mongoDb/schema/onChainData');
const userSchema = require('../../mongoDb/schema/userSchema')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    console.log(obj);
    console.log(obj.busdBsc);
    let t = await onChainData.findById(userId);
    if (obj.busdBsc != 0) {
      Number(Number(t.busdBalanceOnBsc) = Number(t.busdBalanceOnBsc) + Number(obj.busdBsc));
    }
    
    t.save();
    console.log(t)
    return t;
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
