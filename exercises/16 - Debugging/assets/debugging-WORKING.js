const people = [
  { name: 'Jeremy', cool: true, country: 'United States' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Chewy', cool: false, country: 'Dogtown' },
];

// New Font!
people.forEach((person, index) => {
  // if (person.name === 'Jeremy') {
  //   console.error('Dumb name');
  // }
  // debugger;
  console.log(person.name);

  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DONE!');
  // console.groupEnd(`${person.name}`);

  // console.table(people);
  // console.groupCollapsed(person.name);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DONE!');
  // console.groupEnd(`${person.name}`);
});

// console.table(people);
// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey Im one');
  console.warn('watch out!');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // function does not exist and will cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
