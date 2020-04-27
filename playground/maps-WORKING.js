// console.log(`It works`);
/* eslint-disable */

const person1 = {
  name: 'wes',
  age: 200,
};

const myMap = new Map();
// .set()
myMap.set('name', 'Jeremy');

// myMap.age = 100;
myMap.set(100, 'This is a number');
myMap.set(person1, 'Really Cool');

// console.log(myMap.get(person1));

// dealing with scores potentially
const score = 100;
const prizes = new Map();

prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

// console.log(`You win a ${prizes.get(score)}`);

// select the ul
const ul = document.querySelector('.prizes');

// prizes.forEach(entry => {
//   console.log(entry);
// });

// for (const prize of prizes) {
//   console.log(prizes);
// }

// another method for iterating through,
// this time using destructuring
for (const [points, prize] of prizes) {
  // console.log(points, prize);
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}

// .has()
// .delete()
