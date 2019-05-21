const mongoose = require('mongoose');
var marks = mongoose.model('marks',{
    ids : { type : String},
    name : { type : String},
    registration : { type : String},
    marks : { type : Number},
    cat1 : {type : Number},
    cat2 : {type : Number},
    rank : { type: Number},
    status : { type : String}
});

module.exports = { marks };