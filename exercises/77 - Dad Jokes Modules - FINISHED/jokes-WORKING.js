import { handleClick } from './lib/handlers.js';
import { jokeButton } from './lib/elements.js';

// one way to load the handleClick callback
// jokeButton.addEventListener('click', () => handleClick(loader));

jokeButton.addEventListener('click', handleClick);

console.log('heyy');
