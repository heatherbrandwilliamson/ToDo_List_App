const NotesModel = require('./notesModel');


describe('notesModel tests', () => {
    let model;
  
    beforeEach(() => {
        model = new NotesModel();
    });
  
    it('should return the empty list of notes', () => {
        const notes = []
        expect(model.list).toEqual(notes);
      });

    it('should return the empty list of notes', () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.getNotes();
        expect(model.list).toEqual(['Buy milk', 'Go to the gym']);
      });

      it('should return the empty list of notes', () => {
        model.reset();
        model.getNotes();
        const notes = []
        expect(model.list).toEqual(notes);
      });  

});

