function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely
  popup.remove();
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
}

function ask(options) {
  return new Promise(async function(resolve) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>`
    );
    // console.log(popup);
    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // listen for the submit on the inputs
    popup.addEventListener(
      'submit',
      function(event) {
        event.preventDefault();
        console.log(`SUBMITTED!`);
        resolve(event.target.input.value);
        // remove the popup from the DOM
        destroyPopup(popup);
        // REMOVE THE EVENT LISTENER FOR SUBMITTED => instead, we'll pass the optional argument
      },
      { once: true }
    );
    // when someone does submit it, resolve the data that was in the input box

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // solution here to address timing, is to put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}
// popup function () {

// }

// select all button that have a question
async function askQuestion(event) {
  const button = event.currentTarget;
  // const shouldCancel = button.dataset.cancel;
  const shouldCancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel: shouldCancel,
  });
  console.log(answer);
}

// const buttons = document.querySelectorAll('[data-question]');
// buttons.forEach(button => button.addEventListener('click', askQuestion));

// convert from a nodelist to an array and just use map
const buttons = Array.from(document.querySelectorAll('[data-question]'));
buttons.map(button => button.addEventListener('click', askQuestion));
console.log(buttons);

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    // const result = await callback(item);
    results.push(await callback(item));
  }
  // when we are done, return the results
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}
go();
