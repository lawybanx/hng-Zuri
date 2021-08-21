const express = require('express');
const path = require('path');
const router = express.Router();
const { postContact } = require('../../controllers/contactController');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'client'));
});

router.route('/').post(postContact);

module.exports = router;
