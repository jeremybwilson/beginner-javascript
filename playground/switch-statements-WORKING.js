/* eslint-disable */
console.log('It works');

const turtle = document.querySelector('.turtle');

// console.log(turtle);
let x = 0;
let y = 0;
const speed = 50;
let flipped = 'false';
let rotate = 0;

const handleKeyDown = (event) => {
  // if it's not an arrow key, we don't care
  if(!event.key.includes('Arrow')){ return; }
  console.log(event.key);

  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y += 1;
      rotate = 90;
      break;
    case 'ArrowLeft':
      rotate = 0;
      flipped = true;
      x -= 1;
      break;
    case 'ArrowRight':
      rotate = 0;
      flipped = false;
      x += 1;
      break;
    default:
      console.log('That is not a valid move');
      break;
  }
  turtle.style['background'] = 'red';
  turtle.style['--x'] = `${x}px`;
  turtle.style['--y'] = `${y}px`;
  turtle.setAttribute('style',
  `
    --rotateX: ${flipped ? '180deg' : '0' };
    --x: ${x * speed }px;
    --y: ${y * speed }px;
    --rotate: ${rotate}deg;
  `
  );
}
window.addEventListener('keyup', handleKeyDown);
