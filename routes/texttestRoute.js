const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Test = mongoose.model('tests');

module.exports = app =>{

    //Get Tests
    app.get('/api/texttest', requireLogin, async (req,res)=>{
        const texttests = await Test.find();
        res.send(texttests);
    });

    //Get Test
    app.get('/api/texttest/:_id', async (req,res)=>{
        const texttest = await Test.findOne({_id: req.params._id});
        res.send(texttest);
    })

    //Update Test
    app.post('/api/texttest/:_id', async (req,res)=>{
        const {title, content, keys} = req.body;
        Test.findByIdAndUpdate({_id: req.params._id}, {
            title: title,
            content:content,
            keys:keys.split('/')
        },()=>{
            console.log('updated');
        }) 
    })

    //Delete Test
    app.delete('/api/texttest/:_id',  (req,res)=>{
        Test.findOneAndRemove({_id: req.params._id})
        .then(() => res.send('done'))
       
    })


    //Create Test
    app.post('/api/texttest', requireLogin,async (req, res)=>{
       const {title, content, keys} =req.body;
       const test = new Test({
          title,
          content,
          keys: keys.split('/')
       });

       let data = await test.save();
       res.send(data);
    });
};
