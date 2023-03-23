const express = require('express');
const router = express.Router();
const {VerifyServer} = require('../middleware/serverAuth')
const {VerifyAdmin} = require('../middleware/adminAuth')
const userController = require('../Services/testnet/userService')
const {faucetController} = require('../controller/testnet/faucetController')
const {checkBalance,getMasterData} = require('../controller/testnet/adminController');

// API => GET
router.get('/balance',VerifyServer);
router.get('/checkTopup',);
router.get('/getMultipleWallet',VerifyServer,)
router.get('/walletAddress/',VerifyServer);
router.get('/walletbalance',VerifyServer,checkBalance);
router.get('/masterInfo',VerifyAdmin,getMasterData);
router.get('/userInfo/',VerifyServer,userController.getUser);

//API => POST
router.post('/faucet',faucetController);
router.post('/addUser/:userId',userController.registerNewUser)

module.exports = router;