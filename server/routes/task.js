const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.put('/create',taskController.create);
router.get('/list',taskController.getList);
router.delete('/delete',taskController.delete);
//router.post('/update',taskController.update);

module.exports = router;