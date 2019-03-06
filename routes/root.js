/**
 * Route for /
 */

const express = require('express');
const router = express.Router();
const root_controller = require('../controller/root');

/** Declaring requests. */
router.get('/', root_controller.get);

module.exports = router;