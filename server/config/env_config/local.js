let localConfig = {
    app:{
        hostname: "0.0.0.0",
        app_secret:'Algo-Network',
        port:process.env.PORT || 3001,
        base_url: "http://44.206.245.7",
        api_version:'v1'
    },
    db:{
        server_one :"mongodb+srv://MainClusture:94QikJPKmTndGaE3@mainclusture.l3f41ws.mongodb.net/?retryWrites=true&w=majority"
    }

};


module.exports = localConfig;
