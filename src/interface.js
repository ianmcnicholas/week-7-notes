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

console.log(notebook.previews())
let displayCount = 0

function displayNoteLinks() {
  let lastElement = notebook.previews()[notebook.previews().length - 1]
  let divArray = [lastElement]
  divArray.forEach((preview) => {
    console.log(preview)
    let a = document.createElement('a');
    // a = <a></a>
    let node = document.createTextNode(preview);
    a.appendChild(node);
    // a = <a>preview</a>
    a.href = `#${displayCount}`
    displayCount++
    // a = <a href="#index">preview</a>
    let element = document.getElementById("div1");
    element.appendChild(a);
    let br = document.createElement('br');
    element.appendChild(br);
  })
};

//<a> title="Note to self" href=#search </a>
