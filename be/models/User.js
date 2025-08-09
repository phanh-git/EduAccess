const mongoose = require('mongoose');

// Định nghĩa cấu trúc cho các đối tượng lồng nhau
const disabilityInfoSchema = new mongoose.Schema({
  type: {
    type: [String], // Một mảng các chuỗi
    default: []
  },
  description: {
    type: String,
    default: ''
  }
}, { _id: false }); // _id: false để không tự tạo _id cho object con này

const accessibilityPrefsSchema = new mongoose.Schema({
  highContrast: {
    type: Boolean,
    default: false
  },
  fontSize: {
    type: String,
    enum: ['normal', 'large', 'extra-large'], // Chỉ cho phép các giá trị này
    default: 'normal'
  },
  enableSubtitles: {
    type: Boolean,
    default: true
  }
}, { _id: false });

// Đây là Schema chính, dựa trên cấu trúc JSON 
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Họ và tên là bắt buộc'], // Bắt buộc phải có
      trim: true // Tự động loại bỏ khoảng trắng thừa
    },
    email: {
      type: String,
      required: [true, 'Email là bắt buộc'],
      unique: true, // Đảm bảo email là duy nhất trong collection
      lowercase: true, // Tự động chuyển email về chữ thường
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Mật khẩu là bắt buộc']
      // Lưu ý: Bạn cần mã hóa mật khẩu trước khi lưu vào DB
    },
    avatar: {
      type: String,
      default: 'url_to_default_avatar.jpg' // Ảnh đại diện mặc định
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student'
    },
    // Sử dụng các schema con đã định nghĩa ở trên
    disabilityInfo: disabilityInfoSchema,
    accessibilityPrefs: accessibilityPrefsSchema
  },
  {
    // Tùy chọn này sẽ tự động thêm 2 trường: createdAt và updatedAt
    timestamps: true
  }
);

// Tạo Model từ Schema
// Mongoose sẽ tự động tạo một collection tên là 'users' (số nhiều, chữ thường) trong MongoDB
const User = mongoose.model('User', userSchema);

// Xuất Model để có thể sử dụng ở các file khác
module.exports = User;