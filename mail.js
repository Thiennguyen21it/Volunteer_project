const nodemailer = require('nodemailer');

// Tạo một transporter sử dụng SMTP
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Địa chỉ email của bạn
    pass: 'your_email_password' // Mật khẩu của bạn
  }
});

// Thiết lập thông tin email
let mailOptions = {
  from: 'your_email@gmail.com', // Địa chỉ email của bạn
  to: 'recipient_email@example.com', // Địa chỉ email của người nhận
  subject: 'Test Email',
  text: 'Nội dung email test!'
};

// Gửi email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email đã được gửi: ' + info.response);
});
