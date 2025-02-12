const express = require('express');
const aiController = require('../controllers/ai.controller');
const router = express.Router();

router.post('/get-response', aiController.getResponse);


module.exports = router