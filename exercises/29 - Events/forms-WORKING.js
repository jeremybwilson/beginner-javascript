const jeremy = document.querySelector('.jeremy');

jeremy.addEventListener('click', function(event) {
  const shouldChangePage = confirm('This website could be maliscious.  Do you wish to proceed?');
  console.log(shouldChangePage);
  // if (shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
const formId = document.querySelector('#signup');
const namebox = document.querySelector('#name');
const emailbox = document.querySelector('#email');
const submitButton = document.querySelector('#button-submit');

function validateEmail(event) {
  console.log(event);

  // event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.value);

  // const name = event.currentTarget.name.value;
  // if (name.includes('chad')) {
  //   alert('Sorry Bro');
  //   event.preventDefault();
  // }

  const ui = {
    formId,
    namebox,
    emailbox,
    submit: submitButton,
  };
  console.log(`ui Object:`, ui);

  // regex for valid email
  const regexEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
  );

  let validEmail;

  if (ui.formId) {
    console.log(`.:: DEBUG ::. inside the ui.formId check`);
    // remove any pre-existing error class
    if (ui.formId !== undefined) {
      ui.formId.classList.remove('has-error');
    }
    if (ui.emailbox !== undefined) {
      ui.emailbox.classList.remove('has-error');
    }

    ui.formId.submit(e => {
      console.log(`.:: DEBUG ::. inside the ui.formId.submit check`);
      e.preventDefault();

      // validation code
      validEmail = regexEmail.test(ui.emailbox.value);

      console.log(`validEmail:`, validEmail);

      if (!validEmail) {
        ui.emailbox.classList.add('has-error');
        console.log(`.:: DEBUG ::. Not a valid email format`);
      } else {
        console.log(`.:: DEBUG ::. Successfully submitted the form!`);
        console.log(`.:: DEBUG ::. Here is the POST'ed form data`, ui.formId.serialize());
      }
    });
  }
}

formId.addEventListener('submit', validateEmail);
// signupForm.addEventListener('submit', function(event) {
//   console.log(event);

//   // event.preventDefault();
//   console.log(event.currentTarget.name.value);
//   console.log(event.currentTarget.email.value);
//   console.log(event.currentTarget.agree.value);

//   if (name.includes('chad')) {
//     console.log('Sorry Bro');
//     event.preventDefault();
//   }

// });

function logEvent(event) {
  console.log(event.type);
}

// signupForm.name.addEventListener('keyup', logEvent);
// signupForm.name.addEventListener('keydown', logEvent);
// signupForm.name.addEventListener('focus', logEvent);
// signupForm.name.addEventListener('blur', logEvent);

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

// const photo = document.querySelector('.photo');

// function handlePhotoClick(event) {
//   if (event.type === 'click' || event.type === 'Enter') {
//     console.log('You clicked the photo');
//   }
// }
// photo.addEventListener('click', handlePhotoClick);
// photo.addEventListener('keyup', handlePhotoClick);
