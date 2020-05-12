// THIS IS specific to this module and no need to sdhare to other
//hence private  .. ..... .also no need to export
var url= 'http://mylogger.io/log';
console.log(__filename);
console.log(__dirname);
function log(message)
{

  //send the http request
  console.log(message);
}

// to access this modules method to main
module.exports.log=log;

//to accss the variables
//module.exports.endpoint =url;


//sending jus the single modules
/*
*      module.exports = log;
*/
