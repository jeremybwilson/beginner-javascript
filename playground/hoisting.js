/* eslint-disable */
var age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
function sayHi() {
  console.log('hey!');
  console.log(add1(10, 2));
}

function add1(a, b) {
  return a + b;
}

// hoisting does not work with arrow functions
const add2 = (a, b) => a + b;
