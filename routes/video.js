const express = require('express');

const router = express.Router();

const video_controller = require('../controller/video');

router.get('/', video_controller.get);

module.exports = router;