// backend/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('./customerController');

router.get('/customers', customerController.getAllCustomers);

// Define other routes as per your requirements

module.exports = router;
