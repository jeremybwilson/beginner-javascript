/* eslint-disable */
function Slider(slider){
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }
  // create some variables for working with the slider
  // let prev;
  // let current;
  // let next;
  // variable declarations now not needed with this.
  this.prev;
  this.current;
  this.next;

  // select the elements needed for the slider
  this.slides = slider.querySelector('.slides');
  this.slider = slider;

  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // when this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // Event listeners
  // this.move = this.move.bind(this);
  // nextButton.addEventListener('click', this.move);
  // the above works for the nextButton but we will use the arrow function () => this.move()
  nextButton.addEventListener('click', () => this.move());
  prevButton.addEventListener('click', () => this.move('back'));
}

Slider.prototype.startSlider = function() {
  // update the current, prev, and next variables
  this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  // console.log({ this.current, this.prev, this.next });
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  // first strip all the classes off the current slides
  // make an array of classes to remove
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === 'back') {
    // make an new array of the new values, and destructure them over and into the prev, current and next variables
    [this.prev, this.current, this.next] = [
      // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    // [prev, current, next] = [current, next, next.nextElementSibling];
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // get the next slide, or if it's at the end, loop around and grab the first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);
