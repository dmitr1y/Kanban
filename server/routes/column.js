const express = require('express');
const router = express.Router();
const columnController = require('../controllers/columnController');

router.put('/create', columnController.create);
router.delete('/delete', columnController.delete);
router.post('/update',columnController.update);
router.get('/cards', columnController.getCards);
module.exports = router;