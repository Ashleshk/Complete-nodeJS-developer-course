console.log('staring app...');

const fs= require('fs');
 
const _ = require('lodash');
 
// this agrv is argument vector ,  all command line argument are passed in
//console.log(process.argv);

var command = process.argv[2];
console.log("Cammand : " , command);


if(command === 'add')
{
    console.log('Adding New Items');
    
}
else if(command ==='list')
{
    console.log('Listing All Notes');
    
}
else if(command ==='read')
{
    console.log('reading All Notes');
    
}
else if(command ==='remove')
{
    console.log('remove All Notes');
    
}
else
    console.log('Cammnad Not recogniseda');
    