const express = require('express');
const router = express.Router();


router.put('/create',columnController.create);
router.get('/list',columnController.getList);
router.delete('/delete',columnController.delete);
//router.post('/update',columnController.update);