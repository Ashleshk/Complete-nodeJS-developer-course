 //Loading the modules
//require is used to load the modules
//it rety=urns the object that is exported



/*
*   note logger here is var i.e it can be changed in further code

*
*       var logger= require('./logger');
*
*

*   so good practice to have const logger
*/

 const logger= require('./logger');
 console.log(logger);

 //now the module is loaded we can acces its memebers
logger.log('messgae');



// using PATH module
 const path= require('path');
 var pathobj=path.parse(__filename);
 console.log(pathobj);

//iusing OS module
const os= require('os');
var totalmem=os.totalmem();
var freemem=os.freemem();

console.log(totalmem);
console.log(freemem);


/*
    TEmplate String
    //ES6 / ES2015   : ECMA Script 6 / 2105   tells about feature of js
*/
console.log(`Total memory : ${totalmem}`);
console.log(`free memory : ${freemem}`);




/*
*     FILE MODULE

*/
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err){

  if(err) console.log('ERROR',err)
  else console.log('Result',files);


});

/*
              EVENTS

*/
/*      NOTE  EventEmitter is a class*/
const EventEmitter = require('events');
const emitter = new EventEmitter();

/// register a lostener
emitter.on('MessageLogged',function(arg){

  console.log('LIStener Called',arg);
});



// Rwaise an event
emitter.emit('MessageLogged',{id:1,url:'http://'})
