console.log('Starting notes.js');
const fs = require('fs');
//frtch notes 
var fetchNotes =  ()  =>  {
         //jsut in case if file does not exist 
      try{
        var notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
      }catch(e)
      {
         return [];
      }
};

//save notes
var saveNotes = (notes)=> {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
      var notes = fetchNotes();
      var note ={
        title,
        body
      };

      var duplicatenodes =notes.filter((note)=> note.title === title );
      if(duplicatenodes.length===0){
        notes.push(note);
        saveNotes(notes);
       return note;
      }
     
};

// function to get array of the notes
var getAll = () => {
  //console.log('Getting all notes');
  return fetchNotes();

};

var getNote = (title) => {
  //console.log('G etting note', title);

  //fetch notes
  var note = fetchNotes();

  //filter
  var filterNotes =note.filter((note) =>note.title === title);

  // return
  return filterNotes[0];



};

var removeNote = (title) => {
  //console.log('Removing note', title);

  //fetch notes
  var notes =fetchNotes();
  
  //filter notes , find the title named note
  var filterednotes = notes.filter( (note)=> note.title !==title);

  //update the notes  ..save new nodes array
  saveNotes(filterednotes);

  //return true if note reurned ,else false
  return notes.length !== filterednotes.length;

};

var logNote = (note) =>
{
      console.log('--');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`); 
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
