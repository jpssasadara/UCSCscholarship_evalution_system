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
        brother5University:req.body.brother5University
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