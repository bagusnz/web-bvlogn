const express = require('express');

const router = express.Router();

const api_video_controller = require('../../controller/api/video');

// Get comments
router.get('/', api_video_controller.get);

// Add comment
router.post('/', api_video_controller.post);

// Update comment
router.put('/:id', api_video_controller.update);

// Delete comment
router.delete('/:id', api_video_controller.delete);

module.exports = router;