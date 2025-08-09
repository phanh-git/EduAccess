// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route để tạo một khóa học mới
router.post('/', courseController.createCourse);

// Route để lấy tất cả các khóa học
router.get('/', courseController.getAllCourses);

// Route để lấy một khóa học theo ID
router.get('/:id', courseController.getCourseById);

// Route để cập nhật một khóa học theo ID
router.put('/:id', courseController.updateCourse);

// Route để xóa một khóa học theo ID
router.delete('/:id', courseController.deleteCourse);

module.exports = router;