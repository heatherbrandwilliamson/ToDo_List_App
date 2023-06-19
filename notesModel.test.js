const notesModel = require('./notesModel');


describe('notesModel tests', () => {
    let model;
  
    beforeEach(() => {
        model = new notesModel();
    });
  
    it('should return the empty list of notes', () => {
        const notes = []
        expect(model.list).toEqual(notes);
      });

});

