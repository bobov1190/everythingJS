// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let total = 0;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  average = total / array.length;
  if (array.length === 0) {
    return 0;
  } else return average;
}

// var find_average = (array) => {
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

// The reduce() method of Array instances executes a user-supplied "reducer" callback function
// on each element of the array, in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
