// function init() {
//   const p = document.querySelector('p');
//   console.log(p);
// }

// document.addEventListener('DOMContentLoaded', init);

const p = document.querySelector('p'); // querySelector will only ever give you the first matching element
const p2 = document.querySelectorAll('p'); // querySelectorAll will give you all of the matching elements
const p3 = Array.from(document.querySelectorAll('p')); // querySelectorAll will give you all of the matching elements

// console.log(p);
// console.log(p2); // p2 will return a Nodelist, not an array
// console.log(p3); // p3 will return a true array

const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

// set the textContent property on that element
heading.textContent = 'Jeremy is cool!';

// console.dir(heading);
// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent}`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes!
const pic = document.querySelector('.nice');
// console.log(pic.classList);
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
  console.log(pic.classList.contains('round'));
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Cute Pupper'; // setter
pic.width = 200; // setter
// console.log(pic.alt); // getter
// console.log(pic.naturalWidth); // getter

pic.setAttribute('jeremy-is-cool', 'Really Cute Pup');
// console.log('Here is the alt attribute value: ', pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});
