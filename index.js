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

/**
 * Immutable
 */
const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
}
const a = [1, 2, 3];
const b = push(4)(a);
console.log(a);
console.log(a === b);


// Mutable class
class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);
console.log(mg1 === mg2);

// immutable class
class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(
      this.content, 
      Math.max(this.amount - value, 0)
      );
  }
}

const ig1 = new ImmutableGlass('water', 100);
const ig2 = ig1.takeDrink(31);
console.log(ig1, ig2, ig1 === ig2);