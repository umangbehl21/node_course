const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then( () =>console.log('successfuly connected to the database'))
.catch(err => console.error('couldnt connect to MongoDb',err) )

const courseschema = mongoose.Schema({
    name : {type : String , required : true , minlength : 5 , maxlength : 200}, // required means name is compulsary to fill it is a validator minlength and maxlength are also validators that name of course should be between 5 to 200
    creator : {type : String , required : true},
    category : {type : String , required : true , enum : ['web','DSA','data science','mobile']},//enum here means that the category of course should be only from the categories in the enum 
    Publisheddate : {type : Date , default : Date.now}, //if a key have more than one property it is enclosed in {} date: This is the name of the field in the schema. It represents a date value.{ type: Date, default: Date.now }: This part defines the configuration for the date field.type: Date: Specifies that the data type of the date field is Date. This means that values stored in this field will be JavaScript Date objects.default: Date.now: Specifies a default value for the date field. Here, Date.now is a function that returns the current timestamp as a JavaScript Date object. This means that if no value is provided for the date field when creating a new document, it will default to the current date and time.
    ispublished : {type : Boolean , required : true}, 
    tags : {type : Array ,
           validate : {
             validator : function(tags)  //this is a custom validator which ensure that tags array must have elements more than 1
                        {
                            return tags.length > 1
                        } 
           }},
    rating : {type : Number , required : function(){ return this.ispublished}} //if ispublished is true then required will be true means course which is published its rating is required to specify 
})
                             //course here represent both model and collection Model: User is the Mongoose model. In Mongoose, a model is used to create documents for mongodb collections model is a constructor function that provides an interface for interacting with MongoDB collections. It represents a specific MongoDB collection and allows you to perform CRUD operations on documents in that collection. When you define a model using mongoose.model(), you're creating a JavaScript class that encapsulates the behavior and structure of the documents in the associated MongoDB collection. Collection: The string 'User' passed as the first argument to mongoose.model() represents the name of the MongoDB collection associated with the model. If the collection already exists in the database, Mongoose will interact with that collection using the specified name ('User'). If the collection doesn't exist, Mongoose will create it for you when you first save a document using the model.
const Course = mongoose.model('course',courseschema)  //A model in Mongoose is associated with a schema. The schema defines the structure and data types of the documents that will be stored in the collection represented by the model. When defining a model, you pass a schema definition as an argument to the mongoose.model() method. This associates the schema with the model, ensuring that documents created using the model adhere to the defined schema.



async function createCourse() //In JavaScript, the async keyword is used to define asynchronous functions. An asynchronous function is a function that operates asynchronously via the event loop, using an implicit Promise to return its result. Asynchronous functions can perform operations such as fetching data from a server, reading from a file, or waiting for a timer to complete. When you declare a function with the async keyword, it automatically returns a Promise. The function can then contain await expressions, which pause the execution of the asynchronous function until the Promise is settled (resolved or rejected). The await keyword can only be used within async functions
{
    const course = new Course({
        name : 'python',  //it is necessary to take name of course with more than 5 characters and less than 200 characters 
        creator : 'hathi', //creator 
        category : 'web',
        ispublished : true,
        tags : ['express','node'],  //as in schema we can't give less than 2 values 
        rating : 3
    })
    const result = await course.save() //he save() method is an asynchronous operation provided by Mongoose. It saves the new course object to the MongoDB database. 
    // console.log(result)
}   

createCourse()

async function getcourses()
{

    // const course = await Course.find({name : 'dsa'}).select({name : 1 , date : 1})  //In Mongoose, when using the select() method in a query, you specify which fields you want to include or exclude from the query result. In your code snippet: javascript The {name: 1} parameter passed to select() means that you want to include the name field in the query result. The 1 here acts as a flag indicating that you want to include this field. In Mongoose, using 1 as a value for a field in the select() method means "include this field". Conversely, if you wanted to exclude a field, you could use {name: 0}
    const course = await Course.find({rating : {$gte : 4}}).select({name : 1 , Publisheddatedate : 1})  //only the name and publish date of courses with rating greater than or equal to 4 will be displayed
    console.log(course)  
} //comparison operators -> gte can be replaced by other functions if we want values based on different comparisons eq - equal to , gt - greater than , gte - greater than equal to , lt - less than , lte - less than  equal to , in - to get specific values

// getcourses() 

async function updateCourses(id)
{
    const course = await Course.findById(id)
    if(!course) return

    course.name = 'cloud'
    course.creator = 'kilua'

    const updatedcourse = await course.save()  //very important to save in database course.save() method provided by mongoose 
    console.log(updatedcourse);
}

// updateCourses('65c91236d431155664da544f')

async function removeCourseById(id) {
    try {
        const course = await Course.findByIdAndDelete(id);
        console.log(course);
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
// removeCourseById('65c91179d4c8f4d7415ada36');



// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to define schemas for MongoDB documents and interact with the database using a simple and intuitive API. Mongoose is commonly used in Node.js applications to work with MongoDB databases efficiently.

// To clarify:

// 1. **MongoDB**: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability, performance, and ease of development.

// 2. **Mongoose**: Mongoose is an ODM library for MongoDB and Node.js. It adds an additional layer of abstraction on top of MongoDB, allowing developers to define schemas, models, and relationships between data, and providing features like validation, middleware, and query building.

// 3. **Node.js**: Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It provides various built-in modules for handling I/O operations, networking, and other tasks. However, Node.js itself does not provide an ODM library like Mongoose.

// So, to answer your question:

// - Mongoose is not provided by Node.js or Express. It's a separate library that you need to install and include in your Node.js project using npm or yarn.
// - Express is a web framework for Node.js that simplifies the process of building web applications and APIs. While Express itself does not include database-related features like Mongoose, you can use Mongoose within an Express application to interact with a MongoDB database.

// In summary, Mongoose is an ODM library specifically designed for MongoDB and Node.js, and it's commonly used alongside Express to build MongoDB-backed applications in the Node.js ecosystem.


