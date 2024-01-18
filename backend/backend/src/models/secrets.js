const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Secret', secretSchema);
