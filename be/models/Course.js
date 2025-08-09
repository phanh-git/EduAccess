// models/Course.js
const mongoose = require('mongoose');

// Schema cho tài nguyên của bài học (ví dụ: slide, code, PDF)
const resourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['pdf', 'zip', 'code', 'link', 'document', 'image'], default: 'link' }
}, { _id: false }); // _id: false để không tự động tạo ID cho tài nguyên, vì nó là sub-document

// Schema cho một bài học cụ thể
const lessonSchema = new mongoose.Schema({
  lessonTitle: { type: String, required: true },
  videoUrl: { type: String },
  description: { type: String },
  durationInMinutes: { type: Number, min: 0 },
  order: { type: Number, required: true, min: 1 },
  resources: [resourceSchema] // Mảng các tài nguyên
}, { _id: false }); // _id: false để không tự động tạo ID cho bài học, vì nó là sub-document

// Schema cho một chương trong khóa học
const chapterSchema = new mongoose.Schema({
  chapterTitle: { type: String, required: true },
  lessons: [lessonSchema] // Mảng các bài học trong chương
}, { _id: false }); // _id: false để không tự động tạo ID cho chương, vì nó là sub-document

// Schema chính cho khóa học
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Tiêu đề khóa học là bắt buộc.'],
    trim: true,
    minlength: [5, 'Tiêu đề khóa học phải có ít nhất 5 ký tự.'],
    maxlength: [100, 'Tiêu đề khóa học không được vượt quá 100 ký tự.']
  },
  description: {
    type: String,
    required: [true, 'Mô tả khóa học là bắt buộc.'],
    minlength: [20, 'Mô tả khóa học phải có ít nhất 20 ký tự.']
  },
  instructor: {
    instructorId: {
      type: mongoose.Schema.Types.ObjectId, // Có thể tham chiếu đến một collection 'users' hoặc 'instructors'
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  category: {
    type: [String], // Mảng các chuỗi
    required: true,
    enum: ['Lập trình', 'Khoa học dữ liệu', 'Thiết kế', 'Kinh doanh', 'Marketing', 'Nghệ thuật', 'Ngôn ngữ', 'Phát triển cá nhân', 'Khác'],
    default: ['Khác']
  },
  tags: {
    type: [String], // Mảng các chuỗi
    default: []
  },
  difficulty: {
    type: String,
    enum: ['Sơ cấp', 'Trung bình', 'Nâng cao'],
    default: 'Trung bình'
  },
  price: {
    amount: {
      type: Number,
      required: true,
      min: [0, 'Giá tiền không được âm.']
    },
    currency: {
      type: String,
      enum: ['VND', 'USD', 'EUR'],
      default: 'VND'
    }
  },
  language: {
    type: String,
    default: 'Tiếng Việt'
  },
  thumbnailUrl: {
    type: String,
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, 'URL hình ảnh không hợp lệ.']
  },
  promoVideoUrl: {
    type: String,
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, 'URL video không hợp lệ.']
  },
  durationInMinutes: {
    type: Number,
    min: [1, 'Thời lượng khóa học phải lớn hơn 0 phút.']
  },
  numberOfLessons: {
    type: Number,
    min: [0, 'Số lượng bài học không được âm.']
  },
  learningOutcomes: {
    type: [String],
    default: []
  },
  prerequisites: {
    type: [String],
    default: []
  },
  syllabus: {
    type: [chapterSchema], // Mảng các chương
    default: []
  },
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  totalReviews: {
    type: Number,
    min: 0,
    default: 0
  },
  enrollmentsCount: {
    type: Number,
    min: 0,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

// Tạo Model từ Schema
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;