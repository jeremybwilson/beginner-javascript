// const first = 'jeremy';
// const last = 'wilson';
// var age = '44';
// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();

/* eslint-disable*/
// function isCool(name) {
//   let cool;
//   // let cool = false;
//   if (name === 'jeremy') {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// isCool('wes');
// isCool('jeremy');

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }


const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go2() {
  const dog = 'sunny';
  logDog('sunny');
}

go2();

function yell() {
  // name = name.toUpperCase();
  console.log(name.toUpperCase());
}

function sayHi(name) {
  function yell() {
    // name = name.toUpperCase();
    console.log(name.toUpperCase());
  }
  yell();
}


function sayHi2(name) {
  yell();
}

yell();
