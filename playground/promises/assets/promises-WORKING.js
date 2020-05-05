// /* eslint-disable */

// a regular function which makes a promise
function makePizzaEx1(toppings = []) {
  const pizzaPromise = new Promise(function(resolve, reject) {
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // skip the variable declaration entirely, and return the new promise

    // reject if people try with pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously?  Get out 🍍');
    }
    // wait 1 second for the pizza to cook,
    setTimeout(() => {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings: ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise
  });
  // comment out the return statement here when returning directly (see above)
  return pizzaPromise;
}

// a regular function which makes a promise, but we return it directly
function makePizza2(toppings = []) {
  return new Promise(function(resolve, reject) {
    const amountOfTimeToBake = 500 + toppings.length * 200;

    // reject if people try with pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously?  Get out 🍍');
    }
    // wait 1 second for the pizza to cook
    setTimeout(() => {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
      // if something went wrong, we can reject this promise
    }, amountOfTimeToBake);
  });
}

// const pepperoniPromise = makePizza2(['pepperoni']);
// const canadianPromise = makePizza2(['pepperoni', 'mushroom', 'onions']);

// console.log('First');
makePizza2(['pepperoni'])
  .then(function(pizza) {
    console.log(pizza);
    return makePizza2(['ham', 'cheese']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza2(['hot peppers', 'onion', 'feta']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza2(['pineapple']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza2(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
  })
  .then(pizza => {
    console.log('All done, here is your last pizza.');
    console.log(pizza);
  })
  .catch(handleError);

// console.log('Right after.');

// pepperoniPromise.then(function(pizza) {
//   console.log('ahhh got it');
//   console.log(pizza);
// });

// console.log(`pepperoniPromise:`, pepperoniPromise);
// console.log(`canadianPromise:`, canadianPromise);

// run them concurrently
// const pizzaPromise1 = makePizza2(['hot peppers', 'onion', 'feta']);
// const pizzaPromise2 = makePizza2([
//   'one',
//   'two',
//   'three',
//   'four',
//   'one',
//   'two',
//   'three',
//   'four',
//   'one',
//   'two',
//   'three',
//   'four',
// ]);
// const pizzaPromise3 = makePizza2(['ham', 'cheese']);

// make a mega (dinner) promise
// Promise.all() is a static helper
// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(function(pizzas) {
//   const [hottie, garbagePail, hamAndCheese] = pizzas;
//   console.log(hottie, garbagePail, hamAndCheese);
// });

// // Promise.race() will wait for the first promise to resolve
// const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// firstPizzaPromise.then(pizza => {
//   console.log('You must be hungry, here is the first one ready');
//   console.log(pizza);
// });

function handleError(err) {
  console.log(err);
}
makePizza2(['cheese', 'pineapple'])
  .then(pizza => {
    console.log(pizza);
  })
  .catch(handleError);

const p1 = makePizza2(['pepperoni']);
const p2 = makePizza2(['pineapple']);

const dinnerPromise2 = Promise.allSettled([p1, p2]);
dinnerPromise2.then(results => {
  console.log(results);
});
