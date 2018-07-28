const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('tests');

module.exports = app =>{
    app.post('/api/tests', requireLogin,async (req, res)=>{
       const {title, content, keys} =req.body;

       const survey = new Survey({
          title,
          content,
          keys
       });

       await survey.save();
    });
};
