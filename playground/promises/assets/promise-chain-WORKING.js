// /* eslint-disable */
import wait from 'waait';

// const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

// function wait(ms = 0) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, ms);
//   });
// }

wait(2000).then(() => {
  console.log('Done!');
});

const go = document.querySelector('.go');

function animate(event) {
  const el = event.currentTarget;
  // 1. Change the text to GO when clicked.
  wait(200)
    .then(() => {
      // 2. Make it a circle after 2 seconds
      el.classList.add('circle');
      return wait(500);
    })
    .then(() => {
      // 3. Make it red after 0.5s
      el.classList.add('red');
      return wait(500);
    })
    .then(() => {
      // 4. make it square after 0.25s
      el.classList.remove('circle');
      return wait(500);
    })
    .then(() => {
      // 5. make it purple
      el.classList.remove('red');
      el.classList.add('purple');
      return wait(500);
    })
    .then(() => {
      // 6. fade out after 0.5s
      el.classList.add('fadeOut');
      // return wait(500);
    });
}

go.addEventListener('click', animate);

async function animate2(e) {
  const el = e.currentTarget;
  // 1. Change the text to GO when clicked.

  // 2. Make it a circle after 2 seconds
}

// go.addEventListener('click', animate2);

go.addEventListener('clickXXXX', function go(event) {
  const el = event.currentTarget;
  // 1. Change the text to GO when clicked.
  el.textContent = 'GO';
  setTimeout(function() {
    // 2. Make it a circle after 2 seconds
    el.classList.add('circle');
    setTimeout(function() {
      // 3. Make it red after 0.5s
      el.classList.add('red');
      setTimeout(function() {
        // 4. make it square after 0.25s
        el.classList.remove('circle');
        setTimeout(function() {
          // 5. make it purple
          el.classList.remove('red');
          el.classList.add('purple');
          setTimeout(function() {
            // 6. fade out after 0.5s
            el.classList.add('fadeOut');
            setTimeout(function() {
              console.log('You have reacted the 7th layer of callback hell');
              el.classList.remove('fadeOut', 'purple');
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
});
