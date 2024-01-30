const path = require('path') //path module takes the path of a file and tells about the extension of the file and the name also path module can tell the current directory and file we are working on 

let ext = path.extname('C:\\Users\\HP\\ultimate node course\\Node Module\\test.txt')

console.log(ext) //tells the extension of the file of which path is passed to path module

console.log(path.basename('C:\\Users\\HP\\ultimate node course\\Node Module\\test.txt')) //tells the name of the file of which path is passes to path module 

console.log(__filename) //path of file which we are currently working with 

console.log(__dirname) //path of directory in which file is present 

