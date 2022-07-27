const fs = require('fs');
const {successResponse,failureResponse, throwValidationErrorResponse, exceptionResponse} = require('../../../utils/response-handlers')
const config = require('../../../config/env_config/config')



const uploadFile = async (req, res)=>{

    try{
        let dir = './images/'+req.body.type+"-images";
        let fileName = new Date().getTime()+".png";
        
        if (!fs.existsSync(dir)){fs.mkdirSync(dir);}

        req.files.image.mv(dir+"/"+fileName).then((data)=>{
            successResponse("Upload File","File Uploaded successfully", {"url":""+config.app.base_url+":"+config.app.port +"/images/"+req.body.type+"-images/"+fileName  },200, req, res)
        }).catch((err)=>{
            failureResponse("Upload File", "Failed to upload", ""+err.message,200, req, res)
        })
    }catch (e){
        exceptionResponse("Upload File","Exception Occurred", ""+e.message, 200, req, res)
    }
}


module.exports = { uploadFile}
