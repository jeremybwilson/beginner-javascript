// function doctorize(firstName) {
//   return `Dr. ${firstName.toUpperCase()}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};
// console.log(doctorize('jeremy'));

function doctorize2(firstName) {
  return `Dr. ${firstName.toUpperCase()}`;
}
console.log(doctorize2('jeremy'));

/* eslint-disable */
// Step 1
// function inchesToCM(inches){
//   const cm = inches * 2.54;
//   return cm;
// }
// Step 2
// function inchesToCM(inches){
//   return inches * 2.54;  // just returns directly the value of inchesToCM
// }
// Step 3  => Anonymous func
// const inchesToCM = function(inches){
//   return inches * 2.54;
// }
// Step 4  => fat arrow function
// const inchesToCM = (inches) => {
//   return inches * 2.54  // explicit return
// };
// const inchesToCM = (inches) => inches * 2.54;  // implicit return
const inchesToCM2 = inches => inches * 2.54;

function add(a, b = 3) {
  const total = a + b;
  return total;
}

// convert the above to an arrow function
const add2 = (a, b = 3) => a + b;

// returning an object
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby; // always your return your baby folks
};

// fat arrow function version of the above makeABaby function declaration
const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// Anon Function
// function(age) {
//   console.log('Running an Anon function');
//   return `You are cool and age ${age}`;
// }

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const jeremy = {
  name: 'Geronimo Wilson',
  // Method!
  sayHi() {
    console.log(`Hey ${this.name}`);
    return 'Hey Jeremy';
  },
  // Short hand Method
  yellHi() {
    console.log('HEY YOU GUYYYS!');
  },
  // Arrow function
  whisperHi: () => {
    console.log('hii jeremy, imma mouse');
  },
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

// let count;
let count = 0;
// let countObject = {};
function handleClick() {
  // console.log('Great Clicking!!');
  console.log('You clicked the button!!');
  button.value = count;
  const countObject = {
    count: count++,
  };
  // count++;
  console.log('The count object contains', countObject);
}

button.addEventListener('click', handleClick);
button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 250);
