const express = require('express');

const router = express.Router();

const api_apikey_controller = require('../../controller/api/apikey');

// Get comments
router.get('/', api_apikey_controller.get);

// Add comment
router.post('/', api_apikey_controller.post);

// Update comment
router.put('/:id', api_apikey_controller.update);

// Delete comment
router.delete('/:id', api_apikey_controller.delete);

module.exports = router;