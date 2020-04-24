/* eslint-disable */
// a regular function which makes a promise
function makePizza(toppings = []) {
  // const pizzaPromise = new Promise(function(resolve, reject){
  // skip the variable declaration entirely, and return the new promise
  return new Promise(function(resolve, reject) {
    // reject if people try with pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously? Get out 🍍');
    }
    const amountOfTimeToBake = 100 * (toppings.length * 200);
    // wait 1 second for the pizza to cook,
    setTimeout(function() {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`)
    }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise
  });
  // comment out the return statement here when returning directly (see above)
  // return pizzaPromise;
}


// const pepperoniPromise = makePizza(['pepperoni']);
// const canadianPromise = makePizza(['pepperoni', 'mushrooms', 'canadian bacon']);

// console.log(`Starting.`);
// pepperoniPromise.then(function(pizza){
//    console.log('Ahh got it!');
//    console.log(pizza);
//  });
// console.log(`Finishing.`);


// console.log(`First.`);
// makePizza(['pepperoni'])
//   .then(function (pizza){
//     console.log(pizza);
//     return makePizza(['ham', 'cheese']);
//   })
//   .then(function (pizza){
//     console.log(pizza);
//     return makePizza(['hot peppers', 'onion', 'feta']);
//   })
//   .then(function (pizza){
//     console.log(pizza);
//     return makePizza();
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
//   })
//   .then(pizza => {
//     console.log(`All done! Here is your last pizza.`);
//   });
// console.log(`Right after.`);

// // run them concurrently
// const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
// const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
// const pizzaPromise3 = makePizza(['ham', 'cheese']);

// // make a mega (dinner) promise
// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(function(pizzas){
//   const [hottie, garbagePail, hamAndCheese] = pizzas;
//   console.log(hottie, garbagePail, hamAndCheese);
// });

function handleError(err){
  console.log(`Oh noooo!!`);
  console.log(err);
}

makePizza(['cheese', 'pineapple'])
  .then(pizza => {
    console.log(pizza);
  })
  .catch(handleError)
