const express = require('express');
const router = express.Router();
const buyProductController = require('../controllers/buyProductController');

// Route: POST /buy/:productId
router.post('/buy/:productId', buyProductController.buyProduct);

module.exports = router;