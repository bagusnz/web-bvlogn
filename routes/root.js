const express = require('express');

const router = express.Router();

const root_controller = require('../controller/root');

router.get('/', root_controller.get);

module.exports = router;