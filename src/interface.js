let notebook = new Notebook;
let note;
// This displayCount will be used later
let displayCount = 0

getNotes();
displayOldNotes();

// This function grabs the text that the user put in the text field with the id of 'notefield'
// It then uses that text to create a new note.
// Finally it runs the displayNoteLinks function to show the new note with the others
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

//This function grabs the last element of the notebook.previews array
// It adds the info from this to the div1 element on the index page.
//By doing this each time the 'create note' button is clicked, the list grows.
function displayNoteLinks() {
  let lastElement = notebook.previews()[notebook.previews().length - 1]
  let divArray = [lastElement]
  divArray.forEach((preview) => {
    let a = document.createElement('a');
    // a = <a></a>
    let node = document.createTextNode(preview);
    // node = preview
    a.appendChild(node);
    // a = <a>preview</a>
    a.href = `#${displayCount}`
    // a = <a href="#0">preview</a> (assuming count is currenlty 0 - to match the index of the element)
    displayCount++
    let element = document.getElementById("div1");
    element.appendChild(a);
    // The above adds 'a' to the div1 element on the index page
    let br = document.createElement('br');
    element.appendChild(br);
    // The above creates a break element and adds that as well so it looks good
  })
};

// emojify - takes a note and emojifies it
// let's pass in this string: "Hello, :earth_africa:"
const emojify = (note) => {

  // fetch makes a request to the api and takes 2 params -
  // a URL and an object with 'options'
  fetch('https://makers-emojify.herokuapp.com', {

    // method: speficifies that it is a post request
    method: 'POST',

    // mode: still not entirely sure what cors is but it's something to do with how the request is handled
    mode: 'cors',

    // headers: specifies request headers and the type of content
    headers: { 'Content-Type': 'Application/json' },

    // body: the actual data we are posting
    body: `{ "text":"${note}" }`

    // fetch returns an object called a promise, which means that the data is not returned immediately.
    // this is why we need the .then method - it makes the program wait for the response before continuing
    // the response is a json string - .json converts it to a javascript object.
  }).then(response => response.json())

  // we need another .then as the data is wrapped in 2 promises
  // data is the object we are after. it looks like this:
  // {"status":"OK","text":"Hello, :earth_africa:","emojified_text":"Hello, 🌍"}
  // data.emojified_text gives us "Hello, 🌍"
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
// this function is what allows the notes to be displayed in full when clicked on the href link
window.history.replaceState(null, null, ' ');
// history.replaceState(data, title, url) ->
// the url bit get replaced by an empty string (it has to have a space there) whereas data and title do not change
// the above removes the #index in the URL (note that this happens on refresh, but if executed in the conole, it doesnt refresh the page)
