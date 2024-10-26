const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    subject: String,
    date: Date,
    attended: Boolean,
});

module.exports = mongoose.model('Attendance', attendanceSchema);
