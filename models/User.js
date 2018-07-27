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
    imgUrl:{
        type :String,
        default : 'https://c5.rgstatic.net/m/4671872220764/images/template/default/profile/profile_default_m.jpg' 
    },
    name:{
        type:String,
        default:'unknown'
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