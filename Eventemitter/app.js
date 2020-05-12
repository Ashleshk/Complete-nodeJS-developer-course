const EventEmitter = require('events');


// registt alistener


 const Logger = require('./logger');
 const logger= new Logger();

 logger.on('messageLogged',(arg)=> {
   console.log('Lsitener called',arg);
 });

 logger.log('message');
