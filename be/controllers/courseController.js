// controllers/courseController.js
const Course = require('../models/Course'); // Import Mongoose Model Course

// @desc    Tạo một khóa học mới
// @route   POST /api/courses
// @access  Public (hoặc Private nếu cần xác thực)
exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body); // Tạo một instance mới từ Course Model với dữ liệu từ request body

    // Lưu khóa học vào database
    const savedCourse = await newCourse.save();

    // Phản hồi thành công
    res.status(201).json({
      message: 'Khóa học đã được tạo thành công!',
      course: savedCourse
    });

  } catch (error) {
    // Xử lý lỗi
    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ message: 'Dữ liệu không hợp lệ', errors });
    }

    // Các lỗi khác
    console.error('Lỗi khi tạo khóa học:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi tạo khóa học.', error: error.message });
  }
};

// @desc    Lấy tất cả các khóa học
// @route   GET /api/courses
// @access  Public
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({}); // Lấy tất cả các khóa học
    res.status(200).json({
      message: 'Lấy danh sách khóa học thành công!',
      count: courses.length,
      courses: courses
    });
  } catch (error) {
    console.error('Lỗi khi lấy danh sách khóa học:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi lấy danh sách khóa học.', error: error.message });
  }
};

// @desc    Lấy một khóa học theo ID
// @route   GET /api/courses/:id
// @access  Public
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Không tìm thấy khóa học.' });
    }

    res.status(200).json({
      message: 'Lấy thông tin khóa học thành công!',
      course: course
    });
  } catch (error) {
    // Xử lý lỗi nếu ID không hợp lệ (ví dụ: cast to ObjectId failed)
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID khóa học không hợp lệ.' });
    }
    console.error('Lỗi khi lấy khóa học theo ID:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi lấy thông tin khóa học.', error: error.message });
  }
};

// @desc    Cập nhật một khóa học theo ID
// @route   PUT /api/courses/:id
// @access  Public (hoặc Private nếu cần xác thực)
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Trả về tài liệu đã cập nhật
      runValidators: true // Chạy lại các validation đã định nghĩa trong Schema
    });

    if (!course) {
      return res.status(404).json({ message: 'Không tìm thấy khóa học để cập nhật.' });
    }

    res.status(200).json({
      message: 'Khóa học đã được cập nhật thành công!',
      course: course
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ message: 'Dữ liệu không hợp lệ', errors });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID khóa học không hợp lệ.' });
    }
    console.error('Lỗi khi cập nhật khóa học:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi cập nhật khóa học.', error: error.message });
  }
};

// @desc    Xóa một khóa học theo ID
// @route   DELETE /api/courses/:id
// @access  Public (hoặc Private nếu cần xác thực)
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Không tìm thấy khóa học để xóa.' });
    }

    res.status(200).json({
      message: 'Khóa học đã được xóa thành công!',
      deletedCourse: course
    });

  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'ID khóa học không hợp lệ.' });
    }
    console.error('Lỗi khi xóa khóa học:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra khi xóa khóa học.', error: error.message });
  }
};