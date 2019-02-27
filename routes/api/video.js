const express = require('express');

const router = express.Router();

const video_controller = require('../../controller/api/video');

// Get comments
router.get('/', video_controller.get);

// Add comment
router.post('/', video_controller.post);

// Update comment
router.put('/:id', video_controller.update);

// Delete comment
router.delete('/:id', video_controller.delete);

module.exports = router;