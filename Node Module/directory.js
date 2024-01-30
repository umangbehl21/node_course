const fs = require('fs') //to work with directories again we need to import fs module

//fs.mkdirSync('mydirectory') //to create a directory mydirectory

let filecontent = fs.readdirSync('C:\\Users\\HP\\ultimate node course\\Node Module\\mydirectory') //to check what files directory contains

console.log(filecontent) //output will be in form of array containing name of files that directory consists  

let check = fs.existsSync('mydirectory') //to check if directory exists 

console.log(check)

fs.mkdirSync('d1')

// fs.rmdirSync('C:\\Users\\HP\\ultimate node course\\Node Module\\d1') //to delete a directory there should be no files in it comment the upper line and uncomment this to delete d1 directory 

