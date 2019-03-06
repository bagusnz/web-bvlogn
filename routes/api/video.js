/**
 * Route for /api/video
 * NOT USED
 */

const express = require('express');
const router = express.Router();
const api_video_controller = require('../../controller/api/video');

/** Declaring requests. */
router.get('/', api_video_controller.get);
router.post('/', api_video_controller.post);
router.put('/:id', api_video_controller.update);
router.delete('/:id', api_video_controller.delete);

module.exports = router;