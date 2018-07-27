const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = (app) =>{
    console.log('already');
    app.post('/api/exp_update/:id',(req,res)=>{
        console.log('post ok');
        console.log(req.body);
        User.findByIdAndUpdate(req.params.id , { $set: { exp: req.user.exp+req.body.exp }}, { new: true }, (err, user)=> {
            if (err) return handleError(err);
            res.send(user);
            console.log('ok duoc roi');
          });
    });

    app.post('/api/coin_update/:id',(req,res)=>{
        User.findByIdAndUpdate(req.params.id , { $set: { coin: req.user.coin+req.body.coin }}, { new: true }, (err, user)=> {
            if (err) return handleError(err);
            res.send(user);
            console.log('ok duoc roi');
          });
    });

    app.post(`/api/imgUrl_update/:id`,(req,res)=>{
        User.findByIdAndUpdate(req.params.id , { $set: { imgUrl: req.body.imgUrl }}, { new: true }, (err, user)=> {
            if (err) return handleError(err);
            res.send(user);
            console.log('ok duoc roi');
          });
    })

     app.get('/api/get_user/:idUser',(req,res)=>{
         console.log('ok da fetch duoc roi')
         User.findById(req.params.idUser ,(err,user)=>{
             if(err) return handleError(err);
             res.send(user);
         })
     })
    
}
