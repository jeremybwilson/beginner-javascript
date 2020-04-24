function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function go() {
  console.log('Starting');
  await wait(1000);
  console.log('running');
  await wait(200);
  console.log('ending');
}

go();

function makePizza(toppings = []) {
  return new Promise(function(resolve, reject) {
    // reject if people try with pineapple
    // if (toppings.includes('pineapple')) {
    //   reject('Seriously? Get out 🍍');
    // }
    // const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook:
    // setTimeout(function() {
    // when you are ready, you can resolve this promise
    // resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
    // }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise;
  });
}

// async function go() {
//   console.log('Starting');
//   await wait(2000);
//   console.log('running');
//   await wait(200);
//   console.log('ending');
// }

// go();

async function makeDinner() {
  // const pizza1 = await makePizza(['pepperoni']);
  // const pizza2 = await makePizza(['mushrooms']);

  const pizzaPromise1 = makePizza(['pepperoni']);
  const pizzaPromise2 = makePizza(['mushrooms']);
  const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(pep, mush);
}

makeDinner();

// Function declaration
async function fd() {}

// arrow function
const arrowFn = async () => {};

// call back
window.addEventListener('click', async function() {});

//
const person = {
  // method
  async sayHi() {},
  // method shorthand
  async sayHello() {},
  // function property
  sayHey: async () => {},
};
