// function init() {
//   const p = document.querySelector('p');
//   console.log(p);
// }

// document.addEventListener('DOMContentLoaded', init);

const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const images = document.querySelector('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');
// console.log(p);
// console.log(divs);
// console.log(images);
// console.log(item2Image);

// console.dir(heading);
// console.dir(heading.textContent);
// console.dir(heading.innerText);
// set the textContent property on that element
// heading.textContent = 'Jeremy is Cool';
// console.dir(heading.textContent);
// console.dir(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const pic = document.querySelector('.nice');
// pic.classList.add('open');
// pic.classList.remove('cool');
// console.log(pic.classList);
// pic.classList.add('round');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
  console.log(pic.classList.contains('round'));
}

pic.addEventListener('click', toggleRound);
pic.alt = 'Alternating Placeholder Image'; // setter
pic.width = 200; // setter
// console.log(pic.alt); // getter
// console.log(pic.naturalWidth); // getter

window.addEventListener('load', function() {
  console.log(pic.naturalWidth); // getter
});

// pic.setAttribute('jeremy-is-cool', 'Really Cute Pup');
// console.log('Here is the alt attribute value: ', pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  console.log(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});
