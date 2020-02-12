const buttons = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!');
}

buttons.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);

// buttons.removeEventListener('click', handleClick);

const hooray = () => {
  console.log('Hooray!');
};

coolButton.addEventListener('click', hooray);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// function buyItem() {
//   console.log('Buying...');
// }
// function handleBuyButtonClick(buyButton) {
//   console.log('Binding the buy button.');
//   buyButton.addEventListener('click', buyItem);
// }
// buyButtons.forEach(button => button.addEventListener('click', buyItem));

function handleBuyButtonClick(event) {
  // console.log('Binding the buy button.');
  console.log('You clicked a button.');
  const button = event.target;
  console.log(event.target);
  // console.log(button.textContent);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();

  // if (event.target === this) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseover', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});
