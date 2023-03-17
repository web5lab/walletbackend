const express = require('express')
const {createMultipleNewWallet,getWallet,getPrivateKey} = require("./Services/createwallet")
const {MonitorBlock} = require("./Services/WalletMonitor")
const {CheckBalanceTestnet} = require('./Modals/WalletBalnces')
const app = express()
const Port = 3001



app.get('/', (req, res) => {
  res.send(`Hello World!${MonitorBlock()}`)
})

app.get('/getMultipleWallet/:TotalNumber', (req, res) => {
  const no = req.params.TotalNumber
  res.json(createMultipleNewWallet(no))
})

app.get('/getKey/:uid', (req,res)=> {
  const no = req.params.uid
  res.send(`Private Key Is ${getPrivateKey(no)}`)
})

app.get('/testnet/:param', (req,res) => {
 
})

app.get('/mainnet/:param',(req,res)=> {
  const param = req.params.param

})

app.get('/getWallet/:uid', (req,res) => {
  const uid = req.params.uid
  res.json(getWallet(uid))
})

app.listen(Port, () => {
  console.log(`server listening on port ${Port}`)
})

app.get('/testFn/:UserAdrres',async (req,res)=> {
  const ad = req.params.UserAdrres;
  const t = await  CheckBalanceTestnet(ad,'Matic','Usdt')
  res.send(`the balance is ${t}`)
})