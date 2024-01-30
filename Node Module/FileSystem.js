const fs = require('fs')

fs.writeFileSync('test.txt','i am written from fs module') //to write data in a file 

console.log('file has been written')

fs.appendFileSync('test.txt',' appended data') //append data into existing file
console.log('appending')

let filecontent = fs.readFileSync('test.txt'); //to read data from file

console.log(''+filecontent) 
