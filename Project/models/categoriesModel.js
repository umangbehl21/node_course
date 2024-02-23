const joi = require('joi')  //joi is use to validate the data that user send through http requests 

const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        name : {type : String , required : true , minlength : 3 , maxlength : 200}
    }
)
const Category = new mongoose.model('category',categorySchema)

function validateData(category)
{
    const schema = {  //create a schema so that category string can be checked if it is according to the given schema
        name : joi.string().min(3).required() //min length of string should be 3
    }
    return joi.validate(category,schema) //validate if string is according to schema
}

exports.Category = Category
exports.validateData = validateData