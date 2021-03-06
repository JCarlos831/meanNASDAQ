var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');

// Stock routes
router
    .route('/stocks')
    .get(ctrlUsers.authenticate, ctrlStocks.stocksGetAll);
    
router
    .route('/stocks/:stockId')
    .get(ctrlStocks.stocksGetOne);
    
// Authentication
router
    .route('/users/register')
    .post(ctrlUsers.register);
    
router
    .route('/users/login')
    .post(ctrlUsers.login);

module.exports = router;