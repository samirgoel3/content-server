const jwt = require('jsonwebtoken')
const fs = require('fs');
const {successResponse,failureResponse, throwValidationErrorResponse, exceptionResponse} = require('../../../utils/response-handlers')


const uploadFile = async (req, res)=>{

    try{
        let dir = './'+req.body.type+"-images";
        if (!fs.existsSync(dir)){fs.mkdirSync(dir);}
        req.files.image.mv(dir+"/"+req.files.image.name).then((data)=>{
            successResponse("Upload File","File Uploaded successfully", {"url":"some stored url will goes here"},200, req, res)
        }).catch((err)=>{
            failureResponse("Upload File", "Failed to upload", ""+err.message,200, req, res)
        })
    }catch (e){
        exceptionResponse("Upload File","Exception Occurred", ""+e.message, 200, req, res)
    }
}


module.exports = { uploadFile}
