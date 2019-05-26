const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.get('/get', teamController.get);
router.get('/list', teamController.getList);
router.put('/create', teamController.create);
router.post('/update', teamController.update);

module.exports = router;
