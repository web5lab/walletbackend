const express = require('express')

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

app.get('/testfn',async (req,res)=> {
  const ad = req.params.UserAdrres;
  const t = await  getFaucetUsdtBsc(1000,'0x8045287B546E4fB8C069553fA972FF52eaB5AE78')
  res.send(`the balance is ${t}`)
})