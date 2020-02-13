console.log('IT WORKS!');

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
  // console.log(payload);
  const payloadIntRatio = payload[0].intersectionRatio;
  // if (payloadIntRation === 1) {
  if (payload[0].intersectionRatio === 1) {
    console.log(payloadIntRatio);
    console.log('REMOVING DISABLED');
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
// terms.addEventListener('scroll', function(event) {
// console.log(event.currentTarget.scrollTop);
// console.log(event.currentTarget.scrollHeight);
// });

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
