

// this function collects the note that the user types on the index page
// this returns the note a variable called x
let userInput;
function createNewNote() {
  userInput = document.getElementById("notefield").value;
  // document.getElementById("demo").innerHTML = x;
}



var notebook = new Notebook
const emojify = (note) => {
  fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'Application/json' },
    body: `{ "text":"${note}" }`
  }).then(response => response.json())
  .then(data => notebook.create(data.emojified_text));
}
