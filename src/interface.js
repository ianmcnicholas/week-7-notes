let notebook = new Notebook;
let note;
let displayCount = 0

function createNewNote() {
  note = document.getElementById("notefield").value;
  notebook.create(note);
  // insert function to display notes on the screen
  displayNoteLinks();
};

function displayNoteLinks() {
  let lastElement = notebook.previews()[notebook.previews().length - 1]
  let divArray = [lastElement]
  divArray.forEach((preview) => {
    let a = document.createElement('a');
    let node = document.createTextNode(preview);
    a.appendChild(node);
    a.href = `#${displayCount}`
    displayCount++
    let element = document.getElementById("div1");
    element.appendChild(a);
    let br = document.createElement('br');
    element.appendChild(br);
  })
};

const emojify = (note) => {
  fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'Application/json' },
    body: `{ "text":"${note}" }`
  }).then(response => response.json())
  .then(data => notebook.create(data.emojified_text));
}
