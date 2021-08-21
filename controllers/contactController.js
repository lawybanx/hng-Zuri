// Bring in Model
const Contact = require('../model/Contact');

exports.postContact = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });

    await newContact.save();
    res.redirect('/')
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
