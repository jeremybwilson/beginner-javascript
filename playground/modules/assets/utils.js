const last = 'Wilson';
const middle = 'Boo yaa';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}
const first = 'Jeremy';
// NAMED exports - we can have as many as we want
export { last, middle };
export default first;
