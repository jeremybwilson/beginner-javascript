// declare variable for API endpoint URL
const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
// declare other variables
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

// function to fetch the recipe data from the API endpoint
async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

// function to handle the form submit
async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

// function to fetch and display
async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

// function to display the recipes
function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}" />`}
      <a href="${recipe.href}">View Recipe -></a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
