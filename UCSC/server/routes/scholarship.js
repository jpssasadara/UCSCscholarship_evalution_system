const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/scholarship');

router.post('/',EnrollmentController.create_enrollment);
router.get('/getWelfareStu',EnrollmentController.view_enrollment);
router.get('/getWelfareStu/:stuId',EnrollmentController.view_application);

module.exports=router;