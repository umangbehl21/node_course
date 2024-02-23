const fs = require('fs')


function func1(err,data)
{
    if(err)
    {
        console.log(err)
    }
    else 
    {
        console.log("File data=>"+data)
    }
}

fs.readFile('f1.txt',func1) //func1 is callback function 

 function func2(err,data)
 {
    if(err)
    {
        console.log(err)
    }
    else 
    {
        console.log("File data =>"+data)
    }

 }
 
 fs.readFile('f2.txt',func2) //func2 is callback function

console.log('i am last line but will be read first because of asynchronous behaviour of javascript functions will wait and run simultaneously while the statements below it will continue its execution')

//IMPORTANT CONCEPTS BELOW MUST REVISE  

//In JavaScript, when you have asynchronous operations (such as fetching data from a server, reading files, or handling user input), they do not block the execution of other code. Instead, they are executed in the background, and the JavaScript engine continues executing the code that follows without waiting for the asynchronous operation to complete.

//So, if you have asynchronous operations followed by synchronous code, the synchronous code will continue executing while the asynchronous operations are still running in the background. When the asynchronous operations complete, their callback functions are pushed to the event queue and will be executed when the JavaScript engine is idle.

//In JavaScript, while it's true that the runtime environment is single-threaded, asynchronous operations are typically handled by APIs provided by the environment, such as the browser or Node.js. These environments have mechanisms (such as event loops) that allow them to manage asynchronous tasks while still maintaining a single-threaded execution model.

// When an asynchronous operation is initiated (e.g., making an HTTP request, reading a file), the JavaScript engine does not handle the operation itself. Instead, it delegates the task to the environment's asynchronous APIs. These APIs may use underlying system-level mechanisms, such as threading or non-blocking I/O, to perform the asynchronous operation without blocking the main JavaScript thread.

// Once the asynchronous operation is completed, its callback function or promise resolution is added to the event queue by the environment. The event loop, which runs continuously in the background, periodically checks the event queue for tasks to execute. When the JavaScript engine is idle (i.e., not executing any synchronous code), it picks up tasks from the event queue and executes their associated callback functions.

// So, even though JavaScript itself is single-threaded and cannot execute multiple tasks concurrently, asynchronous operations are managed by the environment and executed in parallel with the JavaScript code, allowing for non-blocking behavior.

// When an asynchronous operation is initiated, the JavaScript runtime continues executing other synchronous code while the asynchronous operation is being performed by the environment that provides the API (such as Node.js in the case of fs.readFile).

// The asynchronous operation (e.g., file reading, network request) is typically handled by underlying system-level mechanisms provided by the environment, such as threading or non-blocking I/O.

// While the asynchronous operation is in progress, the JavaScript runtime does not wait for it to complete. Instead, it continues executing other synchronous code that follows the asynchronous API call.

// Once the asynchronous operation is completed, the callback function associated with it is placed in the event queue by the environment. The event loop in the JavaScript runtime periodically checks the event queue for pending tasks and executes the callback functions when it encounters them.

// This asynchronous behavior allows JavaScript programs to remain responsive and non-blocking, even when performing time-consuming tasks such as I/O operations or network requests.


//"Node API," means the built-in modules and functionalities provided by Node.js itself, such as the fs module for file system operations, the http module for creating web servers, and the util module for various utility functions.

// These Node.js APIs do indeed have the capability to perform asynchronous functions. In fact, Node.js is known for its asynchronous, non-blocking I/O model, which allows it to efficiently handle concurrent operations without blocking the execution of other code.