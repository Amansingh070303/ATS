const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    resume: String,
    r1Responses: [String],
    r2Responses: [String],
    status: { type: String, default: 'submitted' }
});

module.exports = mongoose.model('Application', ApplicationSchema);
