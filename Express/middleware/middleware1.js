function mid1(req,res,next) {  //middleware1 
    console.log('i am middleware 1')
    next() //next is important so that execution can go to next middleware 
}

module.exports = mid1;

