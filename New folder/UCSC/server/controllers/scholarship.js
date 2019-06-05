const Scholarship = require('../models/scholarship');
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');

exports.create_enrollment = (req, res, next) => {

    const scholarship = new Scholarship({
        _id: new mongoose.Types.ObjectId(),
        batch: req.body.batch,
        degree: req.body.degree,
        fullName: req.body.fullName,
        address: req.body.address,
        regNumber: req.body.regNumber,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        divisionGramasevaNiladhari: req.body.divisionGramasevaNiladhari,
        distance: req.body.distance,
        district: req.body.district,

        ReasonForApplyingScholarship: req.body.ReasonForApplyingScholarship,
        OtherScholarship: req.body.OtherScholarship,
        Samurdhi: req.body.Samurdhi,

        brother1Name: req.body.brother1Name,
        brother1Age: req.body.brother1Age,
        brother1CivilStatus: req.body.brother1CivilStatus,
        brother1University: req.body.brother1University,

        brother2Name: req.body.brother2Name,
        brother2Age: req.body.brother2Age,
        brother2CivilStatus: req.body.brother2CivilStatus,
        brother2University: req.body.brother2University,

        brother3Name: req.body.brother3Name,
        brother3Age: req.body.brother3Age,
        brother3CivilStatus: req.body.brother3CivilStatus,
        brother3University: req.body.brother3University,

        brother4Name: req.body.brother4Name,
        brother4Age: req.body.brother4Age,
        brother4CivilStatus: req.body.brother4CivilStatus,
        brother4University: req.body.brother4University,

        brother5Name: req.body.brother5Name,
        brother5Age: req.body.brother5Age,
        brother5CivilStatus: req.body.brother5CivilStatus,
        brother5University: req.body.brother5University,

        Owner1Name: req.body.Owner1Name,
        Owner1Relationship: req.body.Owner1Relationship,
        Owner1Location: req.body.Owner1Location,
        Owner1Cultivation: req.body.Owner1Cultivation,
        Owner1Extent: req.body.Owner1Extent,
        Owner1Income: req.body.Owner1Income,

        Owner2Name: req.body.Owner2Name,
        Owner2Relationship: req.body.Owner2Relationship,
        Owner2Location: req.body.Owner2Location,
        Owner2Cultivation: req.body.Owner2Cultivation,
        Owner2Extent: req.body.Owner2Extent,
        Owner2Income: req.body.Owner2Income,

        Owner3Name: req.body.Owner3Name,
        Owner3Relationship: req.body.Owner3Relationship,
        Owner3Location: req.body.Owner3Location,
        Owner3Cultivation: req.body.Owner3Cultivation,
        Owner3Extent: req.body.Owner3Extent,
        Owner3Income: req.body.Owner3Income,

        Owner4Name: req.body.Owner4Name,
        Owner4Relationship: req.body.Owner4Relationship,
        Owner4Location: req.body.Owner4Location,
        Owner4Cultivation: req.body.Owner4Cultivation,
        Owner4Extent: req.body.Owner4Extent,
        Owner4Income: req.body.Owner4Income,

        House1Owner: req.body.House1Owner,
        House1Relationship: req.body.House1Relationship,
        House1AssessmentNo: req.body.House1AssessmentNo,
        House1OwnerNo: req.body.House1OwnerNo,
        House1Address: req.body.House1Address,
        House1AnualIncome: req.body.House1AnualIncome,
        House1RentDetail: req.body.House1RentDetail,

        House2Owner: req.body.House1Owner,
        House2Relationship: req.body.House1Relationship,
        House2AssessmentNo: req.body.House1AssessmentNo,
        House2OwnerNo: req.body.House1OwnerNo,
        House2Address: req.body.House1Address,
        House2AnualIncome: req.body.House1AnualIncome,
        House2RentDetail: req.body.House1RentDetail,

        House3Owner: req.body.House1Owner,
        House3Relationship: req.body.House1Relationship,
        House3AssessmentNo: req.body.House1AssessmentNo,
        House3OwnerNo: req.body.House1OwnerNo,
        House3Address: req.body.House1Address,
        House3AnualIncome: req.body.House1AnualIncome,
        House3RentDetail: req.body.House1RentDetail,

        WorkingPlace: req.body.WorkingPlace,
        WorkingPost: req.body.WorkingPost,
        WorkingSalaryScale: req.body.WorkingSalaryScale,
        WorkingSalary: req.body.WorkingSalary,
        WorkingAppointment: req.body.WorkingAppointment,
        MarriageData: req.body.MarriageData,
        Spouse: req.body.Spouse,
        SpouseInstitution: req.body.SpouseInstitution,
        SpousePost: req.body.SpousePost,
        PresentSalary: req.body.PresentSalary,
        SriLankanCitizen: req.body.SriLankanCitizen,

        FatherName: req.body.FatherName,
        FatherLiving: req.body.FatherLiving,
        FatherYear: req.body.FatherYear,
        FatherMonth: req.body.FatherMonth,
        FatherEmployee: req.body.FatherEmployee,
        FatherEmployeeAddress: req.body.FatherEmployeeAddress,
        FatherPension: req.body.FatherPension,
        FatherHousesProperties: req.body.FatherHousesProperties,
        FatherOtherSources: req.body.FatherOtherSources,
        FatherAnualIncome: req.body.FatherAnualIncome,
        MotherName: req.body.MotherName,
        MotherLiving: req.body.MotherLiving,
        MotherYear: req.body.MotherYear,
        MotherMonth: req.body.MotherMonth,
        MotherEmployee: req.body.MotherEmployee,
        MotherEmployeeAddress: req.body.MotherEmployeeAddress,
        MotherPension: req.body.MotherPension,
        MotherHousesProperties: req.body.MotherHousesProperties,
        MotherOtherSources: req.body.MotherOtherSources,
        MotherAnualIncome: req.body.MotherAnualIncome,
        FatherMotherTotalIncome: req.body.FatherMotherTotalIncome,
        GuardianName: req.body.GuardianName,
        GuardianAge: req.body.GuardianAge,
        GuardianAddress: req.body.GuardianAddress,
        GuardianEmployedPost: req.body.GuardianEmployedPost,
        GuardianAnualSalary: req.body.GuardianAnualSalary,
        GuardianAnualIncome: req.body.GuardianAnualIncome


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

exports.view_enrollment = (req, res, next) => {
    Scholarship.find()
        .select('fullName regNumber distance Samurdhi FatherMotherTotalIncome FatherLiving MotherLiving FatherEmployee MotherEmployee brother1Name brother1Age brother1University brother2Name brother2Age brother2University brother3Name brother3Age brother3University brother4Name brother4Age brother4University brother5Name brother5Age brother5University batch')
        .exec()
        .then(docs => {
            console.log(docs);
            const response = {
                students: docs.map(doc => {
                    return {
                        _id: doc._id,
                        fullName: doc.fullName,
                        regNumber: doc.regNumber,
                        distance: doc.distance,
                        Samurdhi: doc.Samurdhi,
                        FatherMotherTotalIncome: doc.FatherMotherTotalIncome,
                        FatherLiving: doc.FatherLiving,
                        MotherLiving: doc.MotherLiving,
                        FatherEmployee: doc.FatherEmployee,
                        MotherEmployee: doc.MotherEmployee,
                        brother1Name: doc.brother1Name,
                        brother1Age: doc.brother1Age,
                        brother1University: doc.brother1University,
                        brother2Name: doc.brother2Name,
                        brother2Age: doc.brother2Age,
                        brother2University: doc.brother2University,
                        brother3Name: doc.brother3Name,
                        brother3Age: doc.brother3Age,
                        brother3University: doc.brother3University,
                        brother4Name: doc.brother4Name,
                        brother4Age: doc.brother4Age,
                        brother4University: doc.brother4University,
                        brother5Name: doc.brother5Name,
                        brother5Age: doc.brother5Age,
                        brother5University: doc.brother5University,
                        batch: doc.batch

                    };
                })
            }
            res.status(200).json(response.students);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

///getWelfareStu/:stuId',EnrollmentController.view_application

exports.view_application = (req, res, next) => {
    const regNumber = req.params.stuId;
    Scholarship.find({ _id: regNumber })
        .exec()
        .then(docs => {
            const response = {
                students: docs.map(doc => {
                    return {
                        batch: doc.batch,
                        degree: doc.degree,
                        fullName: doc.fullName,
                        address: doc.address,
                        regNumber: doc.regNumber,
                        contactNumber: doc.contactNumber,
                        email: doc.email,
                        divisionGramasevaNiladhari: doc.divisionGramasevaNiladhari,
                        distance: doc.distance,
                        district: doc.district,

                        ReasonForApplyingScholarship: doc.ReasonForApplyingScholarship,
                        OtherScholarship: doc.OtherScholarship,
                        Samurdhi: doc.Samurdhi,

                        brother1Name: doc.brother1Name,
                        brother1Age: doc.brother1Age,
                        brother1CivilStatus: doc.brother1CivilStatus,
                        brother1University: doc.brother1University,

                        brother2Name: doc.brother2Name,
                        brother2Age: doc.brother2Age,
                        brother2CivilStatus: doc.brother2CivilStatus,
                        brother2University: doc.brother2University,

                        brother3Name: doc.brother3Name,
                        brother3Age: doc.brother3Age,
                        brother3CivilStatus: doc.brother3CivilStatus,
                        brother3University: doc.brother3University,

                        brother4Name: doc.brother4Name,
                        brother4Age: doc.brother4Age,
                        brother4CivilStatus: doc.brother4CivilStatus,
                        brother4University: doc.brother4University,

                        brother5Name: doc.brother5Name,
                        brother5Age: doc.brother5Age,
                        brother5CivilStatus: doc.brother5CivilStatus,
                        brother5University: doc.brother5University,

                        Owner1Name: doc.Owner1Name,
                        Owner1Relationship: doc.Owner1Relationship,
                        Owner1Location: doc.Owner1Location,
                        Owner1Cultivation: doc.Owner1Cultivation,
                        Owner1Extent: doc.Owner1Extent,
                        Owner1Income: doc.Owner1Income,

                        Owner2Name: doc.Owner2Name,
                        Owner2Relationship: doc.Owner2Relationship,
                        Owner2Location: doc.Owner2Location,
                        Owner2Cultivation: doc.Owner2Cultivation,
                        Owner2Extent: doc.Owner2Extent,
                        Owner2Income: doc.Owner2Income,

                        Owner3Name: doc.Owner3Name,
                        Owner3Relationship: doc.Owner3Relationship,
                        Owner3Location: doc.Owner3Location,
                        Owner3Cultivation: doc.Owner3Cultivation,
                        Owner3Extent: doc.Owner3Extent,
                        Owner3Income: doc.Owner3Income,

                        Owner4Name: doc.Owner4Name,
                        Owner4Relationship: doc.Owner4Relationship,
                        Owner4Location: doc.Owner4Location,
                        Owner4Cultivation: doc.Owner4Cultivation,
                        Owner4Extent: doc.Owner4Extent,
                        Owner4Income: doc.Owner4Income,

                        House1Owner: doc.House1Owner,
                        House1Relationship: doc.House1Relationship,
                        House1AssessmentNo: doc.House1AssessmentNo,
                        House1OwnerNo: doc.House1OwnerNo,
                        House1Address: doc.House1Address,
                        House1AnualIncome: doc.House1AnualIncome,
                        House1RentDetail: doc.House1RentDetail,

                        House2Owner: doc.House1Owner,
                        House2Relationship: doc.House1Relationship,
                        House2AssessmentNo: doc.House1AssessmentNo,
                        House2OwnerNo: doc.House1OwnerNo,
                        House2Address: doc.House1Address,
                        House2AnualIncome: doc.House1AnualIncome,
                        House2RentDetail: doc.House1RentDetail,

                        House3Owner: doc.House1Owner,
                        House3Relationship: doc.House1Relationship,
                        House3AssessmentNo: doc.House1AssessmentNo,
                        House3OwnerNo: doc.House1OwnerNo,
                        House3Address: doc.House1Address,
                        House3AnualIncome: doc.House1AnualIncome,
                        House3RentDetail: doc.House1RentDetail,

                        WorkingPlace: doc.WorkingPlace,
                        WorkingPost: doc.WorkingPost,
                        WorkingSalaryScale: doc.WorkingSalaryScale,
                        WorkingSalary: doc.WorkingSalary,
                        WorkingAppointment: doc.WorkingAppointment,
                        MarriageData: doc.MarriageData,
                        Spouse: doc.Spouse,
                        SpouseInstitution: doc.SpouseInstitution,
                        SpousePost: doc.SpousePost,
                        PresentSalary: doc.PresentSalary,
                        SriLankanCitizen: doc.SriLankanCitizen,

                        FatherName: doc.FatherName,
                        FatherLiving: doc.FatherLiving,
                        FatherYear: doc.FatherYear,
                        FatherMonth: doc.FatherMonth,
                        FatherEmployee: doc.FatherEmployee,
                        FatherEmployeeAddress: doc.FatherEmployeeAddress,
                        FatherPension: doc.FatherPension,
                        FatherHousesProperties: doc.FatherHousesProperties,
                        FatherOtherSources: doc.FatherOtherSources,
                        FatherAnualIncome: doc.FatherAnualIncome,
                        MotherName: doc.MotherName,
                        MotherLiving: doc.MotherLiving,
                        MotherYear: doc.MotherYear,
                        MotherMonth: doc.MotherMonth,
                        MotherEmployee: doc.MotherEmployee,
                        MotherEmployeeAddress: doc.MotherEmployeeAddress,
                        MotherPension: doc.MotherPension,
                        MotherHousesProperties: doc.MotherHousesProperties,
                        MotherOtherSources: doc.MotherOtherSources,
                        MotherAnualIncome: doc.MotherAnualIncome,
                        FatherMotherTotalIncome: doc.FatherMotherTotalIncome,
                        GuardianName: doc.GuardianName,
                        GuardianAge: doc.GuardianAge,
                        GuardianAddress: doc.GuardianAddress,
                        GuardianEmployedPost: doc.GuardianEmployedPost,
                        GuardianAnualSalary: doc.GuardianAnualSalary,
                        GuardianAnualIncome: doc.GuardianAnualIncome

                    };
                })
            }
            res.status(200).json(response.students);


        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

exports.update_enrollment = (req, res, next) => {
    const regNum = req.params.stuId;
    const updateOps = {};
    // for(const ops of req.body){
    //   updateOps[ops.propName] = ops.value;
    // }
    Scholarship.update({ regNumber: regNum }, {
        $set: {
            batch: req.body.batch,
            degree: req.body.degree,
            fullName: req.body.fullName,
            address: req.body.address,
            regNumber: req.body.regNumber,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            divisionGramasevaNiladhari: req.body.divisionGramasevaNiladhari,
            distance: req.body.distance,
            district: req.body.district,

            ReasonForApplyingScholarship: req.body.ReasonForApplyingScholarship,
            OtherScholarship: req.body.OtherScholarship,
            Samurdhi: req.body.Samurdhi,

            brother1Name: req.body.brother1Name,
            brother1Age: req.body.brother1Age,
            brother1CivilStatus: req.body.brother1CivilStatus,
            brother1University: req.body.brother1University,

            brother2Name: req.body.brother2Name,
            brother2Age: req.body.brother2Age,
            brother2CivilStatus: req.body.brother2CivilStatus,
            brother2University: req.body.brother2University,

            brother3Name: req.body.brother3Name,
            brother3Age: req.body.brother3Age,
            brother3CivilStatus: req.body.brother3CivilStatus,
            brother3University: req.body.brother3University,

            brother4Name: req.body.brother4Name,
            brother4Age: req.body.brother4Age,
            brother4CivilStatus: req.body.brother4CivilStatus,
            brother4University: req.body.brother4University,

            brother5Name: req.body.brother5Name,
            brother5Age: req.body.brother5Age,
            brother5CivilStatus: req.body.brother5CivilStatus,
            brother5University: req.body.brother5University,

            Owner1Name: req.body.Owner1Name,
            Owner1Relationship: req.body.Owner1Relationship,
            Owner1Location: req.body.Owner1Location,
            Owner1Cultivation: req.body.Owner1Cultivation,
            Owner1Extent: req.body.Owner1Extent,
            Owner1Income: req.body.Owner1Income,

            Owner2Name: req.body.Owner2Name,
            Owner2Relationship: req.body.Owner2Relationship,
            Owner2Location: req.body.Owner2Location,
            Owner2Cultivation: req.body.Owner2Cultivation,
            Owner2Extent: req.body.Owner2Extent,
            Owner2Income: req.body.Owner2Income,

            Owner3Name: req.body.Owner3Name,
            Owner3Relationship: req.body.Owner3Relationship,
            Owner3Location: req.body.Owner3Location,
            Owner3Cultivation: req.body.Owner3Cultivation,
            Owner3Extent: req.body.Owner3Extent,
            Owner3Income: req.body.Owner3Income,

            Owner4Name: req.body.Owner4Name,
            Owner4Relationship: req.body.Owner4Relationship,
            Owner4Location: req.body.Owner4Location,
            Owner4Cultivation: req.body.Owner4Cultivation,
            Owner4Extent: req.body.Owner4Extent,
            Owner4Income: req.body.Owner4Income,

            House1Owner: req.body.House1Owner,
            House1Relationship: req.body.House1Relationship,
            House1AssessmentNo: req.body.House1AssessmentNo,
            House1OwnerNo: req.body.House1OwnerNo,
            House1Address: req.body.House1Address,
            House1AnualIncome: req.body.House1AnualIncome,
            House1RentDetail: req.body.House1RentDetail,

            House2Owner: req.body.House1Owner,
            House2Relationship: req.body.House1Relationship,
            House2AssessmentNo: req.body.House1AssessmentNo,
            House2OwnerNo: req.body.House1OwnerNo,
            House2Address: req.body.House1Address,
            House2AnualIncome: req.body.House1AnualIncome,
            House2RentDetail: req.body.House1RentDetail,

            House3Owner: req.body.House1Owner,
            House3Relationship: req.body.House1Relationship,
            House3AssessmentNo: req.body.House1AssessmentNo,
            House3OwnerNo: req.body.House1OwnerNo,
            House3Address: req.body.House1Address,
            House3AnualIncome: req.body.House1AnualIncome,
            House3RentDetail: req.body.House1RentDetail,

            WorkingPlace: req.body.WorkingPlace,
            WorkingPost: req.body.WorkingPost,
            WorkingSalaryScale: req.body.WorkingSalaryScale,
            WorkingSalary: req.body.WorkingSalary,
            WorkingAppointment: req.body.WorkingAppointment,
            MarriageData: req.body.MarriageData,
            Spouse: req.body.Spouse,
            SpouseInstitution: req.body.SpouseInstitution,
            SpousePost: req.body.SpousePost,
            PresentSalary: req.body.PresentSalary,
            SriLankanCitizen: req.body.SriLankanCitizen,

            FatherName: req.body.FatherName,
            FatherLiving: req.body.FatherLiving,
            FatherYear: req.body.FatherYear,
            FatherMonth: req.body.FatherMonth,
            FatherEmployee: req.body.FatherEmployee,
            FatherEmployeeAddress: req.body.FatherEmployeeAddress,
            FatherPension: req.body.FatherPension,
            FatherHousesProperties: req.body.FatherHousesProperties,
            FatherOtherSources: req.body.FatherOtherSources,
            FatherAnualIncome: req.body.FatherAnualIncome,
            MotherName: req.body.MotherName,
            MotherLiving: req.body.MotherLiving,
            MotherYear: req.body.MotherYear,
            MotherMonth: req.body.MotherMonth,
            MotherEmployee: req.body.MotherEmployee,
            MotherEmployeeAddress: req.body.MotherEmployeeAddress,
            MotherPension: req.body.MotherPension,
            MotherHousesProperties: req.body.MotherHousesProperties,
            MotherOtherSources: req.body.MotherOtherSources,
            MotherAnualIncome: req.body.MotherAnualIncome,
            FatherMotherTotalIncome: req.body.FatherMotherTotalIncome,
            GuardianName: req.body.GuardianName,
            GuardianAge: req.body.GuardianAge,
            GuardianAddress: req.body.GuardianAddress,
            GuardianEmployedPost: req.body.GuardianEmployedPost,
            GuardianAnualSalary: req.body.GuardianAnualSalary,
            GuardianAnualIncome: req.body.GuardianAnualIncome
        }
    })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                massage: 'Application updated',
                resultt: updateOps
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

//delete_enrollment

exports.delete_enrollment = (req, res, next) => {
    const regNum = req.params.stuId;


    // Scholarship.find({ _id: regNumber})
    // .exec()
    // .then(docs => {
    //     const response = docs. email;

    Scholarship.find({ _id: regNum })
        .exec()
        .then(docs => {
            const response = docs.map(doc => {
                return doc.email
            })
            const fullName = docs.map(doc => {
                return doc.fullName
            })

            const regNumber = docs.map(doc => {
                return doc.regNumber
            })
            //res.status(200).json(response.application);
            //-------------------E MAIL SENDING PART ---------------------------------
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'fmsucscgroup5@gmail.com',
                    pass: 'fmsucscg5'
                }
            });

            var mailOptions = {
                from: 'fmsucscgroup5@gmail.com',
                to: response,
                subject: 'Exam Branch UCSC',
                text:

                    '###### UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING ###### \n' +

                    'Dear ' + fullName + " ( " + regNumber + " ) \n"
                    + 'Sorry your Application form of WELFARE AND DISTRESS FUND SCHOLARSHIP has been rejected. please contact us as soon as possible \n' +
                    'from UCSC Exam branch......'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            //----------------------------------------------------

            Scholarship.remove({ _id: regNum })
                .exec()
                .then(result => {
                    res.status(200).json({
                        message: 'Application Deleted ',
                    })
                })

        })

    //email: doc. email

    //})

}