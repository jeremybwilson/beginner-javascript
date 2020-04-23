// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// add three list items with the words "one, two three" in them
const listItems = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// put that list into the above wrapper
// myDiv.insertAdjacentHTML('afterbegin', listItems);
myDiv.innerHTML = listItems;

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos//200';
// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
// document.myDiv.insertAdjacentElement('afterbegin', myImage);

myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

const ulElement = myDiv.querySelector('ul');
// console.log(ulElement);

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHtml);

// add a class to the second paragraph called warning
const allParagraphs = Array.from(document.querySelectorAll('p'));
const secondParagraph = allParagraphs[1];
// console.log(secondParagraph);
secondParagraph.classList.add('warning');

// remove the first paragraph
const firstParagraph = allParagraphs[0];
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// function generatePlayerCard(name = '', age = '', height = '') {
const generatePlayerCard = (name = '', age = 0, height = 0) => {
  // const ageInDogYears = age * 7;
  const htmlStr = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height}" tall and ${age} years old.  In dog years this ${name} would be ${age *
    7}. That would be a tall dog!</p>
      <label for="delete">Delete</label>
      <button class="delete" type="button">Delete</button>
    </div>
  `;
  return htmlStr;
};

// make a new div with a class of cards
const cardDiv = document.createElement('div');
// add a class of wrapper to it
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Jeremy', 44, 71);
cardsHTML += generatePlayerCard('Jenelle', 42, 72);
cardsHTML += generatePlayerCard('Alex', 18, 72);
cardsHTML += generatePlayerCard('Anika', 15, 62);

// append those cards to the div
cardDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
cardDiv.style = 'flexbox';

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// create an array of individual player cards to loop over later
const singleCardDiv = Array.from(document.querySelectorAll('.playerCard'));

// select all the buttons! => capture delete button in DOM
const deletePlayerButtons = document.querySelectorAll('.delete');

// loop through each single player card and attach delete button
// see updated generatePlayerCard function

// make out delete function
const handleDeleteClick = event => {
  const buttonThatGotClicked = event.currentTarget;
  // remove playerCard when delete button clicked
  // buttonThatGotClicked.style.display = 'none';
  buttonThatGotClicked.closest('.playerCard').remove();
};

// loop over them and attach a listener
deletePlayerButtons.forEach(button =>
  // handle delete click event
  button.addEventListener('click', handleDeleteClick)
);
