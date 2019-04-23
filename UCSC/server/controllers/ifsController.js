const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Ifs} = require('../models/ifs');

router.get('/',(req,res)=>{
    Ifs.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else{ console.log("Error in retriving data : "+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
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
        address : req.body.address
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
        name : req.body.name,
        address : req.body.address,
    });
    shol.save((err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log("Error in saving data");}
    });
});

module.exports = router;