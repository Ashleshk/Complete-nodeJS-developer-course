console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions ={
  describe:'title of note',
  demand : true,
  alias: 't'
};

const bodyOptions={
  describe:'body of note',
  demand:true,
  alias:'b'
};
// Get the arguments as a plain old object.
//const argv = yargs.argv;   // it version of argumemwnts the app use
const argv =yargs
              .command('add','Add a new Note',{
                    title: titleOptions,
                    body: bodyOptions
              })
              .command('list','List all notes')
              .command('read','Read a note',{
                title: titleOptions,
              })
              .command('remove','remove a note',{
                 title: titleOptions
              })
              .help()
              .argv;
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Yargs', argv);

if (command === 'add') {
  var note=notes.addNote(argv.title, argv.body);
  if(note)
  {
      console.log('note Created');
      notes.logNote(note);    
  }
  else{
      console.log('note title taken .. try again HOSS');
      
  }
} 
else if (command === 'list') 
{
  var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s)`);
   
  allNotes.forEach((note) => notes.logNote(note));
  
} 
else if (command === 'read') 
{
  var note =notes.getNote(argv.title);
  if(note)
  {
    console.log('note Found');
    notes.logNote(note);
  }
  else
  {
    console.log('NOte NOt FOunt');
    
  }
}
 else if (command === 'remove') 
 {
  var noteremove=notes.removeNote(argv.title);
  var message = noteremove ? 'Note Removed':'Note Not Found';
  console.log(message);
  
  
} else {
  console.log('Command not recognized');
}
