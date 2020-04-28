/* eslint-disable */
const names = ['jeremy', 'alex', 'anika', 'chewie', 'jet'];

console.log(names[0]);                  // generates the first item in the array
console.log(names.length);              // generates the overall length of the array
console.log(names[names.length - 1]);   // generates the last item in the array

names.push('lux');
// console.log(names);

const names2 = [...names, 'lux'];
names2.unshift('poppy');
names2.pop();
// console.log(names2);

// Immutable way to copy names array create names4 and .spread names3 into new array
const names3 = ['poppy', ...names];
// console.log(names3);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)];
console.log(`newBikes`, newBikes);

const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log(`newBikes2`, newBikes2);

//
const comments = [
  { text: 'Cool Beans', id: 123 },
  { text: 'Love this', id: 133 },
  { text: 'Neato', id: 233 },
  { text: 'good bikes', id: 333 },
  { text: 'so good', id: 433 },
];

function deleteComment(id, comments) {
  // first find the index of the item in the array
  const commentIndex = comments.findIndex(comment => comment.id === id);
  // make a new array without that item in it
  // return our new array
  return [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
}

const kaitIndex = names3.findIndex(name => name === 'kait');
const newNamesWithOutKait = [
  // get everything up to kait index
  ...names3.slice(0, kaitIndex),
  // everything after Kait index
  ...names3.slice(kaitIndex + 1),
];
console.log(newNamesWithOutKait);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers);
// numbers.splice(3,2);
// console.log(numbers);

// Mutation Methods - DO CHANGE THE ORIGINAL DATA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);
// numbers.splice(3, 2);
// console.log(numbers);
// anytime you want to use a mutation method and NOT mutate the orignal array
// we need to take a copy of the array
// const numbersReversed = [...numbers].reverse();
// console.log(numbersReversed);
// numbers.reverse();
// console.log(numbers);
// Immutable - THEY DO NOT CHANGE THE ORIGINAL DATA
// const pizzaSlice = numbers.slice(2, 4);
// console.log(pizzaSlice);
// console.log(numbers);