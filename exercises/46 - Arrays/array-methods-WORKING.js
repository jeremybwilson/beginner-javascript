const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  Static Methods
*/

// Array.of();
const testArray = Array.of('jeremy', 'alex', 'anika');
const testArray2 = [...'chewie'];
const testArray3 = Array.of(...'alex');

// Make a function that creates a range from x to y with Array.from();
const createRange = (start, end) => {
  // debugger;
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  return range;
};

const myRange = createRange(3, 7);

// Check if the last array you created is really an array with Array.isArray();
// console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const entriesArray = Object.entries(meats);

// console.log(Object.entries(meats));
// console.log(Object.keys(meats));
// console.log(Object.values(meats));

Object.entries(meats).forEach(([meat, qty]) => {
  // const key = entry[0];
  // const value = entry[1];
  // const[key, value] = entry;
  console.log(meat, qty);
});

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = 'hot dogs, hamburgers, sausages, corn';
// console.log(foodString.split(', '));

const foodStringObject = Array.from(foodString.split(', '));

// take the last item off toppings with pop()
const lastItem = toppings.pop();
// console.log(lastItem);

// add it back with push()
const t2 = toppings.push(lastItem);
// console.log(t2);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
// console.log(firstItem);

// add it back in with unshift()
// toppings.unshift(firstItem);

// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
// console.log(newToppings);
newToppings = [...newToppings, toppings[toppings.length - 1]];
// console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
// toppings[0] = 'Mushy Boi';
// check to see if toppingsCopy object is a true copy;
// console.log(toppings);
// console.log(toppingsCopy);

// Make a copy of the toppings array with a spread
const toppingsCopy2 = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(3, 5);
// console.log(toppingsCopy);

// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf('Avocado');
// console.log(avoIndex);
// const jeremy = { name: 'jeremy' };
// const people = [{ name: 'scott' }, jeremy];
// console.log(people.indexOf(jeremy));

// Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('hot sauce');

// add it if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}
// console.log('toppings: ', toppings);

/* eslint-disable */
// flip those toppings around with reverse()
const toppingsReversed = toppings.reverse(); // this is a mutatable method, this will reverse the toppings array as well
// console.log('toppings: ', toppings);
// console.log('toppingsReversed ', toppingsReversed);

const toppingsReversed2 = [...toppings].reverse();  // this way to make an immutable copy of toppings, but will not modify toppings again
// console.log('toppings: ', toppings);
// console.log('toppingsReversed2 ', toppingsReversed2);

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
// const findburgRating = singleFeedback => {
//   // console.log(singleFeedback);
//   if (singleFeedback.comment.includes('burg')) {
//     return true;
//   }
//   return false;
// };

// function findBurgRating(singleFeedback){
//   return singleFeedback.comments.includes('burg');
// }

// const findBurgRating = function (singleFeedback){
//   return singleFeedback.comments.includes('burg');
// }

// the above function with the if statement is not necessary, so we can refactor the function as follows:
const findBurgRating2 = singleFeedback => singleFeedback.comment.includes('burg'); // arrow function with implicit return

const utilFunction = {
  findBurgRating(singleFeedback) {
    return singleFeedback.comment.includes(word);
  },
};

const findSmoothieRating = singleFeedback => singleFeedback.comment.includes('Smoothie');
// const burgRating = feedback.find(findBurgRating2);

function findByWord(word) {
  return function(singleFeedback){
    return singleFeedback.comment.includes(word);
  }
}

const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothie'));

console.log(burgRating);

// find all ratings that are above 2 with filter()
function filterByMinRating(minRating){
  return function(singleFeedback){
    return singleFeedback.rating > minRating;
  }
}
const goodReviews = feedback.filter(filterByMinRating(2));
console.table(goodReviews);

// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);

// Remove the one star rating however you like!
const legitRatings = feedback.filter(single => single.rating !== 1);
console.table(legitRatings);

// check if there is *at least 5* of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
// console.table(isThereEnoughOfAtLeastOneMeat);
console.log(isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of *every* meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
// console.table(isThereEnoughOfEveryMeat);
console.log(isThereEnoughOfEveryMeat);

// sort the toppings alphabetically with sort()
// const numbers = [1, 2, 100, 3, 200, 400, 155];
// const numbersSorted = numbers.sort((firstItem, secondItem) => {
//   return firstItem - secondItem;
// });
// console.log(numbersSorted);

// const numbersSorted2 = numbers.sort((firstItem, secondItem) =>  firstItem - secondItem );
// console.log(numbersSorted2);

console.log(toppings.sort());

// sort the order totals from most expensive to least with .sort()
const numberSort = (a, b) => {
  return a - b;
};
console.log(orderTotals.sort(numberSort));

// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(function(a, b){
  // debugger;
  const aPrice = a[1];
  const bPrice = b[1];
  return bPrice - aPrice;
});
console.table(productsSortedByPrice);

/*
  Looping Methods (next)
*/
// check if there is at least 5 of one type of meat with some()
// make sure we have at least 3 of every meat with every()
