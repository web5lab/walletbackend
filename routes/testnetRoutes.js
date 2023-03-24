const express = require('express');
const router = express.Router();
const {VerifyServer} = require('../middleware/serverAuth')
const {VerifyAdmin} = require('../middleware/adminAuth')
const {faucetController} = require('../controller/testnet/faucetController')
const userController = require('../controller/testnet/userController')
const adminController = require('../controller/testnet/adminController');

// API => GET
router.get('/balance',VerifyServer);
router.get('/checkTopup',userController.checkTopup);
router.get('/getMultipleWallet',VerifyServer,)
router.get('/walletAddress/',VerifyServer);
router.get('/masterInfo',VerifyAdmin,adminController.getMasterData);
router.get('/userInfo/',VerifyServer,userController.getUser);

//API => POST
router.post('/faucet',faucetController);
router.post('/addUser/:userId',VerifyServer,userController.registerNewUser)

module.exports = router;