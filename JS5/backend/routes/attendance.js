const express = require('express');
const Attendance = require('../models/Attendance');
const router = express.Router();

// Record attendance
router.post('/record', async (req, res) => {
    const { userId, subject, attended } = req.body;
    const record = new Attendance({ userId, subject, attended, date: new Date() });
    await record.save();
    res.status(201).json(record);
});

// Fetch attendance summary
router.get('/summary/:userId', async (req, res) => {
    const records = await Attendance.find({ userId: req.params.userId });
    res.json(records);
});

module.exports = router;
