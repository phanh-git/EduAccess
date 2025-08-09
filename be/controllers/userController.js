// nhận lệnh gọi từ route, tương tác dữ liệu với db và trả về kết quả
const User = require('../models/User');

// Import thư viện mã hóa mật khẩu
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  try {
    // 1. Lấy đúng các trường dữ liệu từ body của request
    const { fullName, email, password, disabilityInfo } = req.body;

    // 2. Kiểm tra xem các trường bắt buộc đã được cung cấp chưa
    // (Mặc dù Mongoose đã có validation, kiểm tra sớm sẽ tốt hơn)
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ họ tên, email và mật khẩu.' });
    }

    // 3. Kiểm tra xem email đã tồn tại trong database chưa
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      // 409 Conflict - Báo cho client biết rằng tài nguyên họ muốn tạo đã tồn tại
      return res.status(409).json({ message: 'Email này đã được sử dụng.' });
    }

    // 4. Mã hóa mật khẩu (RẤT QUAN TRỌNG VỀ BẢO MẬT)
    const salt = await bcrypt.genSalt(10); // Tạo một chuỗi ngẫu nhiên
    const hashedPassword = await bcrypt.hash(password, salt); // Mã hóa mật khẩu

    // 5. Tạo người dùng mới với dữ liệu đã được xử lý
    const newUser = await User.create({
      fullName, // fullName từ req.body
      email: email.toLowerCase(), // Luôn lưu email dưới dạng chữ thường
      password: hashedPassword, // Lưu mật khẩu đã được mã hóa
      disabilityInfo // Lưu thông tin khuyết tật (nếu có)
    });

    // 6. Trả về kết quả thành công
    // Không nên gửi lại mật khẩu, dù đã mã hóa
    res.status(201).json({
      message: 'Tạo tài khoản thành công!',
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role
      }
    });

  } catch (err) {
    // Bắt các lỗi khác (ví dụ: lỗi kết nối database)
    console.error(err); // Ghi lại lỗi ra console để debug
    res.status(500).json({ message: 'Đã có lỗi xảy ra phía máy chủ', error: err.message });
  }
};

// Read all
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Read one
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update
exports.updateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, password },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
