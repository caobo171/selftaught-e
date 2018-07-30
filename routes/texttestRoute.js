const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Test = mongoose.model('tests');

module.exports = app =>{
    app.get('/api/texttest', requireLogin, async (req,res)=>{
        const texttests = await Test.find();
        res.send(texttests);
    });
    app.post('/api/texttest', requireLogin,async (req, res)=>{
       const {title, content, keys} =req.body;
       console.log(req.body);

       const test = new Test({
          title,
          content,
          keys: keys.split('/')
       });

       let data = await test.save();
       res.send(data);
    });
};
