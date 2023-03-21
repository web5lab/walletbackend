const express = require('express');
const router = express.Router();

// API => GET
router.get('/getBalanceOnNetwork/:userId');
router.get('totalRegisterdUser');
router.get('/checkTopup/:userId');

// API => POST
router.post('/registerUser')