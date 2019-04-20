const mongoose = require('mongoose');

const scholarshipSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    degree: {type: String, required: true},
    fullName: {type: String, required: true},
    address: {type: String, required: true},
    regNumber: {type: String, required: true},
    contactNumber: {type: String, required: true},
    email: {type: String, required: true},
    divisionGramasevaNiladhari: {type: String, required: true},
    distance: {type: String, required: true},
    district: {type: String, required: true}
});

module.exports = mongoose.model('Scholarship',scholarshipSchema);


