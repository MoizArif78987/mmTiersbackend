const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')

router.post('/',(req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const review = req.body.message;

    console.log(name, email, review)

    const Data={
        "name":name,
        "email":email,
        "review":review
    }

    db.collection('reviews').insertOne(Data,(err,res)=>{
        if(err) throw err;
        // else{
        //     res.redirect('http://localhost:3000/review')
        // }
    })
})
module.exports=router;