// declare variable for API endpoint URL
/* eslint-disable */

const baseEndpoint = 'https://api.grubhub.com';
// const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username){
  userEl.textContent = 'loading...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog} `;
}

function handleError(err) {
  console.log('Oh nooo.');
  console.log(error);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser('stolinski').catch(handleError);
// displayUser('wesbos');
// console.log(jeremyPromise);
