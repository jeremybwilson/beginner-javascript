const age = 100;
const jeremy = {
  age,
  name: 'Jeremy',
  properyToCheck: 'NEVER',
  'cool-dude': true,
  'really cool': false,
  '777': true,
  dog: 'snicker',
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
};

jeremy.job = 'Web Developer';
jeremy.age = 50;

console.log(jeremy.age);
// const properyToCheck = prompt('What do you want to check?');
// console.log(properyToCheck);
// console.log(jeremy[properyToCheck]);

const nameInput = document.querySelector('[name="first"]');
// const name = nameInput.value;
const name = nameInput ? nameInput.value : '';
console.log(name);

/* eslint-disable */
// console.log(delete jeremy.job);
// jeremy.age = undefined;
// jeremy.age = null;

let name1 = 'jeremy';
let name2 = 'jeremy';

// console.log(name1 === name2);
name1 = 'scott';
// console.log(name1 === name2);
// update name1 to be what is name2
name1 = name2;
// console.log(name1 === name2);
name2 = name1;
name2 = 'westopher';

const person1 = {
  first: 'jeremy',
  last: 'wilson',
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
const person2 = {
  first: 'jeremy',
  last: 'wilson',
};

// const person3 = person1;
// person3.first = 'Larry';
// console.log(person3.first);
// console.log(person1.first);
const person3 = { ...person1 };
// const person3 = Object.assign({}, person1);

// this example employs Lodash (see underscore)
// const person3 = _.cloneDeep(person1);

person3.first = 'Larry';
person3.clothing.shirts = 100;

const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15,
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

function doStuff(data) {
  data = 'something else';
  console.log(data);
}

function doStuff2(data) {
  data.tomatoes = 10000000000;
  console.log(data);
}

doStuff2(inventory);
