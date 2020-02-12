// grab the elements
const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// FUNCTION to handle the card button click

const handleCardButtonClick = event => {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // console.log('Ya clicked it!');
  // Grab the img src
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').description;

  // populate the modal with the new info
  modalInner.innerHTML = `
      <img width="600" height="600" src="${imgSrc.replace(
        '200',
        '600'
      )}" alt="${name}"/>
      <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
};

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

const closeModal = () => {
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', function(event) {
  // find value for isOutside and convert to Boolean value with the !
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', event => {
  // eventListener on the key stroke and not the click event
  if (event.key === 'Escape') {
    closeModal();
  }
});
