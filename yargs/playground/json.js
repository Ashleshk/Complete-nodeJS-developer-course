// var obj ={
//     name : 'Ashlesh'
// };

// var stringobj =JSON.stringify(obj);
// console.log(typeof stringobj);
// console.log(stringobj);

// var personString ='{"name": "AShleshk","age":"21"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person );

const fs = require('fs');
var originalNote ={
    title:'Some title',body:'some body'
};
var originalNotString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNotString);

var noteString=fs.readFileSync('notes.json');

//note
var note=JSON.parse();
console.log(typeof note);
console.log(note.title);


