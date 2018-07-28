const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./configs/keys');
const socket = require('socket.io');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./models/User');
require('./models/Test');

mongoose.connect(keys.mongoURI,
    { useNewUrlParser: true }
    , () => {
        console.log('database connect');
    })

require('./services/passport');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
require('./routes/userRoute')(app);
require('./routes/testRoute')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})


io.on('connection', (socket) => {
    console.log('helloo sockeetttt');
})