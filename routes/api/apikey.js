/**
 * Route for /api/apikey
 */

const express = require('express');
const router = express.Router();
const api_apikey_controller = require('../../controller/api/apikey');

/** Declaring requests */
router.get('/', api_apikey_controller.get);
router.post('/', api_apikey_controller.post);
router.put('/:id', api_apikey_controller.update);
router.delete('/:id', api_apikey_controller.delete);

module.exports = router;