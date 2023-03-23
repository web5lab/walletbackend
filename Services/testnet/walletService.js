const ethers = require("ethers")
const { MasterPhrase } = require("../../config/Config")
const bitcoinWalletNode = require('bitcoinjs-lib')
const walletNode = ethers.HDNodeWallet.fromPhrase(MasterPhrase)
const seed = bitcoinWalletNode.crypto.sha256(MasterPhrase);
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32');
const bip32 = BIP32Factory(ecc)
const bitcoinMasterKey = bip32.fromSeed(seed, bitcoinWalletNode.networks.testnet)

// get multiple wallet in single click
const GetWalletOfMultipleUser = (fromUserId,toUserId) => {
    let ad = []
    for (let i = fromUserId; i <= toUserId; i++) {
        const child = bitcoinMasterKey.derivePath(`m/0/${i}`)
        const publicKey = child.publicKey;
        const { address } = bitcoinWalletNode.payments.p2pkh({ pubkey: publicKey, network: bitcoinWalletNode.networks.testnet });
        const obj = {
            Userid: i,
            BtcAdrress: `your bitcoin wallet adress is ${address}`,
            EthAdress: `your etherum based network wallet address is ${walletNode.derivePath(`m/44'/60'/0'/0/${i}`).address}`
        }
        ad.push(obj)
    }
    console.log(ad)
    return res.json(ad)
}

// get wallet address from here
const getWallet = (Userid) => {
    const child = bitcoinMasterKey.derivePath(`m/0/${Userid}`)
    const publicKey = child.publicKey;
    const { address } = bitcoinWalletNode.payments.p2pkh({ pubkey: publicKey, network: bitcoinWalletNode.networks.testnet });
    const obj = {
        Userid: Userid,
        BtcAdrress: address,
        EthAdress: walletNode.derivePath(`m/44'/60'/0'/0/${Userid}`).address
    };
    return obj;
}

// wallet private key for a user
const getPrivateKey = (Userid) => {
    const node = walletNode.derivePath(`m/44'/60'/0'/0/${Userid}`)
    const child = bitcoinMasterKey.derivePath(`m/0/${Userid}`)
    const obj = {
        etherumPrivateKey: node.privateKey,
        bitcoinPrivateKey: child.toWIF()
    }
    return obj;
}

module.exports = {
    GetWalletOfMultipleUser,
    getWallet,
    getPrivateKey
}