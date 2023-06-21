/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');

describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });


  it('displays 1 note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const viewnote = new NotesView();

    expect(document.querySelectorAll('div').length).toBe(1);

  });

  it('adds a new paragraph', ()=> {
    const view = new NotesView();

    // call the method to modify the page
    view.displayNotes("This is a new note");

    expect(document.querySelectorAll('div').length).toBe(2);
  });

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    // 1. Fill the input
    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';
  
    // 2. Click the button
    const button = document.querySelector('#add-note-btn');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
  });

//   it('clears all Notes', ()=> {
//     const view = new NotesView();

//     // call the method to modify the page
//     view.clearNotes();

//     expect(document.querySelectorAll('div').length).toBe(0);
//   });


});