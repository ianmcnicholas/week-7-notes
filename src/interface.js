// this function collects the note that the user types on the index page
// this returns the note a variable called x
let notebook = new Notebook;

let note;
function createNewNote() {
  note = document.getElementById("notefield").value;
  notebook.create(note);
  // insert function to display notes on the screen
  displayNoteLinks();
}

function displayNoteLinks() {
  notebook.previews.forEach((preview, index) => {
    let a = document.createElement('a');
    let node = document.createTextNode(preview);
    a.appendChild(node);
    a.href = `#${index}`
    let element = document.getElementById("div1");
    element.appendChild(a);
    let br = document.createElement('br');
    element.appendChild(br);
  })
};

//<a> title="Note to self" href=#search </a>





