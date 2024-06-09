const express = require('express');
const { signup, signin, forgotPassword, resetPassword } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;