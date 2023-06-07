const express = require('express');
const router = express.Router();
const {VerifyServer} = require('../middleware/serverAuth')
const {VerifyAdmin} = require('../middleware/adminAuth')
const {faucetController} = require('../controller/testnet/faucetController')
const userController = require('../controller/testnet/userController')
const adminController = require('../controller/testnet/adminController');
const { varifyJwtToken } = require('../middleware/jwtAuth');
const { verify } = require('tiny-secp256k1');

// API => GET
router.get('/balance',VerifyServer);// body params required => user
router.get('/crypto-conversion-rate',userController.getConversion_Rate)
router.get('/get-coins',userController.getCoins);
router.get('/getSpecificCoin',userController.getSpecificCoin);
router.get('/checkTopup',userController.checkTopup);// body params required => userId
router.get('/getMultipleWallet',VerifyServer,);
router.get('/get-crypto-price',userController.getCoinPrice);
router.get('/address',userController.getUserAdress);
router.get('/masterInfo',VerifyAdmin,adminController.getMasterData);
router.get('/userInfo/',userController.getUser);
router.get('/get-deposite',varifyJwtToken,userController.userDeposite);
router.get('/get-deposite-admin',userController.userDepositeAdmin);
router.get('/get-withdrawl',varifyJwtToken,userController.userWithdrawl);
router.get('/get-withdrawl-admin',userController.userWithdrawlAdmin);
router.get('/get-detailed-transactions',varifyJwtToken,userController.userDetailedTransaction);


//API => POST
router.post('/faucet',faucetController);
router.post('/validateUser',);
router.post('/swap-crypto',userController.SwapCrypto)
router.post('/add-user-crypto-balance',userController.addUserCoin)
router.post('/update-transaction',userController.checkTopupExternalServer)
router.post('/addUser',userController.registerNewUser)// body Par
router.post('/add-withdrawl',varifyJwtToken,userController.addWithdrawal)// body Par

module.exports = router;