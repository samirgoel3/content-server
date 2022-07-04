const express = require('express');
const router = express.Router();

const testerController = require('../../controller/v1/Controller.Tester');
const uploadController = require('../../controller/v1/Controller.Upload');

router.use('/test', testerController);
router.use('/upload', uploadController);


module.exports = router;

