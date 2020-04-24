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

function handleError(err) {
  console.log('ohhh noooo');
  console.log(err);
}

function handleDisgustingPizza() { }
async function go() {
  const pizza = await makePizza(['pineapple']).catch(handleDisgustingPizza);
  return pizza;
}

// catch it at run time
go().catch(handleError);
// make a safe function with a HOF
function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(go, handleError);

safeGo();
