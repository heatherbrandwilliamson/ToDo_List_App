const NotesModel = require('./notesModel');
const NotesView = require('./NotesView');


const model = new NotesModel();
const view = new NotesView(model);

// view.displayNotes();

// const view = new CounterView(model);
// view.display();