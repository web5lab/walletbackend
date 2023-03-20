const express = require('express');
const router = express.Router();
const {getWallet,createMultipleNewWallet} = require('../Services/tesnetWallet')

// API => GET
router.get('/faucet/:coinName/:address');
router.get('/balance/:address');
router.post('/checkTopup/:UserId/:currency/:network');
router.get('/getMultipleWallet/:no',createMultipleNewWallet)
router.get('/walletAddress/:userId',getWallet);
router.get('/walletbalance/:userId',);
router.get('/masterInfo/:secretKey/:userId',);
router.get('/userInfo/:userId');
// API => PUT
// API => PATCH
// API => DELETE

module.exports = router;