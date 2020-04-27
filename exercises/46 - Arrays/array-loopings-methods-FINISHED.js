/* eslint-disable */
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

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
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

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

/*
  Looping Methods
*/

function logTopping(topping, index, originalArray) {
  const nextTopping = originalArray[index + 1];
  const prevTopping = originalArray[index - 1];
  // log the topping
  console.log(topping);
  // log the prev topping if there is one
  prevTopping ? console.log(prevTopping) : null;

  // log the next topping if there is one
  nextTopping ? console.log(nextTopping) : null;
  // if its the last item in the array, say good bye
  index === originalArray.length - 1 ? console.log('Goodbye') : console.log('Getting the next Topping');

  // index === originalArray.length && console.log('Goodbye');
  console.log('-------🍕-------');
}

toppings.forEach(logTopping);

// Map, Filter, Reduce
console.clear();

function addArms(face) {
  return `👋 ${face} 👋`;
}

const toys = faces.map(addArms);

console.log(toys);

function bosify(name) {
  return `${name} Bos`;
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
console.log(fullNames);

const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax);

//     function attachBody(face, body) {
//       return `
//           ${face}
// 　　　　　${body.repeat(3)}
// 　　　　 ${Array(3).fill(body).join(' ')}
// 　　　👇🏽　 ${body.repeat(2)}　👇🏽
//         ${Array(2).fill(body).join('   ')}
//         ${Array(2).fill(body).join('   ')}
// 　　　　　👢　　👢
//       `
//     }

//     faces.map(face => attachBody(face, '🍟')).forEach(body => console.log(body))

const cleanPeople = people.map(function(person) {
  // timestamp
  const birthday = new Date(person.birthday).getTime();
  // now timestamp
  const now = Date.now();
  const age = Math.floor((now - birthday) / 31536000000);
  // get their birthday
  // figure out how old they are
  // return their full name and bday in an object
  return {
    age,
    name: `${person.names.first} ${person.names.last}`,
  };
});

console.table(cleanPeople);
const over40 = cleanPeople.filter(person => person.age > 40);
console.log(over40);

if (over40.length) {
  console.log('There are some people over 40');
}

function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  };
}

function findByProp(prop, propWeAreLookingFor) {
  return function isStudent(student) {
    return student[prop] === propWeAreLookingFor;
  };
}

const student = students.find(findByProp('id', '565a'));
const student2 = students.find(findByProp('first_name', 'Micki'));
console.log(student);
console.log(student2);

// Reduce!
console.clear();

function tallyNumbers(tally, currentTotal) {
  console.log(`The current tally is ${tally}`);
  console.log(`The current total is ${currentTotal}`);
  console.log('---------');
  // return the current tally PLUS the amount of this order
  return tally + currentTotal;
}

const allOrders = orderTotals.reduce(tallyNumbers, 0);

function inventoryReducer(totals, item) {
  console.log(`Looping over ${item.type}`);
  // increment the type by 1
  totals[item.type] = totals[item.type] + 1 || 1;
  // totals.shirt ? totals.shirt + 1 : totals.shirt = 1;
  // return the totals, so the next loop can use it
  return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(totalInventoryPrice);
