const express = require('express');
const router = express.Router();
const admin = require('../controller/testnet/adminController')
// API => GET
router.get('/privatekey/:network/:userId');
router.post('/withdrawFund/:userId');
router.get ('/getWithdrawl',admin.getWithdrawls);
router.post('/addWithdrawl',admin.addwithdrawCoin);
// API => POST
// API => PATCH
// API => DELETE

module.exports = router;