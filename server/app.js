const express = require('express');
const route= require('./routes')
// const config = require('./config/env_config/config')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const { ServerApiVersion } = require('mongodb');
const fileUpload = require('express-fileupload')
const path = require('path')


module.exports = function () {
    let serverApp =  express(), create, start;

    create = () => {
        serverApp.set('hostname', 'localhost');
        serverApp.set('port', process.env.PORT);

        serverApp.use(fileUpload())

        // CORS
        serverApp.options('*', cors());
        serverApp.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "Origin, x-access-token, Content-Type, Accept");
            next();
        });

        // Middleware

        serverApp.use(bodyParser.json({limit: '50mb', extended: true}));
        serverApp.use(bodyParser.urlencoded({extended: false}));




        mongoose.connect('mongodb+srv://MainClusture:94QikJPKmTndGaE3@mainclusture.l3f41ws.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi:ServerApiVersion.v1,
            dbName:'Content-Database' ,
            autoIndex: true,
        })
            .then((res) => {console.log('#####---> Mongo DB Connected!');})
            .catch(err => {console.log("####----> Mongo Db not Connected" + err);});

        serverApp.use('/images', express.static(path.join(__dirname, '../images')));

        route.init(serverApp)

    };


    start = () => {
        create();
        let hostname = serverApp.get("hostname"),
            port = serverApp.get("port");

        serverApp.listen(port, () => {
            console.log(
                "Express Server is listening on - https://" + hostname + ":" + port
            );
        });
    };


    return {
        create,start
    };

};
