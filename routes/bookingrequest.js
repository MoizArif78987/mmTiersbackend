const express = require('express');
const router = express.Router();
const {db}= require('../database/sql')
const {Customer} = require('../models/schema');
const {transporter}=require('../nodemailer/nodemailer')

router.post('/',(req,res)=>{
    const _id = req.body._id;
    const status = req.body.status;
    const roomNumber = req.body.roomNumber;
    const email = req.body.email;
    const totalPayable = req.body.totalPayable;
    console.log(_id, status, roomNumber,totalPayable)

    if(email != null)
    {
        const mailOption={
            from: `THE MISTY MEADOWS HOTEL <moizarif100@gmail.com>`,
            to:email,
            subject: "Room Booking Request at The Misty Meadows Hotel",
            html:`<p>This email is being sent to you regarding your request to book a room at the misty meadows hotel. And your request status has been updated to: "${status}"... Thank you for considering the misty meadows hope that you will pick us on your next visit here.</p>`
        }
        transporter.sendMail(mailOption,(error,info)=>{
            if(error) throw error;
            else{
                console.log("email sent")
            }
        })
    
        Customer.updateOne({_id:_id},{
            "status":status,
            "roomNumber":roomNumber,
            "totalPayable":totalPayable
        }).exec().then((result)=>{
            if(result){
                console.log("Updated Successfully")
            }
            else{
                console.log("Error While Updating")
            }
        })
    }
    
})
module.exports=router;