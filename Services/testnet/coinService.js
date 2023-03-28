const currencyModel = require('../../mongoDb/schema/currencySchema')
const supportedCoin = require('../../mongoDb/schema/suportedCoins')

const fn = async() => {
    const db = new currencyModel({currencyName:"testPay",locked:false,icon:"test.com/img",description:"not any deiscription",metaDescription:"not provided",suppportedNetwork:[{networkName:"eth",enabled:true},{networkName:"bsc",enabled:true},{networkName:"matic"}]})
    const t = await db.save().then(() => {console.log("saved successfully")}).catch(err => {console.log(err)});
    console.log(t)
}

const fn2 = async () => {
    const db = new supportedCoin({createdAt:123,supportedCrypto:[{currencyId:"64229be4076354ecc6372dd2"},{currencyId:"64229c4c9ace06010f5cdf88"},{currencyId:"64229c677bf4199aea0cc196"}]})
    const t = await db.save()
    console.log(t)
}

const  fn3 = async () => {
    const na = await currencyModel.find();
    return na;
    
}



module.exports ={
    fn3
}