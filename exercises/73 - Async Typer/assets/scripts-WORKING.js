function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min) + min);
}

// // async for/of loop
// async function draw(el) {
//   // console.log(el);
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     // console.log(letter);
//     soFar += letter;
//     // console.log(soFar);
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// now with recursion

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    // wait for some time
    await wait(amountOfTimeToWait);
    // exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
