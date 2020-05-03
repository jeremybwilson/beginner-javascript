/* eslint-disable */
function Slider(sliderEl){
  if(!(sliderEl instanceof Element)) {
    throw new Error(v);
  }
  // create some variables for working with the slider
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  function startSlider() {
    // update the current, prev, and next variables
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes off the current slides
    // make an array of classes to remove
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back'){
      // make an new array of the new values, and destructure them over and into the prev, current and next variables
      [prev, current, next] = [
        // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      // [prev, current, next] = [current, next, next.nextElementSibling];
      [prev, current, next] = [
        current,
        next,
        // get the next slide, or if it's at the end, loop around and grab the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);
