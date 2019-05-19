const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Crieteria} = require('../models/crieteria');


router.get('/',(req,res)=>{
    Crieteria.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else{ console.log("Error in retriving data : "+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Crieteria.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log("Error in retriving record : "+ JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record found with this ID : ${req.params.id} `);

    var crt = {
        distance : req.body.distance,
        parent : req.body.parent,
        crt1 : req.body.crt1,
        crt2 : req.body.crt2,
        crt3 : req.body.crt3,
        sibil1 : req.body.sibil1,
        sibil2 : req.body.sibil2
    }
   
    Crieteria.findByIdAndUpdate(req.params.id,{$set:crt},{new:true},(err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log('Error in updating Employees : '+JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : ${req.params.id}`);
    
    Crieteria.findByIdAndRemove(rea.params.id,(err,docs)=>{
        if(!err) { res.send(doc);}
        else { console.log('Error in deleting : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
   var crt = new Crieteria({
        distance : req.body.distance,
        parent : req.body.parent,
        crt1 : req.body.crt1,
        crt2 : req.body.crt2,
        crt3 : req.body.crt3,
        sibil1 : req.body.sibil1,
        sibil2 : req.body.sibil2
   });
    crt.save((err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log("Error in saving data" + JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;