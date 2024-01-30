function add(a,b)
{
    console.log(a+b);
}
function sub(a,b)
{
    console.log(a-b)
}
module.exports = { //exports the object with two properties
    addition : add,
    subtract : sub
}