const express =require('express');

var app = express();


app.get('/',(req,res )=>{
            res.status(404).send({
                error:'page not found.',
                name:'Todo App v1.0'
            });
});


app.get('/users',(rew,res)=>{
    res.send([{
        name:'mike',
        age:21
    },{
        name:'Ashlesh',
        age:21
    },{
        name:'Apoorva',
        age:18
    }]);
});

app.listen(3000);
module.exports.app =app;