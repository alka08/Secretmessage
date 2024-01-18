const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

  
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

  
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

   
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your_email@gmail.com', 
        pass: 'your_email_password', 
      },
    });

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`; // Replace with your frontend reset password page URL

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click the following link to reset your password:</p><a href="${resetUrl}">${resetUrl}</a>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Password reset failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

