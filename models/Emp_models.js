const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    

});

module.exports=mongoose.model("Employee",employeeSchema)