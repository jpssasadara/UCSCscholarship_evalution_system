const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/scholarship');

<<<<<<< HEAD
router.post('/', EnrollmentController.create_enrollment);
=======
router.post('/',EnrollmentController.create_enrollment);
router.get('/getWelfareStu',EnrollmentController.view_enrollment);
>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8

module.exports = router;