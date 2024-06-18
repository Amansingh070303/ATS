const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    location: String,
    salary: Number,
    responsibilities: String,
    r1Check: [String],
    r2Check: [String],
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Job', JobSchema);
