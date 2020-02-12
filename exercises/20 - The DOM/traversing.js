console.log('it works');

const jeremy = document.querySelector('.jeremy');

// console.log(jeremy.children);
// console.log(jeremy.childNodes);

// console.log(jeremy.firstElementChild);
// console.log(jeremy.lastElementChild);
// console.log(jeremy.previousElementSibling);
// console.log(jeremy.nextElementSibling);
// console.log(jeremy.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
