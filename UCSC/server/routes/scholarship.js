const express = require('express');
const router = express.Router();
const EnrollmentController = require('../controllers/scholarship');

router.post('/', EnrollmentController.create_enrollment);

module.exports = router;