const figlet = require('figlet') //NPM is node package manager just like playstore from which we can install many packages or libraries for node js application 

figlet("Streak  from   Umang", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});






