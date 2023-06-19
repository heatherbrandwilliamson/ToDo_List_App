class notesModel {
    constructor() {
      //this.counter = 0;
      this.list = [];
    }

    addNote(Note) {
      const noteslist = this.list.push(Note); // Add the item to the list

    }
  
    getNotes() {
      return console.log(this.list);
    }

    reset() {
      this.list = [];
      let emptylist = this.list
      return console.log(emptylist)
    }
  
  }
  
  module.exports = notesModel;
