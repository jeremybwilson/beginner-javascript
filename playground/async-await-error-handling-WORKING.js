/* eslint-disable */
function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function makePizza(toppings = []) {
  return new Promise(function (resolve, reject) {
    // reject if people try with pineapple
    if (toppings.includes('pineapple')) {
      reject('Seriously? Get out 🍍');
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook:
    setTimeout(function () {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise;
  });
}


function handleError(err){
  console.log(`.:: DEBUG ::. Error:`, err);
}

// Example 4
async function goGo(){
  const result = await go();
}

// Example 3
async function go(){
  const pizza = await makePizza(['pineapple']);
  console.log(pizza);
  // return the pizza but async function will still return a promise for pizza constant
  return pizza;
}

// Example 2
async function go2(){
  const pizza = await makePizza(['pineapple']).catch(handleError);
  console.log(pizza);
  // return the pizza but async function will still return a promise for pizza constant
  return pizza;
}

// Example 1
// async function go(){
//   try {
//     const pizza = await makePizza(['pineapple']);
//     console.log(pizza);
//   } catch(err) {
//     handleError(err);
//     // console.log(err);
//   }
// }

// Example 4
// goGo().catch(handleError);

// Example 3
go().catch(handleError);

// or you can also await the async function using .then()
go().then(result => {
  console.log(result);
}).catch(handleError);

// Example 2
// const result = go().catch(handleError);
// go2();

// Example 1
// catch it at run time
go().catch(handleError);

// Fun handle error example
function handleDisgustingPizza() {
  console.log(`This is a digusting pizza.`);
}

async function go3() {
  const pizza = await makePizza(['pineapple']).catch(handleDisgustingPizza);
  return pizza;
}

go3().catch(handleError);

// make a safe function with a HOF
function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler)
  }
}

const safeGo = makeSafe(go, handleError);

safeGo();


