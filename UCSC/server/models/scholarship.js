const mongoose = require('mongoose');

const scholarshipSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    batch: {type:String, required: true},
    degree: {type: String, required: true},
    fullName: {type: String, required: true},
    address: {type: String, required: true},
    regNumber: {type: String, required: true},
    contactNumber: {type: String, required: true},
    email: {type: String, required: true},
    divisionGramasevaNiladhari: {type: String, required: true},
    distance: {type: String, required: true},
    district: {type: String, required: true},

    brother1Name: {type: String},
    brother1Age: {type: String},
    brother1CivilStatus: {type: String},
    brother1University: {type: String},

    brother2Name: {type: String},
    brother2Age: {type: String},
    brother2CivilStatus: {type: String},
    brother2University: {type: String},

    brother3Name: {type: String},
    brother3Age: {type: String},
    brother3CivilStatus: {type: String},
    brother3University: {type: String},

    brother4Name: {type: String},
    brother4Age: {type: String},
    brother4CivilStatus: {type: String},
    brother4University: {type: String},

    brother5Name: {type: String},
    brother5Age: {type: String},
    brother5CivilStatus: {type: String},
    brother5University: {type: String},

    Owner1Name:{type: String},
    Owner1Relationship:{type: String},
    Owner1Location:{type: String},
    Owner1Cultivation:{type: String},
    Owner1Extent:{type: String},
    Owner1Income:{type: String},

    Owner2Name:{type: String},
    Owner2Relationship:{type: String},
    Owner2Location:{type: String},
    Owner2Cultivation:{type: String},
    Owner2Extent:{type: String},
    Owner2Income:{type: String},

    Owner3Name:{type: String},
    Owner3Relationship:{type: String},
    Owner3Location:{type: String},
    Owner3Cultivation:{type: String},
    Owner3Extent:{type: String},
    Owner3Income:{type: String},

    Owner4Name:{type: String},
    Owner4Relationship:{type: String},
    Owner4Location:{type: String},
    Owner4Cultivation:{type: String},
    Owner4Extent:{type: String},
    Owner4Income:{type: String},


});

module.exports = mongoose.model('Scholarship',scholarshipSchema);


