const express = require('express');
const router = express.Router();


router.put('/create',cardController.create);
router.get('/list',cardController.getList);
router.delete('/delete',cardController.delete);
//router.post('/update',cardController.update);