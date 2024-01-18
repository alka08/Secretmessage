const express = require('express');
const router = express.Router();
const secretsController = require('../controllers/secretsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/post-secret', authMiddleware, secretsController.postSecret);
router.get('/get-secrets', secretsController.getSecrets);

module.exports = router;
