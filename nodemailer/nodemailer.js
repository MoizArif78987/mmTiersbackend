const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure: false,
    auth:{
        user:"moizarif100@gmail.com",
        pass:"akehiaimurpwqeqe"
    }
})
module.exports={transporter}