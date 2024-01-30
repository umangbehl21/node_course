//os module is use to get the information about the current system that we are working on
const os = require('os') //application of os module is some websites checks the compatibility of system configuration that we can run a particular application on our system or not 

console.log(os.arch()) //tells the architecture (64 or 32)

console.log(os.platform()) // tells the platform on which we are working

//console.log(os.networkInterfaces()) //tells about network details of current system we are working on 

console.log(os.cpus()) // tells details of cpu 

console.log(os.totalmem()) //tells total memory 

console.log(os.freemem()) //tells the amount of free memory available 