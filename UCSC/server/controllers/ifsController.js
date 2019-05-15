const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Ifs} = require('../models/ifs');
var {fmember} = require('../models/fmember');

router.get('/',(req,res)=>{
    Ifs.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else{ console.log("Error in retriving data : "+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Ifs.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log("Error in retriving record : "+ JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record found with this ID : ${req.params.id} `);

    var schol = {
        name : req.body.name,
        registration : req.body.registration,
        course : req.body.course,
        address : req.body.address,
        distance : req.body.distance,
        telephone : req.body.telephone,
        email : req.body.email,
        scholar : req.body.scholar,
        samurdhi : req.body.samurdhi
    };

    Ifs.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log('Error in updating Employees : '+JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : ${req.params.id}`);
    
    Ifs.findByIdAndRemove(rea.params.id,(err,docs)=>{
        if(!err) { res.send(doc);}
        else { console.log('Error in deleting : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var shol = new Ifs({
        fullName : req.body.fullName,
        registration : req.body.registration,
        course : req.body.course,
        address : req.body.address,
        distance : req.body.distance,
        telephone : req.body.telephone,
        email : req.body.email,
        scholar : req.body.scholar,
        samurdhi : req.body.samurdhi,
        distance : req.body.distance,
        reason : req.body.reason,
      /*
        work : req.body.work,
        zip : req.body.zip,
        state : req.body.state,
        street : req.body.street
      */
        nfather : req.body.nfather,
        fliving : req.body.fliving,
        fage : req.body.fage,
        foccupation : req.body.foccupation,
        faddress : req.body.faddress,
        fannual : req.body.fannual,
        fproperty : req.body.fproperty,
        fother : req.body.fother,
        ftotal : req.body.ftotal,
        ftax : req.body.ftax,

        nmother : req.body.nmother,
        mliving : req.body.mliving,
        mage : req.body.mage,
        moccupation : req.body.moccupation,
        maddress : req.body.maddress,
        mannaul : req.body.mannaul,
        mproperty : req.body.mproperty,
        mother : req.body.mother,
        mtotal : req.body.mtotal,
        mtax : req.body.mtax,
        net : req.body.net,
        
        married : req.body.married,

        members : req.body.members,

        status : req.body.status,
        gpa : req.body.gpa
        
    });
    shol.save((err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log("Error in saving data" + JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;