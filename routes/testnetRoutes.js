const express = require('express');
const router = express.Router();
const {registerNewUser} = require('../Services/testnet/userService')
const {faucetController} = require('../controller/testnet/faucetController')

// API => GET
router.get('/balance/:address');
router.get('/checkTopup/:UserId/:currency/:network');
router.get('/getMultipleWallet/:no')
router.get('/walletAddress/:userId');
router.get('/walletbalance/:userId',);
router.get('/masterInfo/:secretKey/:userId',);
router.get('/userInfo/:userId');

//API => POST
router.post('/faucet',faucetController);
router.post('/addUser/:userId',registerNewUser)

module.exports = router;