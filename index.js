const express = require('express')
const {Walletbalance} = require('./Services/testnet/walletBalance')
const {getFaucetUsdtBsc} = require('./Services/testnet/faucetService')
const {VerifyAdmin} = require('./middleware/adminAuth')
const {VerifyServer} = require('./middleware/serverAuth')
const bodyParser = require('body-parser');
const databaseConnection = require('./mongoDb/db')
const fs = require('fs');
const path = require('path');

const app = express()
const Port = 3001
const router = express.Router()

const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' });

// Middleware function to log errors
function logErrors(err, req, res, next) {
  console.error(err.stack);
  errorLogStream.write(`${new Date().toISOString()} ${err.stack}\n`);
  next(err);
}

// routes import here
const testnetRoute = require('./routes/testnetRoutes');
const adminRoute = require('./routes/adminRoutes');

app.use('/', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Add the error log middleware to the app
app.use(logErrors);




// routes using here
app.use('/testnet',testnetRoute);
app.use('/admin/:secretKey',VerifyAdmin,adminRoute);
app.use('/server/:secretKey',VerifyServer,)


databaseConnection(() => {
  app.listen(Port, () => {
    console.log(`server listening on port ${Port}`)
  })
})

app.post('/testfn/:UserAddress',async (req,res)=> {
  
  const ad = req.params.UserAddress;
  const t =  await Walletbalance(ad)
  res.json(t)
})

app.get('/testapi',async (req,res)=> {
  res.send('server is active')
})

app.get('/error', function(req, res) {
  throw new Error('Example error');
});