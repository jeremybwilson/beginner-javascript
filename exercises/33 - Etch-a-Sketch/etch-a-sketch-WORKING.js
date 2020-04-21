// select the elements on the page, canvas, and shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

const brushSizeAmount = document.querySelector('#brush').value;
console.log(brushSizeAmount);

let MOVE_AMOUNT;
// write a function to update the brushSize
const adjustBrushSize = e => {
  // capture brushsize
  // set the lineWidth to the text field value
  // set the MOVE_AMOUNT to the text field value
  MOVE_AMOUNT = e.target.value;
  console.log(`Brush size updated to ${MOVE_AMOUNT}`);
};

// const MOVE_AMOUNT = 50;
window.addEventListener('keyup', adjustBrushSize);
// brushSizeAmount.addEventListener('keyup', adjustBrushSize);

// Set up our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
// ctx.lineWidth = brushSize;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 1;
  // console.log(hue);
  // this value combined with the above hue += 1 increment provides a far smoother color transition.
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // this strokeStyle value using Math.random() generates a far more jarring color transition as the line is drawn
  // ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x adn y values depending on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    // console.log(e.key);
    // console.log('HANDLING KEY');
  }
}
// clear the shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
