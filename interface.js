

// this function collects the note that the user types on the index page
// this returns the note a variable called x
let userInput;
function createNewNote() {
  userInput = document.getElementById("notefield").value;
  // document.getElementById("demo").innerHTML = x;
}



fetch('https://makers-emojify.herokuapp.com', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'Application/json'
  },
  body: '{"text": "Hello, :earth_africa:"}'
}).then(response => response.json())
.then(data => console.log(data));


const emojify = () => {
  fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Conent-Type': 'Application/json' },
    body: '{ "text":"Hello, earth_africa:" }'
  }).then(response => response.json());
}
