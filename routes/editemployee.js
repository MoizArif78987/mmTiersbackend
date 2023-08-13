const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')
const multer = require('multer');
const {Employee} = require('../models/schema');



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
    const _id = req.body._id;
    const name = req.body.employeeName;
    const image = req.file.filename;
    const cnic = req.body.cnic;
    const contact = req.body.employeeContact;
    const email = req.body.employeeEmail;
    const salary = req.body.Salary;

    console.log(_id,name,image,cnic,contact, email,salary )


    Employee.updateOne({_id:_id},{
        "name":name,
        "image":image,
        "cnic":cnic,
        "contact":contact,
        "email":email,
        "salary":salary
    }).exec().then((result)=>{
        if(result){
            console.log("Updated Successfully")
        }
        else{
            console.log("Error While Updating")
        }
    })
    


})
module.exports=router;