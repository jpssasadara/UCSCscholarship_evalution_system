const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {marks} = require('../models/marks');


router.get('/',(req,res)=>{
    marks.find((err,docs)=>{
        if(!err) {res.send(docs);}
        else{ console.log("Error in retriving data : "+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    marks.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log("Error in retriving record : "+ JSON.stringify(err,undefined,2));}
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record found with this ID : ${req.params.id} `);

    var mark = {
       ids : req.body.ids,
       name : req.body.name,
       registration : req.body.registration,
       distance : req.body.distance,
       parent : req.body.parent,
       income : req.body.income,
       sibiling : req.body.sibiling,
       marks : req.body.marks,
       rank : req.body.rank,
       cat1 : req.body.cat1,
       cat2 : req.body.cat2,
       status : req.body.status
    }
   
    marks.findByIdAndUpdate(req.params.id,{$set:mark},{new:true},(err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log('Error in updating marks : '+JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : ${req.params.id}`);
    
    marks.findByIdAndRemove(rea.params.id,(err,docs)=>{
        if(!err) { res.send(doc);}
        else { console.log('Error in deleting : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
   var crt = new marks({
    ids : req.body.ids,
    name : req.body.name,
    registration : req.body.registration,
    distance : req.body.distance,
    parent : req.body.parent,
    income : req.body.income,
    sibiling : req.body.sibiling,
    marks : req.body.marks,
    rank : req.body.rank,
    cat1 : req.body.cat1,
    cat2 : req.body.cat2,
    status : req.body.status
   });
    crt.save((err,doc)=>{
        if(!err) { res.send(doc);}
        else{ console.log("Error in saving data" + JSON.stringify(err,undefined,2));}
    });
});

module.exports = router;