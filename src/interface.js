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
