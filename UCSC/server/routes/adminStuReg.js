//adminStuRegRoutes
const express = require('express');
const router = express.Router();
const StuRegController = require('../controllers/adminStuReg');

router.post('/',StuRegController.create_registration);
router.post('/getPassword',StuRegController.get_password);

module.exports=router;