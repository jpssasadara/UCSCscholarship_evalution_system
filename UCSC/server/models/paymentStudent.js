const mongoose = require('mongoose');

const paymentStudentSchema = mongoose.Schema({
    date: { type: String },
    // time: { type: String },
    amount: { type: String },
    type: { type: String },
    term: { type: String },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'scholarships' }

});

module.exports = mongoose.model("paymentStudent", paymentStudentSchema);