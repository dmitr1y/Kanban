const express = require('express');
const router = express.Router();

const dashboardController=require('../controllers/dashboardController');
//TODO:добавить проверку на принадлежность доски пользователю
//TODO:как делать апдейт???????????????
router.put('/create',dashboardController.create);
//router.post('/update',dashboardController.update);
router.delete('/delete',dashboardController.delete);
router.get('/get',dashboardController.get);
router.get('/list',dashboardController.getList);

module.exports = router;