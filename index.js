const express = require('express')
const {createMultipleNewWallet,getWallet,getPrivateKey} = require("./Services/createwallet")
const {MonitorBlock} = require("./Services/WalletMonitor")
const {CheckBalanceTestnet} = require('./Modals/WalletBalnces');
const bodyParser = require('body-parser');

const app = express()
const Port = 3001
const router = express.Router()

// routes import here
const testnetRoute = require('./routes/testnetRoutes');
const clientRoute = require('./routes/clientRoutes');
const adminRoute = require('./routes/adminRoutes');

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/getMultipleWallet/:TotalNumber', (req, res) => {
  const no = req.params.TotalNumber
  res.json(createMultipleNewWallet(no))
})

app.get('/getKey/:uid', (req,res)=> {
  const no = req.params.uid
  res.send(`Private Key Is ${getPrivateKey(no)}`)
})



// routes using here
app.use('/testNet',testnetRoute);
app.use('/client',clientRoute);
app.use('/admin',adminRoute);

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