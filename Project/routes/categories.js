const express = require('express')

const router = express.Router() //express.Router() is a method provided by the Express.js framework. It returns a new router object which can be used to define routes for handling HTTP requests. It creates a new instance of a router. This router instance can then be used to define routes using methods like .get(), .post(), .put(), .delete(), etc., to handle different HTTP methods. Any requests that match the specified route will be handled by the router, allowing for modularization and organization of your application's routes.

const {Category , validateData} = require('../models/categoriesModel')

router.get('/',async function(req,res){
    let categories = await Category.find()
    res.send(categories)
})


router.post('/',async function(req,res)
{
    const {error} = validateData(req.body) /**The validateData function returns a result object, which likely includes an error property containing information about any validation errors encountered during the validation process. By using object destructuring ({ error }) in { error } = validateData(req.body), you're extracting the error property from the result object. If there is a validation error (error is truthy), the code inside the if block is executed. err.details is an array containing detailed information about each validation error. By accessing err.details[0].message, you're retrieving the error message associated with the first validation error encountered. This message typically describes what validation condition the data failed to meet. Finally, res.status(400).send(error.details[0].message) sends this error message back to the client as the response body with a status code of 400 (Bad Request). */
    if(error) { res.status(400).send(error.details[0].message) }

    const category = new Category({name : req.body.name})
    await category.save()
    res.send(category)
})

router.put('/:id',async function(req,res)
{
    const category = await Category.findByIdAndUpdate(req.params.id,{name : req.body.name , new : true}) /** if you don't specify { new: true }, or if you explicitly set it to false, the findByIdAndUpdate() method will return the original document (i.e., the document before the update operation) rather than the updated document. { new: true }: If you include this option, findByIdAndUpdate() will return the updated document after applying the update operation. Omitting { new: true } or setting it to false: In this case, findByIdAndUpdate() will return the original document (i.e., the document before the update operation). The update operation will still be applied to the document in the database, but the method will not return the updated version. */
    if(!category)
    {
        res.status(404).send('the category with given id was not found')
    }
    res.send(category)  

})

router.get('/:id',async function(req,res)
{
    const category = await Category.findById(req.params.id) //req.params.id contains id in string so we convert it in integer so that type is also accurately compared
    if(category == null) 
        res.status(404).send('the category with given id was not found')
    else
    res.send(category)
})

router.delete('/:id',async (req,res)=>
{
    const category = await Category.findByIdAndDelete(req.params.id)

    if(category == null)
        res.status(404).send('no category of this id')
    else 
    {
        res.send(category)
    }

})


module.exports = router




