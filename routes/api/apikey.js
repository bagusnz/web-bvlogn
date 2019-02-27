const express = require('express');

const router = express.Router();

const apikey_controller = require('../../controller/api/apikey');

// Get comments
router.get('/', apikey_controller.get);

// Add comment
router.post('/', apikey_controller.post);

// Update comment
router.put('/:id', apikey_controller.update);

// Delete comment
router.delete('/:id', apikey_controller.delete);

module.exports = router;