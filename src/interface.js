let notebook = new Notebook;
let note;
let displayCount = 0

getNotes();
displayOldNotes();

function createNewNote() {
  note = document.getElementById("notefield").value;
  emojify(note);
  setTimeout(() => {
    displayNoteLinks();
    storeNote();
  }, 300)
  document.getElementById("notefield").value = ""

};

function storeNote() {
  note_index = notebook.notes.length - 1
  note = notebook.notes[note_index]
  localStorage.setItem(note_index, note)
}

function getNotes() {
  for (const [key, value] of Object.entries(localStorage)) {
    notebook.create(value)
  }
}

function displayOldNotes() {
  let html = "";
  let div1 = document.getElementById("div1");
  for (let i = 0; i < notebook.notes.length; i++) {
    html += `<a href="#${i}">${notebook.notes[i]}</a><br>`;
  }
  div1.innerHTML = html;
}

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

function showFullNote() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteUrl(window.location));
};

function getNoteUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(index) {
  console.log(index)
  document
    .getElementById("fullnote")
    .innerHTML = notebook.notes[index];
  };

showFullNote();
window.history.replaceState(null, null, ' ');
