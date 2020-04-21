function buzzer() {
  console.log('ENNGGGGGGG');
}

// console.log('Starting');
// setTimeout(buzzer, 500);
// console.log('finishing');
// setInterval(buzzer, 1000);

function setImmediateInterval(funcToRun, ms) {
  // debugger;
  // right away call that function
  funcToRun();
  // run a regular interval
  return setInterval(funcToRun, ms);
}

setImmediateInterval(buzzer, 2000);

function sayHi() {
  console.log('Heyyy');
}
// setImmediateInterval(sayHi, 200);

function destroy() {
  document.body.innerHTML = `<p>DESTROYED</p>`;
}

const bombTimer = setTimeout(destroy, 5000);

window.addEventListener('click', function() {
  console.log('You clicked! You saved the world');
  // ???? How do i stop
  clearTimeout(bombTimer); // STOP THE TIMER FROM RUNNING
});

const poopInterval = setInterval(function() {
  console.log('💩');
  console.log('Hehehe');
}, 100);

setTimeout(function() {
  clearInterval(poopInterval);
}, 3000);
