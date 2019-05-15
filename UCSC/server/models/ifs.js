const fmember = require('./fmember');

const mongoose = require('mongoose');

const mem1 = new fmember();
const mem2 = new fmember();
const mem3 = new fmember();

var Ifs = mongoose.model('Ifs',{
  
    fullName: {type : String},
    registration : {type : String},
    email: {type : String},
    course: {type : String},
    address: {type : String},
    distance : {type : Number},
    telephone: {type : String},
    scholar:{type : String},
    samurdhi : {type : String},
    reason : {type : String},   
   //  work : {type : String},
   
/*
    street : {type : String},
    city : {type : String},
    state : {type : String},
    zip : {type : String},
  */ 
  nfather : {type:String},
  fliving : {type : String},
  fage : {type:String},
  foccupation : {type:String},
  fannual : {type:Number},
  fproperty : {type:Number},
  fother : {type:Number},
  ftotal : {type:Number},
  ftax : {type:String},

  nmother : {type:String},
  mliving : {type : String},
  mage : {type:String},
  moccupation : {type:String},
  mannual : {type:Number},
  mproperty : {type:Number},
  mother : {type:Number},
  mtotal : {type:Number},
  mtax : {type:String},
  net: {type:Number},
  

  married : {type:String},
  
 members : { type : []},

 status : { type : Boolean },
 gpa : { type : Number}

});

module.exports = {Ifs};

