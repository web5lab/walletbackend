const express = require('express');
const router = express.Router();
const {getWallet,createMultipleNewWallet} = require('../Services/tesnetWallet')

// API => GET
router.get('/faucet/:address');
router.get('/balance/:address');
router.get('/getMultipleWallet/:no',createMultipleNewWallet)
router.get('/walletAddress/:userId',getWallet);
router.get('/walletbalance/:userId');
router.get('/masterInfo/:secretKey');
router.get('/userInfo/:userId');
// API => PUT
// API => PATCH
// API => DELETE

module.exports = router;