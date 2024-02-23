const express = require('express')

const categories = require('./routes/categories')
const app = express()

const mongoose = require('mongoose')

app.use(express.json())

app.use('api/categories',categories)
app.use('api/students',students)

mongoose.connect('mongodb://127.0.0.1/')
.then( () =>console.log('successfuly connected to the database'))
.catch(err => console.error('couldnt connect to MongoDb',err) )


const port = process.env.PORT || 8000 //when we are in a production environment port number is assigned dynamically environment variable which can change according to the environment we are working in if we aree working in local environment it will set to 3000

app.listen(port,()=> console.log('port is running on ',port))





