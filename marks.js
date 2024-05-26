const express = require('express');
const router = express.Router();
const Marks = require('../models/Marks');

// Route to handle form submission and calculation
router.post('/', async (req, res) => {
    const { subject1, subject2, subject3, subject4, subject5, subject6 } = req.body;
    const marks = new Marks({
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6
    });

    await marks.save();

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    const cgpa = totalMarks / 6 / 10;
    const passMark = 35;
    const result = [subject1, subject2, subject3, subject4, subject5, subject6].every(mark => mark >= passMark) ? "Pass" : "Fail";

    res.json({ totalMarks, cgpa, result });
});

module.exports = router;
