// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function country() {
  const president = 'Mr. President';
  function state() {
    const governor = 'Mr. Governor';
    console.log(`His Excellency ${governor} welcomes ${president}`);
    function lga() {
      const chairman = 'Mr. Chiarman';
      console.log(
        `The Local Goverment Area ${chairman} welcomes ${president} and ${governor}`
      );
    }
    lga();
  }
  state();
}

country();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    ++count;
    return count;
  };
};
// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3
console.log(newCounter()); // 4

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    // `increment` should increment a counter variable in closure scope and return it.
    increment: function() {
      ++count;
      return count;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement: function() {
      --count;
      return count;
    }
  };
};

const counterFactoryItems = counterFactory();
console.log(counterFactoryItems.increment()); // 1
console.log(counterFactoryItems.increment()); // 2
console.log(counterFactoryItems.increment()); // 3
console.log(counterFactoryItems.decrement()); // 2
console.log(counterFactoryItems.decrement()); // 1