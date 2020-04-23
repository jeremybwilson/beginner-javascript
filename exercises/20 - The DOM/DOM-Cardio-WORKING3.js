// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
// div.insertAdjacentElement('afterbegin', ul);
div.innerHTML = ul;

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
// div.insertAdjacentElement('afterbegin', myImage);
div.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
// put this div before the unordered list from above
const ulElement = document.querySelector('ul');
console.log(ulElement);

// add a class to the second paragraph called warning
ulElement.insertAdjacentHTML('beforebegin', myHtml);
// remove the first paragraph
const allParagraphs = document.querySelectorAll('.myDiv p');
const firstParagraph = allParagraphs[0];
const secondParagraph = allParagraphs[1];
// console.log(secondParagraph);
secondParagraph.classList.add('warning');

// hide first paragraph using CSS
firstParagraph.classList.add('hide');

// remove the first paragraph
firstParagraph.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name = '', age = 0, height = 0) => {
  const htmlStr = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years, ${name} would be ${age *
    7}. That would be a tall dog!</p>
    <label for="delete">Delete</label>
    <button class="delete" type="button">Delete</button>
    </div>
  `;
  return htmlStr;
};

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Jeremy', 44, 71);
cardsHTML += generatePlayerCard('Alex', 44, 71);
cardsHTML += generatePlayerCard('Anika', 44, 71);
cardsHTML += generatePlayerCard('Jenelle', 42, 71);

// append those cards to the div
cardDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardDiv);
cardDiv.style = 'flexbox';

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// create an array of individual player cards to loop over later
const singleCardDiv = Array.from(document.querySelectorAll('.playerCard'));

// select all the buttons! => capture delete button in DOM
const deletePlayerButtons = document.querySelectorAll('.delete');

// make out delete function
const handleDeleteClick = event => {
  // capture the button that got clicked
  const buttonThatGotClicked = event.currentTarget;
  // remove playerCard when delete button clicked
  buttonThatGotClicked.closest('.playerCard').remove();
};

// loop over them and attach a listener
deletePlayerButtons.forEach(button => {
  // handle the individual button click
  button.addEventListener('click', handleDeleteClick);
});
