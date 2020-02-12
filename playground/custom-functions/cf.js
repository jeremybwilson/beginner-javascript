// const button = document.querySelector('#buttonClick');

const button = document.querySelector('#buttonClick');
let count = 0;

const clickButtonCount = () => {
  console.log('Button was clicked');
  button.value = count;
  count++;
  console.log(`Count is: ${count}`);
};

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  clickButtonCount();

  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

button.addEventListener('click', calculateBill);

// Function Call. Or **Run**
const jeremyTotal = 500;
const jeremyTaxRate = 0.3;
const myTotal = calculateBill(jeremyTotal, jeremyTaxRate);

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Jeremy');
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// const myBill = calculateBill(100, undefined, 0.2);

// console.log(myBill);
