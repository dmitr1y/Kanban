const express = require('express');
const router = express.Router();


router.put('/create',taskController.create);
router.get('/list',taskController.getList);
router.delete('/delete',taskController.delete);
//router.post('/update',taskController.update);
