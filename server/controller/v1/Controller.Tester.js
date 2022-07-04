const express = require('express')
const route = express.Router();
const controllerTester = require('../../services/v1/tester')



route.get('/upload',controllerTester.createToken)
route.post('/upload-file', controllerTester.uploadFile)


module.exports = route


