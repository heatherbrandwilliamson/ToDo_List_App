class NotesModel {
    constructor() {
      //this.counter = 0;
      this.list = [];
    }

    addNote(Note) {
      // const noteslist = 
      this.list.push(Note); // Add the item to the list

    }

    getNotes() {
      return this.list;
    }

    reset() {
      this.list = [];
    }
  
  }
  
  module.exports = NotesModel;


model = new NotesModel();
model.addNote("Hello my name is Heather")
model.addNote("Hello please remember to get my dog")
model.addNote("Hello please remember to buy milk")
let notes = model.getNotes()
console.log(notes)

