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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})


io.on('connection',(socket)=>{
    console.log('helloo sockeetttt');
})