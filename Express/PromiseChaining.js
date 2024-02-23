
function placeorder(order)
{
    return new Promise(
        function (resolve,reject){
            if(order === 'coffee')
            {
                resolve('order for coffee recieved')
            }
            else 
            {
                reject('others order are rejected')
            }
        }
    )
}

function processorder(order)
{
    return new Promise(function(resolve)
    {
        console.log('Order is being processed')
        resolve('${order} and is served is served')
    })
}

// placeorder('coffee').then(function(orderPlaced)  //promise is resolved when coffee is passes .then section will run and it will call another function that returns another promise that order is served as to resolve that promise return we chain another then 
// {
//     console.log(orderPlaced)
//     let serve = processorder(orderPlaced)  //calling a function to process order which returns another promise and it is stored in serve variable and then serve variable is returned so that the promise stored in it can be resolved in .then() section 
//     return serve
// }).then(function(orderserved)  //we were resolving upper promise the output of that upper promise resolving another promise it is chaining
// {
//     console.log(orderserved)
// }).catch(function(err)
// {
//     console.log(err);
// }) //solution through promises

//solution through async await

async function serveorder()
{
    try {
        let orderPlaced = await placeorder('coffee') //wait for promise to fulfill as placeorder func returns a promise
        console.log(orderPlaced)
        let orderserved = await processorder(orderPlaced) 
        console.log(orderserved)
    }
    catch(error) {  //if any error will encoutered or promise is rejected at line 45 catch block will handle the error 
        console.log(error)
    }
    
}   

serveorder()


