const express = require('express');
const router = express.Router();
const {db}=require('../database/sql');
const {Review} = require('../models/schema');



router.get('/',(err,res)=>{
    Review.find({}).then((result)=>{
        if(result){
            res.send(result)
        }
        else{
            console.log("Not Found")
        }
    })
})

module.exports=router;