console.log('staring app...');

const fs= require('fs');
const os = require('os');
const _ = require('lodash');
 
const notes = require('./notes.js');

var user =os.userInfo();

var result = notes.addNote();
console.log(result);
console.log("Result :", notes.add(3,6.5));
console.log(_.isString(true));
console.log(_.isString('ashles4'));


//console.log(user);

// fs.appendFile('greetings.txt','hello  '+user.username +' '+`! You are ${notes.age}`,function (err) 
// {
//     if(err){
//         console.log('Unable to write to file');
//     }

// });
