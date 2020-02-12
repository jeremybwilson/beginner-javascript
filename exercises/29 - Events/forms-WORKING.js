const jeremy = document.querySelector('.jeremy');

jeremy.addEventListener('click', function(event) {
  const shouldChangePage = confirm(
    'This website could be maliscious.  Do you wish to proceed?'
  );
  console.log(shouldChangePage);
  // if (shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
  // console.log(event);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    console.log('Sorry Bro');
    event.preventDefault();
  }
  // event.preventDefault();
});

function logEvent(event) {
  console.log(event.type);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.type === 'Enter') {
    console.log('You clicked the photo');
  }
}
photo.addEventListener('click', handlePhotoClick);
