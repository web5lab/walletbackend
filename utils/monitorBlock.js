const { mn } = require('../config/Config');
const walletList = require('../wallets/wallets.json')
const Web3 = require('web3')
const MonitorWallet = () => {

}

const MonitorBlock = () => {
    const web3 = new Web3('wss://bsc.getblock.io/0b7a547e-cca3-435a-a9f7-f6e9fcdfea01/mainnet/');
    const web3eth = new Web3('wss://matic.getblock.io/0b7a547e-cca3-435a-a9f7-f6e9fcdfea01/mainnet/');
    const web3matic = new Web3('wss://eth.getblock.io/0b7a547e-cca3-435a-a9f7-f6e9fcdfea01/mainnet/');
    web3.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })

    web3matic.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })  

      web3eth.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })   
      web3eth.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })   
      web3eth.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })   
      web3eth.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })   
      web3eth.eth.subscribe('newBlockHeaders', (error, result) => {
        if (error) {
          console.error(error)
        } else {
          console.log(result)
        }
      })   

}

module.exports = {
    MonitorWallet,
    MonitorBlock
}