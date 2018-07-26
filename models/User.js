const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId :{
        type:String,
        default:null
    },
    facebookId:{
       type : String,
       default : null
    },
    exp: {
        type:Number,
        default : 0
    },
    coin:{
        type:Number,
        default : 0
    }

});

mongoose.model('user',userSchema);