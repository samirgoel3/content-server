const jwt = require('jsonwebtoken')
const fs = require('fs');


const createToken = async (req, res)=>{
    let token = await  jwt.sign({ user_id: 1}, "Algo-Network");
    res.send(token)
}



const uploadFile = async (req, res)=>{
    let dir = './uploads';
    if (!fs.existsSync(dir)){fs.mkdirSync(dir);}
    try{
        let savedFile = await req.files.image.mv(dir+"/"+req.files.image.name)
        res.send(savedFile)
    }catch (e){
        res.send(e.message)
    }
}


module.exports = {createToken, uploadFile}
