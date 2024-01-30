const cp = require('child_process') //child process module is used to create sub process within a script we can perform different tasks with your script by just using some methods or in simple we can write commands to perform some task from the script 
//cp.execSync('calc') //this will opern calculator 
// cp.execSync('start chrome') //this will open chrome
//cp.execSync('start chrome https://leetcode.com/Umang0821/') //this will open the website with following page 
console.log('output ' + cp.execSync('node dumy.js'))