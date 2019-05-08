const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/info',userController.getInfo);


module.exports = router;