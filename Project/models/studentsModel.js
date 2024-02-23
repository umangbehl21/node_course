const joi = require('joi')  //joi is use to validate the data that user send through http requests 

const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
        name : {type : String , required : true , minlength : 3 , maxlength : 200}, 
        isEnrolled : {type : Boolean , default : false},
        Phone : {type : String , required : true , minlength : 10 , maxlength : 11}
    }

)
const Student = new mongoose.model('student',StudentSchema)

function validateData(student)
{
    const schema = {  //create a schema so that student string can be checked if it is according to the given schema
        name : joi.string().min(3).max(50).required(), //min length of string should be 3 annd max till 50
        Phone : joi.string().min(10).max(11).required(),
        isEnrolled : joi.boolean()
    }
    return joi.validate(student,schema) //validate if string is according to schema
}

exports.Student = Student
exports.validateData = validateData
