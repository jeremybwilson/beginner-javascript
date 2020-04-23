console.log('It works');
const item = document.querySelector('.item'); // getter
// console.log(item);

// this is a setter
// item.innerHTML = `
//   <div>
//     <h1>Hey How are you?</h1>
//   </div>
// `;

// console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// console.log(myHTML.classList);
// console.log(typeof myHTML);

// item.innerHTML = myHTML;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

document.body.appendChild(myFragment);
