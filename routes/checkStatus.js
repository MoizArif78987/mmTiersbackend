const express = require('express');
const router = express.Router();
const {db}=require('../database/sql');
const {Customer} = require('../models/schema');



router.get('/',(err,res)=>{
    Customer.find({}).then((result)=>{
        if(result){
            res.send(result)
        }
        else{
            console.log("Not Found")
        }
    })
})

module.exports=router;