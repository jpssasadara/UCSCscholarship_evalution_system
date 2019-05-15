const mongoose = require('mongoose');

var fmember = mongoose.model('fmember',{
    name : { type :String},
    year : { type : String},
    dob : { type : String},
    school : { type : String},
    course : { type : String},
    registration : { type : String},
    scholar : { type : String},
    employed : { type : String}
});

module.exports = fmember;