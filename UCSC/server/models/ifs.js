const mongoose = require('mongoose');

var Ifs = mongoose.model('Ifs',{
  
    name : {type:String},
    address : {type:String}
});

module.exports = {Ifs};