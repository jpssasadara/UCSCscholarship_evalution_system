const mongoose = require('mongoose');

const adminStuRegSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    regNumber: {type:String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    
});

module.exports = mongoose.model('adminStuReg',adminStuRegSchema);


