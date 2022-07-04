const express = require('express')
const route = express.Router();
const uploadService = require('../../services/v1/uploader')



route.post('/image',uploadService.uploadFile)


module.exports = route


