const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')
const {Employee} = require('../models/schema');

router.post('/',(req,res)=>{
    const _id = req.body._id;
    console.log(_id)
    Employee.deleteOne({_id:_id}).then((result)=>{
        console.log("Deleted Successfully");
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports=router;