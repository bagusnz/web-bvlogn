const express = require('express');

const router = express.Router();

const comment_controller = require('../../controller/api/comment');

// Get comments
router.get('/', comment_controller.get);

// Add comment
router.post('/', comment_controller.post);

// Update comment
router.put('/:id', comment_controller.update);

// Delete comment
router.delete('/:id', comment_controller.delete);

module.exports = router;