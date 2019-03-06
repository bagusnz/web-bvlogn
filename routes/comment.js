const express = require('express');

const router = express.Router();

const comment_controller = require('../controller/comment');

router.get('/', comment_controller.get);

router.post('/', comment_controller.post);

module.exports = router;