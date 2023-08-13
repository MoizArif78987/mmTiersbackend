const mongoose = require('mongoose');

const Customer = mongoose.model('customers',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    adults:{
        type:Number,
        required:true
    },
    children:{
        type:Number,
        required:true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    roomNumber:{
        type:Number,
        required:false
    },
    totalPayable:{
        type:Number,
        required:false
    },
    PaymentStatus:{
        type:String,
        required:false
    }
})


const Review = mongoose.model('reviews',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    }
})

const Employee = mongoose.model('employees',{
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    cnic:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

const Contact = mongoose.model('contacts',{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

module.exports={Customer , Review , Employee, Contact};