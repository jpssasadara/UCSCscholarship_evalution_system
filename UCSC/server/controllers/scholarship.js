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
        Owner4Income:req.body.Owner4Income,

        House1Owner:req.body.House1Owner,
        House1Relationship:req.body.House1Relationship,
        House1AssessmentNo:req.body.House1AssessmentNo,
        House1OwnerNo:req.body.House1OwnerNo,
        House1Address:req.body.House1Address,
        House1AnualIncome:req.body.House1AnualIncome,
        House1RentDetail:req.body.House1RentDetail,

        House2Owner:req.body.House1Owner,
        House2Relationship:req.body.House1Relationship,
        House2AssessmentNo:req.body.House1AssessmentNo,
        House2OwnerNo:req.body.House1OwnerNo,
        House2Address:req.body.House1Address,
        House2AnualIncome:req.body.House1AnualIncome,
        House2RentDetail:req.body.House1RentDetail,

        House3Owner:req.body.House1Owner,
        House3Relationship:req.body.House1Relationship,
        House3AssessmentNo:req.body.House1AssessmentNo,
        House3OwnerNo:req.body.House1OwnerNo,
        House3Address:req.body.House1Address,
        House3AnualIncome:req.body.House1AnualIncome,
        House3RentDetail:req.body.House1RentDetail,

        WorkingPlace:req.body.WorkingPlace,
        WorkingPost:req.body.WorkingPost,
        WorkingSalaryScale:req.body.WorkingSalaryScale,
        WorkingSalary:req.body.WorkingSalary,
        WorkingAppointment:req.body.WorkingAppointment,
        MarriageData:req.body.MarriageData,
        Spouse:req.body.Spouse,
        SpouseInstitution:req.body.SpouseInstitution,
        SpousePost:req.body.SpousePost,
        PresentSalary:req.body.PresentSalary,
        SriLankanCitizen:req.body.SriLankanCitizen,

        FatherName:req.body.FatherName,
        FatherLiving:req.body.FatherLiving,
        FatherYear:req.body.FatherYear,
        FatherMonth:req.body.FatherMonth,
        FatherEmployee:req.body.FatherEmployee,
        FatherEmployeeAddress:req.body.FatherEmployeeAddress,
        FatherPension:req.body.FatherPension,
        FatherHousesProperties:req.body.FatherHousesProperties,
        FatherOtherSources:req.body.FatherOtherSources,
        FatherAnualIncome:req.body.FatherAnualIncome,
        MotherName:req.body.MotherName,
        MotherLiving:req.body.MotherLiving,
        MotherYear:req.body.MotherYear,
        MotherMonth:req.body.MotherMonth,
        MotherEmployee:req.body.MotherEmployee,
        MotherEmployeeAddress:req.body.MotherEmployeeAddress,
        MotherPension:req.body.MotherPension,
        MotherHousesProperties:req.body.MotherHousesProperties,
        MotherOtherSources:req.body.MotherOtherSources,
        MotherAnualIncome:req.body.MotherAnualIncome,
        FatherMotherTotalIncome:req.body.FatherMotherTotalIncome,
        GuardianName:req.body.GuardianName,
        GuardianAge:req.body.GuardianAge,
        GuardianAddress:req.body.GuardianAddress,
        GuardianEmployedPost:req.body.GuardianEmployedPost,
        GuardianAnualSalary:req.body.GuardianAnualSalary,
        GuardianAnualIncome:req.body.GuardianAnualIncome


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