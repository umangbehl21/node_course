let myPromise = new Promise(function(resolve,reject) //In JavaScript, a function that performs an asynchronous operation can return a Promise object to represent the eventual completion or failure of that operation. This allows you to work with asynchronous code in a more organized and manageable way.new promise is created with a function in it that will perform some asynchronous operation here is settimeout with a delay of 2 seconds
{
    const a = 5;
    const b = 5;
    setTimeout(function() //settimeout take a callback function that compare two variables a and b if values of the two are same then reolve will be called and data will be sent to then() 
    {
        if(a === b)
        {
            resolve('promise is resolved')  
        }
        else 
        {
            reject('promise is rejected')
        }
    },2000)
})

// console.log(myPromise) //pending state

myPromise.then(function(result) //resolved state .then() takes a callback function which executes when promise is resolved
{
    console.log(result) //this result contains the data of resolve() in it when a == b
})

myPromise.catch(function(result)  //the callback function is executed when promise is rejected
{
    console.log(result)
})


// BELOW IS EXPLANATION OF ABOVE CODE   

// 1. **Promise Initialization**: 
//    - We create a new Promise object `myPromise` using the `Promise` constructor.
//    - Inside the constructor, we define a function with `resolve` and `reject` parameters. This function represents the asynchronous operation that the promise will perform.

// 2. **Asynchronous Operation**: 
//    - Within the asynchronous function, we simulate a delay of 2 seconds using `setTimeout`.
//    - Inside the `setTimeout` callback function, we compare two variables `a` and `b`. If they are equal, we call `resolve` with the message `'promise is resolved'`; otherwise, we call `reject` with the message `'promise is rejected'`.

// 3. **Promise Execution**: 
//    - After the promise is created, it is in the pending state. It will remain in this state until the asynchronous operation completes and either resolves or rejects the promise.

// 4. **Promise Handling**:
//    - We attach a `.then()` method to the promise to handle the resolved state. The callback function inside `.then()` will execute when the promise is resolved successfully.
//    - We attach a `.catch()` method to handle any errors or rejections that occur during the execution of the promise. The callback function inside `.catch()` will execute if the promise is rejected.

// 5. **Promise Resolution**:
//    - After 2 seconds, the `setTimeout` callback function executes. It compares `a` and `b`. Since they are equal (both 5), the promise is resolved with the message `'promise is resolved'`.

// 6. **Promise Result Handling**:
//    - As `a` is equal to `b`, the `.then()` method's callback function is executed. It receives the resolved value (the message `'promise is resolved'`) as its argument and logs it to the console.

// Let's summarize the execution flow:
// - The promise is created with an asynchronous operation inside it.
// - After a 2-second delay, the promise either resolves or rejects based on the condition (equality of `a` and `b`).
// - If the condition is met (equality), the promise resolves with the specified message.
// - The `.then()` method's callback function executes and handles the resolved value.
// - If the condition is not met (inequality), the promise rejects with the specified message.
// - The `.catch()` method's callback function executes and handles the rejection message.