class NotesView {
    constructor(model){
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        
        
        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#user-input').value;
            this.addNewnote(newNote);

        })

    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes()
    }

    displayNotes() {
        


    }
    
    clearNotes(){
        const resetParagraph = document.getElementById('div');
        this.mainContainerEl.replaceChildren(resetParagraph)
      }


}

module.exports = NotesView;