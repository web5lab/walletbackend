const ethers = require("ethers")
const {MasterPhrase} = require("../Config/Config")
const walletNode = ethers.HDNodeWallet.fromPhrase(MasterPhrase)
const createMultipleNewWallet = (n) => {
    let ad = []
    for (let i = 1; i <= n; i++) {
      ad.push(walletNode.derivePath(`m/44'/60'/0'/0/${i}`).address); // push each number into the array
    }
    console.log(ad)
     return ad
  }

// get wallet address from here
const getWallet = (Userid)  => {
 return walletNode.derivePath(`m/44'/60'/0'/0/${Userid}`).address
}


// wallet private key for a user
const getPrivateKey = (Userid) => {
    const node = walletNode.derivePath(`m/44'/60'/0'/0/${Userid}`)
   return node.privateKey;
}

module.exports = {
    createMultipleNewWallet,
    getWallet,
    getPrivateKey
}