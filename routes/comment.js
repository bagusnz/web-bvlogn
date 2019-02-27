const express = require('express');

const router = express.Router();

const comment_controller = require('../controller/comment');

router.get('/', comment_controller.get);

module.exports = router;