/**
 * Route for /videos
 */

const express = require('express');
const router = express.Router();
const video_controller = require('../controller/video');

/** Declaring requests. */
router.get('/', video_controller.get);

module.exports = router;