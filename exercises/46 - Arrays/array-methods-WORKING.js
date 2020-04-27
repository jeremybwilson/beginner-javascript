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

// Make a function that creates a range from x to y with Array.from();
const createRange = (start, end) => {
  // debugger
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  // return the range
  return range;
};

const myRange = createRange(3, 7);

// Check if the last array you created is really an array with Array.isArray();
// console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
// const entriesArray = Object.entries(meats);

// const entriesArray = Object.entries(meats);
// console.log(`entriesArray`, entriesArray);

// console.log(`entriesArray2`, Object.entries(meats));
// console.log(Object.keys(meats));
// console.log(Object.values(meats));

// Object.entries(meats).forEach(entry => {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(key, value);
// });

// or using destructuring
// Object.entries(meats).forEach(entry => {
//   const [key, value] = entry;
//   console.log(key, value);
// });

// and yet another method
// Object.entries(meats).forEach(([meat, qty]) => {
//   console.log(meat, qty);
// });

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = 'hot dogs, hamburgers, sausages, corn';

// split() method will return an array
// console.log(foodString.split(', '));

// const foodStringObject = Array.from(foodString.split(', '));
const foodStringObject = Array.from(foodString.split(', '));
// console.log(`foodStringObject:`, foodStringObject);

// take the last item off toppings with pop()
const lastItem = toppings.pop();
// console.log(`lastItem:`, lastItem);

// add it back with push()
const t2 = toppings.push('Cheese');
// console.log(`lastItem pushed back into array:`, t2);

// take the first item off toppings with shift()
const firstItemShifted = toppings.shift();
// console.log(`firstItemShifted:`, firstItemShifted);

// add it back in with unshift()
const firstItemShiftedBack = toppings.unshift(firstItemShifted);
// console.log(`firstItemShiftedBack:`, firstItemShiftedBack);

// Do the last four,but immutable (with spreads and new variables)
const newToppings = toppings.slice(0, toppings.length - 1);
// console.log(newToppings);

// newToppings = [...newToppings, toppings[toppings.length - 1]];
// console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
// console.log(`toppingsCopy:`, toppingsCopy);

// check to see if toppingsCopy object is a true copy;
// toppings[0] = 'Mushy Boi';
// console.log(`toppings:`, toppings);
// console.log(`toppingsCopy:`, toppingsCopy);

// Make a copy of the toppings array with a spread
const toppingsCopy2 = [...toppings];
// console.log(`toppingsCopy2:`, toppingsCopy2);

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(3, 5);
// console.log(`toppingsCopy:`, toppingsCopy);

// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf('Avocado');
// console.log(`avoIndex:`, avoIndex);

const avoLastIndex = toppings.lastIndexOf('Avocado');
// console.log(`avoLastIndex:`, avoLastIndex);

// Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('hot sauce');

// add it if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}
// console.log('toppings: ', toppings);

/* eslint-disable */
// flip those toppings around with reverse()
// const toppingsReversed = toppings.reverse(); // this is a mutatable method, this will reverse the toppings array as well
const toppingsReversed = [...toppings].reverse();  // this is how to reverse it without reversing the original toppings array

// console.log('toppings: ', toppings);
// console.log(`toppingsReversed:`, toppingsReversed);

const toppingsReversed2 = [...toppings].reverse();  // this way to make an immutable copy of toppings, but will not modify toppings again
// console.log('toppings: ', toppings);
// console.log('toppingsReversed2 ', toppingsReversed2);

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
function findBurgRating(singleFeedback) {
  // console.log(singleFeedback);
  // if (singleFeedback.comment.includes('burg')) {
  //   return true;
  // }
  // return false;

  // instead we can just return the result of like this
  return singleFeedback.comment.includes('burg');
};
// arrow function version of the above function, with implicit return
const findBurgRatingArrowFunc = (singleFeedback) => singleFeedback.comment.includes('burg');

// const burgRating = feedback.find(rating => rating.comment.includes('burg'));
// const burgRating = feedback.find(findBurgRating);
const burgRating = feedback.find(findBurgRatingArrowFunc);
// console.log(`burgRating:`, burgRating);

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

// pass the functions directly in
const findBurgRating3 = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothie'));

// console.log(`findBurgRating3:`, findBurgRating3);
// console.log(`smoothieRating:`, smoothieRating);

// find all ratings that are above 2 with filter()
const goodReviews = feedback.filter(singleFeedback => singleFeedback.rating > 2);
// console.table(goodReviews);

function filterByMinRating(minRating){
  return function(singleFeedback){
    return singleFeedback.rating > minRating;
  }
}

// returning via passing filterByMinRating() to filter method
const goodReviews2 = feedback.filter(filterByMinRating(2));
// console.table(goodReviews2);

// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter(findByWord('burg'));
// console.table(burgRatings);

// Remove the one star rating however you like!
const legitRatings = feedback.filter(single => single.rating !== 1);
// console.table(`legitRatings`, legitRatings);
// console.table(legitRatings);

// check if there is *at least 5* of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
// console.log(`isThereEnoughOfAtLeastOneMeat:`, isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of *every* meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
// console.log(`isThereEnoughOfEveryMeat:`, isThereEnoughOfEveryMeat);

// sort the toppings alphabetically with sort()
const numbers = [1, 2, 100, 3, 200, 400, 155];
const numbersSorted = numbers.sort((firstItem, secondItem) => {
  return firstItem - secondItem;
});
// console.log(`numbersSorted`, numbersSorted);

const numbersSorted2 = numbers.sort((firstItem, secondItem) =>  firstItem - secondItem );
// console.log(`numbersSorted2`, numbersSorted2);

// console.log(toppings.sort());

// sort the order totals from most expensive to least with .sort()
const numberSort = (a, b) => {
  return a - b;
};
// console.log(`Sorted order totals:`, orderTotals.sort(numberSort));

// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(function(a, b){
  // debugger;
  const aPrice = a[1];
  const bPrice = b[1];
  return aPrice - bPrice;
});
console.table(`productsSortedByPrice:`, Object.fromEntries(productsSortedByPrice));

/*
  Looping Methods (next)
*/
// check if there is at least 5 of one type of meat with some()
// make sure we have at least 3 of every meat with every()
