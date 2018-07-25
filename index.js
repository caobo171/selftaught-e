const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./configs/keys');
const socket = require('socket.io');

console.log(keys.mongoURI);
mongoose.connect(keys.mongoURI,
    { useNewUrlParser: true }
    , () => {
        console.log('database connect');
    })
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})


io.on('connection',(socket)=>{
    console.log('helloo sockeetttt');
})