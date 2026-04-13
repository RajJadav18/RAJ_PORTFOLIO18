const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully! I will get back to you soon.' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET - Get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
