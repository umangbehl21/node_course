function mid2(req,res,next) {
    console.log('i am middleware 2')
    next() //next is important so that execution can go to next middleware 
}

module.exports = mid2;

