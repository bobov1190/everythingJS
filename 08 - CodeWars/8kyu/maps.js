// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  let y = [];

  for (let i = 0; i < x.length; i++) {
    y.push(x[i] * 2);
  }

  return y;
}

// push - Adding elements to the end of the array

// function maps(x){
//     return x.map(n => n * 2);
// }

// The map() method of Array instances creates a new array populated
// with the results of calling a provided function on every element in the calling array.
