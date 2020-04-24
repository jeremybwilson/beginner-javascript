function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely!
  popup.remove();
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
}

function ask(options) {
  return new Promise(async function(resolve, reject) {
    // first we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label for="">${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
      `
    );
    console.log(popup);
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
    // listen for the submit event
    // const submit = document.querySelector('submit');
    popup.addEventListener(
      'submit',
      function(event) {
        event.preventDefault();
        console.log(`Submitted`);
        resolve(event.target.input.value);
        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );

    // when someone does submit, resolve the data that was in the input box

    // insert that popup into the DOM
    document.body.appendChild(popup);

    // put in a very small timeout before we add the open class
    await wait(200);
    popup.classList.add('open');
  });
}

async function askQuestion(event) {
  // console.log(event);
  const button = event.currentTarget;
  // const shouldCancel = button.dataset.cancel;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

// select all button that have a question
const buttons = Array.from(document.querySelectorAll('[data-question]'));
console.log(buttons);
// convert from a nodelist to an array and just use map
// buttons.forEach(button => button.addEventListener('click', askQuestion));
buttons.map(button => button.addEventListener('click', askQuestion));

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
    // or  instead push the await into results array
    results.push(await callback(item));
  }
  // when we are done with the loop, return it
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}
go();

// async function askMany() {
//   for (question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }
// askMany();
