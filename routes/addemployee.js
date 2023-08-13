const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')
const multer = require('multer');


var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images");
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname);
    }
})

var upload=multer({storage});
router.post('/',upload.single("picture"),(req,res)=>{

    const name = req.body.employeeName;
    const image = req.file.filename;
    const cnic = req.body.cnic;
    const contact = req.body.employeeContact;
    const email = req.body.employeeEmail;
    const salary = req.body.Salary;

    console.log(name,image,cnic,contact, email,salary )

    const Data={
        "name":name,
        "image":image,
        "cnic":cnic,
        "contact":contact,
        "email":email,
        "salary":salary
    }

    db.collection('employees').insertOne(Data,(err,res)=>{
        if(err) throw err;
        // else{
        //     res.redirect('http://localhost:3000/review')
        // }
    })
})
module.exports=router;