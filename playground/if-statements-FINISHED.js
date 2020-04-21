if (10 > 2 || 11 > 10 || 3 > 1) {
  console.log('Yep');
} else {
  console.log('Nothing was true');
}

const age = 100;

if (age > 70) {
  console.log('In your seventies');
} else if (age > 60) {
  console.log('In your sixties');
} else if (age > 50) {
  console.log('In your 50s');
} else {
  console.log('Nothing was true');
}

function slugify(sentence, lowercase) {
  const slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    return slug.toLowerCase();
  }
  return slug;
}

const name = 'wes';
const last = 'bos';

if (name === 'scott' || (name === 'jeremy' && last == 'wilson')) {
  console.log('Coool Name!');
}

const isAwesomeName = 'awesome'.includes(name);
if (isAwesomeName) {
  console.log('SUPER COOL AWESOME NAME');
}

function nameIsAwesome(name) {
  return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
  console.log('COOL NAME WES');
}

const dog = '';

if (dog) {
  console.log('you have a dog');
} else {
  console.log('you dont have a dog');
}

const score = {};

if (score) {
  console.log('There is a score already');
} else {
  console.log('No score yet');
}

const values = [[], {}, -10, 1, 0, '', 'full string', ' ', undefined, NaN, null, '0️⃣', '💩'];

// console.group('truthy or falsy values');
// values.forEach(value => {
//   if (value) {
//     console.log(value, 'is truthy');
//   } else {
//     console.log(value, 'is falsy');
//   }
// });
// console.groupEnd();

// console.clear();

const isCool = true;

if (!isCool) {
  console.log('You are not cool');
}

// ternary
const count = 0;
// let word1;
// if (count === 1) {
//   word1 = 'item';
// } else {
//   word1 = 'items';
// }

// 1. Condition
// 2. what to do if true
// 3. what to do if false
const word2 = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
console.log(sentence);

function showAdminBar() {
  console.log('Showing admin bar');
}
const isAdmin = true;
// isAdmin ? showAdminBar() : null;

// AND AND TRICK!
function check1() {
  console.log('Running check 1');
  return true;
}
function check2() {
  console.log('Running check 2');
  return false;
}
function check3() {
  console.log('Running check 3');
  return true;
}

if (check1() && check2() && check3()) {
  console.log('all checks passed');
} else {
  console.log('Some checks failed');
}
// isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();

if (isAdmin) {
  showAdminBar();
}

// previous if statement also works as
// if (isAdmin) showAdminBar();
