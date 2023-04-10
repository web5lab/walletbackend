const express = require('express');
const router = express.Router();
const admin = require('../controller/testnet/adminController')
// API => GET
router.get('/privatekey/:network/:userId');
router.post('/withdrawFund/:userId');
router.get ('/getWithdrawl',admin.getWithdrawls);
router.post('/addWithdrawl',admin.addwithdrawCoin);
router.post('/updateWithdrawl',admin.updateWithdrawl);
// API => POST
// API => PATCH
// API => DELETE

module.exports = router;