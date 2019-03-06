/**
 * Route for /api/comment
 */

const express = require('express');
const router = express.Router();
const api_comment_controller = require('../../controller/api/comment');

/** Declaring requests. */
router.get('/', api_comment_controller.get);
router.post('/', api_comment_controller.post);
router.put('/:id', api_comment_controller.update);
router.delete('/:id', api_comment_controller.delete);

module.exports = router;