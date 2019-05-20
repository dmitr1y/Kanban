const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.put('/create',cardController.create);
// router.get('/list',cardController.getList);
router.delete('/delete',cardController.delete);
router.post('/update',cardController.update);
router.get('/tasks', cardController.getTasks);

module.exports = router;
