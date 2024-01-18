const Secret = require('../models/Secret');

exports.postSecret = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id; 
    const newSecret = new Secret({
      userId,
      message,
    });

    await newSecret.save();

    res.status(201).json({ message: 'Secret posted successfully' });
  } catch (error) {
    console.error('Error posting secret:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getSecrets = async (req, res) => {
  try {
    const secrets = await Secret.find({}, { _id: 0, __v: 0 }).populate('userId', 'email');
    res.json(secrets);
  } catch (error) {
    console.error('Error fetching secrets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

