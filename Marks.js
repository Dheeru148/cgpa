const mongoose = require('mongoose');

   const MarksSchema = new mongoose.Schema({
       subject1: Number,
       subject2: Number,
       subject3: Number,
       subject4: Number,
       subject5: Number,
       subject6: Number
   });

   module.exports = mongoose.model('Marks', MarksSchema);
