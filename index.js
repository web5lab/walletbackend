const express = require('express')
const {Walletbalance} = require('./Services/testnet/walletBalance')
const {getFaucetUsdtBsc} = require('./Services/testnet/faucetService')
const bodyParser = require('body-parser');
const databaseConnection = require('./mongoDb/db')

const app = express()
const Port = 3001
const router = express.Router()

// routes import here
const testnetRoute = require('./routes/testnetRoutes');
const adminRoute = require('./routes/adminRoutes');

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





// routes using here
app.use('/testNet',testnetRoute);
app.use('/admin',adminRoute);


databaseConnection(() => {
  app.listen(Port, () => {
    console.log(`server listening on port ${Port}`)
  })
})

app.get('/testfn/:UserAddress',async (req,res)=> {
  const ad = req.params.UserAddress;
  const t =  Walletbalance(ad)
  res.send(`the balance is ${t}`)
})