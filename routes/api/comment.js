const express = require('express');

const router = express.Router();

const api_comment_controller = require('../../controller/api/comment');

// Get comments
router.get('/', api_comment_controller.get);

// Add comment
router.post('/', api_comment_controller.post);

// Update comment
router.put('/:id', api_comment_controller.update);

// Delete comment
router.delete('/:id', api_comment_controller.delete);

module.exports = router;