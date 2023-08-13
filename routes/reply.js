const express = require('express');
const router = express.Router();
const {transporter}=require('../nodemailer/nodemailer')

router.post('/',(req,res)=>{
    const email = req.body.email;
    const reply = req.body.reply;
    console.log(email, reply)

    if(email != null)
    {
        const mailOption={
            from: `THE MISTY MEADOWS HOTEL <moizarif100@gmail.com>`,
            to:email,
            subject: "QUERY REPLY from The Misty Meadows Hotel",
            html:`<p>${reply}</p>`
        }
        transporter.sendMail(mailOption,(error,info)=>{
            if(error) throw error;
            else{
                console.log("email sent")
            }
        })
    }
    
})
module.exports=router;