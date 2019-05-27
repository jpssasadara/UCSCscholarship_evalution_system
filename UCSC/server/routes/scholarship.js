const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/scholarship');

router.post('/',EnrollmentController.create_enrollment);
router.get('/getWelfareStu',EnrollmentController.view_enrollment);
router.get('/getWelfareStu/:stuId',EnrollmentController.view_application);
router.patch('/getWelfareStu/:stuId',EnrollmentController.update_enrollment);
router.delete('/deleteApplication/:stuId',EnrollmentController.delete_enrollment);
module.exports=router;