const Scholarship = require('../models/scholarship');
const mongoose = require('mongoose');

exports.create_enrollment = (req, res, next) => {
    
    const scholarship = new Scholarship({
        _id: new mongoose.Types.ObjectId(),
        batch: req.body.batch,
        degree: req.body.degree,
        fullName: req.body.fullName,
        address: req.body.address,
        regNumber: req.body. regNumber,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        divisionGramasevaNiladhari: req.body.divisionGramasevaNiladhari,
        distance: req.body.distance,
        district: req.body.district,

        brother1Name:req.body.brother1Name,
        brother1Age:req.body.brother1Age,
        brother1CivilStatus:req.body.brother1CivilStatus,
        brother1University:req.body.brother1University,
        
        brother2Name:req.body.brother2Name,
        brother2Age:req.body.brother2Age,
        brother2CivilStatus:req.body.brother2CivilStatus,
        brother2University:req.body.brother2University,
        
        brother3Name:req.body.brother3Name,
        brother3Age:req.body.brother3Age,
        brother3CivilStatus:req.body.brother3CivilStatus,
        brother3University:req.body.brother3University,

        brother4Name:req.body.brother4Name,
        brother4Age:req.body.brother4Age,
        brother4CivilStatus:req.body.brother4CivilStatus,
        brother4University:req.body.brother4University,

        brother5Name:req.body.brother5Name,
        brother5Age:req.body.brother5Age,
        brother5CivilStatus:req.body.brother5CivilStatus,
        brother5University:req.body.brother5University,

        Owner1Name:req.body.Owner1Name,
        Owner1Relationship:req.body.Owner1Relationship,
        Owner1Location:req.body.Owner1Location,
        Owner1Cultivation:req.body.Owner1Cultivation,
        Owner1Extent:req.body.Owner1Extent,
        Owner1Income:req.body.Owner1Income,

        Owner2Name:req.body.Owner2Name,
        Owner2Relationship:req.body.Owner2Relationship,
        Owner2Location:req.body.Owner2Location,
        Owner2Cultivation:req.body.Owner2Cultivation,
        Owner2Extent:req.body.Owner2Extent,
        Owner2Income:req.body.Owner2Income,

        Owner3Name:req.body.Owner3Name,
        Owner3Relationship:req.body.Owner3Relationship,
        Owner3Location:req.body.Owner3Location,
        Owner3Cultivation:req.body.Owner3Cultivation,
        Owner3Extent:req.body.Owner3Extent,
        Owner3Income:req.body.Owner3Income,

        Owner4Name:req.body.Owner4Name,
        Owner4Relationship:req.body.Owner4Relationship,
        Owner4Location:req.body.Owner4Location,
        Owner4Cultivation:req.body.Owner4Cultivation,
        Owner4Extent:req.body.Owner4Extent,
        Owner4Income:req.body.Owner4Income
    });
    scholarship
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                massage: 'Handling post request ',
                createdproduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });

}