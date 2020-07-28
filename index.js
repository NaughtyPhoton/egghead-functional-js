// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * Higher Order Function
 */

const withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Call count: ${++count}`)
    return fn(...args)
  }
}

const add = (x, y) => x + y

const countedAdd = withCount(add)

console.log(countedAdd(1, 2))
console.log(countedAdd(2, 2))
console.log(countedAdd(3, 2))