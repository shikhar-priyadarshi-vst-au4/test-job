var express = require('express');
var router = express.Router();
const {register, login} = require('../controllers/user');

router.post('/account/register', register);
router.post('/account/login', login);

module.exports = router;
