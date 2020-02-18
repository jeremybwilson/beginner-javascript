/* eslint-disable */
// function scoped
// var first = 'Jeremy'; // variable declaration

// Scoping Fundamentals
// Scoping in JS answers the question, "where are my variables available to me?"

// var variables are "function" scoped
// let and const variables are "block" scoped

// what are blocked scoped variables?
// block scoped variable examples:
const first = 'Jeremy';
let age = 44;
// const age = 44;
const cool = true;
console.log(first); // function call statement

// cool = true;  // const variables cannot be updated

if (age > 10) {
  console.log('You are old');
}

if (age <= 44) {
  console.log('Not dead yet!');
}

const Dog = 'bowser';

// camel case
const iLovePizza = true;
// UpperCamelCase
const ILoveToEatHotDogs = false;
// snake case!!
const this_is_snake_case = 'cool';
