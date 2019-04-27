const mongoose = require('mongoose');

var Ifs = mongoose.model('Ifs',{
  
    name : {type:String},
    registration : {type:String},
    course : {type:String},
    address : {type:String},
    distance : {type:Number},
    telephone : {type:String},
    email : {type:String},
    scholar : {type:Boolean},
    samurdhi : {type:Boolean}
});

module.exports = {Ifs};