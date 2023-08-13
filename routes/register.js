const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')

router.post('/',(req,res)=>{
    const name = req.body.regname;
    const email = req.body.regmail
    const contact = req.body.regphone;
    const adults = req.body.regadults;
    const children = req.body.regchildren;
    const startDate = req.body.regarrivaldate +" "+ req.body.regarrivaltime ;
    const endDate = req.body.regdeparturedate +" "+ req.body.regdeparturetime;
    const type = req.body.type;
    const status = 'pending'
    console.log(name, email, contact, adults, children, startDate ,endDate, type);


    const Data={
        "name":name,
        "email":email,
        "contact":contact,
        "adults":adults,
        "children":children,
        "startDate":startDate,
        "endDate":endDate,
        "type":type,
        "status":status
    }

    db.collection('customers').insertOne(Data,(err,res)=>{
        if(err) throw err;
        // else{
        //     res.redirect('http://localhost:3000/register')
        // }
    })
})
module.exports=router;