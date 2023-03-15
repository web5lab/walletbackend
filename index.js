const express = require('express')
const {createMultipleNewWallet,getWallet,getPrivateKey} = require("./Services/createwallet")
const {MonitorBlock} = require("./Services/WalletMonitor")
const app = express()
const Port = 3001



app.get('/', (req, res) => {
  res.send(`Hello World!${MonitorBlock()}`)
})

app.get('/getMultipleWallet/:TotalNumber', (req, res) => {
  const no = req.params.TotalNumber
  res.send(`wallets are ${createMultipleNewWallet(no)}`)
})

app.get('/getKey/:uid', (req,res)=> {
  const no = req.params.uid
  res.send(`Private Key Is ${getPrivateKey(no)}`)
})

app.get('/getWallet/:uid', (req,res) => {
  const uid = req.params.uid
  res.send(`user adress is ${getWallet(uid)}`)
})

app.listen(Port, () => {
  console.log(`server listening on port ${Port}`)
})
