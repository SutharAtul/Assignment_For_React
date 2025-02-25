// models/Course.js
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

module.exports = mongoose.model('Course', CourseSchema);