const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')

router.post('/',(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(name, email, message)

    const Data={
        "name":name,
        "email":email,
        "message":message
    }

    db.collection('contacts').insertOne(Data,(err,res)=>{
        if(err) throw err;
        // else{
        //     res.redirect('http://localhost:3000/review')
        // }
    })
})
module.exports=router;