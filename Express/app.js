//Node.js is a runtime environment for executing JavaScript code outside of a web browser. It is built on the V8 JavaScript engine, which is the same engine used by Google Chrome, and provides additional APIs and libraries for server-side and command-line scripting. Node.js allows developers to run JavaScript on the server side, enabling them to build scalable and high-performance web applications, APIs, and other networked applications.

const express = require('express') // this express package will give entire module in form of function through express we can use http requests post put get delete 
const mid1 = require('./middleware/middleware1')   
const mid2 = require('./middleware/middleware2')
const morgan = require('morgan')
const app = express() //by using app variable we can access all the methods that express will give us like get post put delete

app.use(express.json()) // the role of the JSON middleware. When a POST request is made with JSON data in the request body, the express.json() middleware parses that JSON data and makes it available in the req.body object in JavaScript format. Therefore, you can access req.body.name to get the value of the name property from the incoming JSON data. by json data i means the format of json data is different check in package.json key is enclosed in "" double qoutes as well as value so middleware changes this format into js format 
app.use(mid1) //middleware 1 
app.use(mid2) //middleware 2
app.use(morgan()) //morgan middleware use to get the log of the request date time when was request sent which type of request send fron which platform

const courses = [{id : 1 ,name : 'javascript'},
                {id : 2 , name : 'python'},
                {id : 3, name : 'java'}]

app.get('/',(req,res)=>    
{
    res.send('hello from umang')
})

app.get('/about',(req,res)=>{
    res.send('we create impact')
})

app.get('/course',(req,res)=>
{
    res.send(courses)
})

   //post method is for creating new entries
app.post('/course',(req,res) =>  //scaler module 5 video http post method we send json data containing name of course using postman not by query parameters to see actually the format of json data and how later it is parsed into javascript format
{
    const newCourse = {
        id: courses.length + 1, //whatever will be the total current courses new course id will be the total + 1
        name: req.body.name   //note here we can access the req.body.name because of json middleware it parsed the incoming data of json format into req.body in js format
      }; 
    
      courses.push(newCourse); //push the new data into the array of object 
    
      res.send(newCourse);  
    
})

app.put('/course/:name',(req,res) =>  //put request use to update existing data 
{
    const course = courses.find(course => course.name === req.params.name)
    if(course == null)
    {
        res.status(404).send('no course available to change for this name')
    }
    else 
    {
        course.name = req.body.name;  //as course have reference of the object it can change the name 
        res.send(course)
    }
})


app.get('/course/:name', (req,res) =>  //we get id in the parameters of url
{
    //console.log(req.params.id); //through params we can access or see the parameter passed in the URL on our terminal and access the key with its name
    //res.send(req.params.id) //for sending to user 
    const course = courses.find(course => course.name === req.params.name)  //then we find if the id passed in url is present in array of objects if it is present then we send the name of course to the browser 
    
    if(course == null) //if id in url is not present in the array of objects then we send no course available
    {
     res.status(404).send('no course available for this name')
    }
    else
    {
        res.send(course) //if id in url is present in the array of objects then we send the name of course 
    }

})

app.delete('/course/:id',(req,res)=>
{
    const course = courses.find(course => course.id === parseInt(req.params.id))

    if(course == null)
        res.status(404).send('no course of this id')
    else 
    {
        
        var index = courses.indexOf(course)
        courses.splice(index,1)
        res.send(course)
    }

})


const port = process.env.PORT || 3000 //when we are in a production environment port number is assigned dynamically environment variable which can change according to the environment we are working in if we aree working in local environment it will set to 3000

app.listen(port,()=> console.log('port is running on ',port))

//nodemon stands for node monitor that detects changes at server side and refresh server time to time


