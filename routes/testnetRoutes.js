const express = require('express');
const router = express.Router();
const {registerNewUser} = require('../Services/testnet/userService')

// API => GET
router.get('/faucet/:coinName/:address');
router.get('/balance/:address');
router.get('/checkTopup/:UserId/:currency/:network');
router.get('/getMultipleWallet/:no')
router.get('/walletAddress/:userId');
router.get('/walletbalance/:userId',);
router.get('/masterInfo/:secretKey/:userId',);
router.get('/userInfo/:userId');

//API => POST
router.post('/addUser/:userId',registerNewUser)

module.exports = router;