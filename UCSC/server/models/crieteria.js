const mongoose = require('mongoose');

var Crieteria = mongoose.model('Crieteria',{
 distance : {type: []},
 parent : {type : []},
 crt1 : {type : Number},
 crt2 : {type : Number},
 crt3 : {type : Number},
 sibil1 : {type : Number},
 sibil2 : {type : Number},
});
module.exports = {Crieteria};

