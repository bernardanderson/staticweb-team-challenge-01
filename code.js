var createButton = document.getElementById("create-button");
var deleteButton = document.getElementsByClassName("delete");
var textInput = document.getElementById("text-input");
var cardHolder = document.getElementById("card-holder");
var cardTxtColors = document.getElementsByClassName("txt-color");
var cardBgColors = document.getElementsByClassName("bg-color");
var cardDeletes = document.getElementsByClassName("delete");

// This function creates a div, gives it the class of "card" and
//  passes a string as the innerHTML content.
// After completion, the insertDiv function is called, passing the newly
//  created div. 
function buildDiv(cardString) {
  var createDiv = document.createElement("div");
  createDiv.classList.add("card");
  createDiv.innerHTML = cardString;
  insertDiv(createDiv);
}

// This function styles the color of a specific card's background
function colorBg() {
  this.parentElement.parentElement.style.background = this.value;
}

// This function styles the color of a specific card's text
function colorTxt() {
  this.parentElement.parentElement.style.color = this.value;
}

// This function delete's an entire card and all it's elements
function deleteDiv() {
  this.removeEventListener("click", makeCardString);
  this.parentNode.remove();
}

// This inserts a newly created div element into the main body div.
// It calls the updateButtons function which updates all the EventListeners
//   to include the newly added cards and it's input elements.
function insertDiv(createDiv) {
  cardHolder.appendChild(createDiv);
  updateButtons();
}

// This function builds a text string from the textInput on the DOM
// Then the build function is called, passing the text string
function makeCardString() {
  var cardString = "<label>BG Color<input type='color' class='bg-color'></label>";
  cardString += "<label>Text Color<input type='color' class='txt-color'></label>";
  cardString += "<p class='delete'>Delete</p>";
  cardString += "<span class='card-text'>" + textInput.value + "</span>";
  buildDiv(cardString);
}

// This function updates all the event handlers for the buttons 
//  within each newly created card.
function updateButtons() {
  cardTxtColors = document.getElementsByClassName("txt-color");
  cardBgColors = document.getElementsByClassName("bg-color");
  cardDeletes = document.getElementsByClassName("delete");
  for (var i = 0; i < cardDeletes.length; i++) {
    cardTxtColors[i].addEventListener("input", colorTxt);
    cardBgColors[i].addEventListener("input", colorBg);
    cardDeletes[i].addEventListener("click", deleteDiv);
  }
}

// This starts the chain of functions to put a new "Card" on the DOM.
createButton.addEventListener("click", makeCardString);
